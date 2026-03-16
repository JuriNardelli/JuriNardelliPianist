import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "Email and first name are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // 1. Add contact to Brevo list
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: firstName },
        listIds: process.env.BREVO_LIST_ID
          ? [parseInt(process.env.BREVO_LIST_ID)]
          : [],
        updateEnabled: true,
      }),
    });

    if (!contactRes.ok) {
      const err = await contactRes.json();
      // "duplicate_parameter" means contact already exists — that's OK
      if (err.code !== "duplicate_parameter") {
        console.error("Brevo contact error:", err);
        return NextResponse.json(
          { error: "Failed to subscribe" },
          { status: 500 }
        );
      }
    }

    // 2. Send transactional email with PDF link
    const templateId = process.env.BREVO_TEMPLATE_ID;
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://jurinardelli.com";

    const emailRes = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          templateId
            ? {
                // Use Brevo template if configured
                templateId: parseInt(templateId),
                to: [{ email, name: firstName }],
                params: {
                  FIRSTNAME: firstName,
                  PDF_LINK: `${baseUrl}/downloads/4-practice-secrets.pdf`,
                },
              }
            : {
                // Fallback: send inline email
                sender: {
                  name: "Juri Nardelli",
                  email: process.env.BREVO_SENDER_EMAIL || "juri@jnpianist.com",
                },
                to: [{ email, name: firstName }],
                subject:
                  "Your Free Guide: 4 Practice Secrets from a Concert Pianist",
                htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <p style="color:#a1a1aa;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:24px;">
      Juri Nardelli · Pianist
    </p>
    <h1 style="color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;margin-bottom:16px;">
      Hi ${firstName}, here's your free guide
    </h1>
    <p style="color:#a1a1aa;font-size:16px;line-height:1.6;margin-bottom:32px;">
      Thank you for downloading <strong style="color:#fbbf24;">4 Practice Secrets from a Concert Pianist</strong>. These are the techniques I use with my own students — I hope they transform your practice sessions.
    </p>
    <a href="${baseUrl}/downloads/4-practice-secrets.pdf"
       style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#000;font-weight:700;font-size:16px;padding:14px 32px;border-radius:999px;text-decoration:none;">
      Download Your Free PDF →
    </a>
    <p style="color:#52525b;font-size:14px;line-height:1.6;margin-top:32px;">
      Want to go deeper? I offer private online mentorship for serious piano students.
    </p>
    <a href="${baseUrl}/academy"
       style="color:#fbbf24;font-size:14px;text-decoration:none;">
      Learn about the Academy →
    </a>
    <hr style="border:none;border-top:1px solid #27272a;margin:32px 0;" />
    <p style="color:#3f3f46;font-size:12px;">
      © ${new Date().getFullYear()} Juri Nardelli · jurinardelli.com
    </p>
  </div>
</body>
</html>`,
              }
        ),
      }
    );

    if (!emailRes.ok) {
      const err = await emailRes.json();
      console.error("Brevo email error:", err);
      // Contact was added even if email fails — still return success
      return NextResponse.json({
        success: true,
        emailSent: false,
        downloadUrl: `${baseUrl}/downloads/4-practice-secrets.pdf`,
      });
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      downloadUrl: `${baseUrl}/downloads/4-practice-secrets.pdf`,
    });
  } catch (error) {
    console.error("Lead magnet error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
