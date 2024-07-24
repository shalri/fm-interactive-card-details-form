"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ThankYou() {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <section className="mt-[40px] flex w-full flex-col items-center px-6 pb-20 sm:max-w-[380px]">
      <div className="size-20 bg-[url(/images/icon-complete.svg)] bg-contain" />
      <h1 className="mt-8 text-[1.85rem] uppercase tracking-widest text-ic-very-dark-violet">
        Thank you!
      </h1>
      <p className="mt-2 text-ic-dark-grayish-violet">
        We&apos;ve added your card details
      </p>
      <Link
        href="/"
        className="mt-12 w-full rounded-lg bg-ic-very-dark-violet py-3 text-ic-white"
        onClick={handleClick}
      >
        Continue
      </Link>
    </section>
  );
}
