"use client";
import ThankYou from "@/components/ThankYou";
import { Suspense } from "react";

export default function ThankYouPage() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <ThankYou />
      </Suspense>
    </main>
  );
}
