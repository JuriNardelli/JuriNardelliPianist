import { Navbar } from "@/components/Navbar";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Welcome! | Juri Nardelli Academy",
  description: "Your mentorship journey begins now.",
};

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-black px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>

          <h1 className="mt-8 text-3xl font-bold text-white">
            Welcome to the Academy!
          </h1>

          <p className="mt-4 text-lg text-zinc-400">
            Your payment was successful. I'm excited to begin this journey with you.
          </p>

          <p className="mt-6 text-zinc-500">
            You'll receive a confirmation email shortly with next steps to schedule
            your first lesson.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-medium text-white transition-all hover:border-zinc-600 hover:bg-zinc-800"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
