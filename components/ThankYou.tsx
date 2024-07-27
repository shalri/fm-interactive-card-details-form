"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCardContext } from "@/contexts/CardContext";

export default function ThankYou() {
  const { setIsConfirmed } = useCardContext();
  const handleClick = () => {
    setIsConfirmed(false);
  };

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-10 flex w-full flex-col items-center px-6 pb-20 sm:max-w-[480px] sm:px-0 sm:pb-0 sm:mt-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="size-20 bg-[url(/images/icon-complete.svg)] bg-contain" />
        <h1 className="mt-8 text-[1.85rem] uppercase tracking-widest text-ic-very-dark-violet">
          Thank you!
        </h1>
        <p className="mt-2 text-ic-dark-grayish-violet">
          We&apos;ve added your card details
        </p>
        <button
          className="mt-12 w-full rounded-lg bg-ic-very-dark-violet py-3 text-ic-white"
          onClick={handleClick}
        >
          Continue
        </button>
      </motion.section>
    </AnimatePresence>
  );
}

