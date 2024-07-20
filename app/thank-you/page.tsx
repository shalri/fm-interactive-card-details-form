"use client";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
export default function ThankYouPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        Thank you!
        <button className="" onClick={handleClick}>
          continue
        </button>
      </Suspense>
    </main>
  );
}
