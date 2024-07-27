"use client";
import CardDetailsForm from "./CardDetailsForm";
import ThankYou from "./ThankYou";
import { AnimatePresence, motion } from "framer-motion";
import { useCardContext } from "@/contexts/CardContext";

export default function CardComponent() {
  const { isConfirmed } = useCardContext();
  return (
    <AnimatePresence>
      <motion.div
        key="form"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        {isConfirmed ? (
          <ThankYou />
        ) : (
          <CardDetailsForm />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
