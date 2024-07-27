import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface ErrorMessageProps {
  error: string | null;
  key: string;
  className?: string;
}

export default function ErrorMessage({ error, key, className }: ErrorMessageProps) {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          layout
          key={key}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ opacity: { duration: 0.5 }, height: { duration: 0.3 } }}
          className={cn("text-sm text-red-500", className)}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
