import { AnimatePresence, motion } from "framer-motion";

interface CardDetailsInputProps {
  inputField: string;
  mockValue: string;
  className?: string
  key: string;
}

export default function CardDetailsInput({ inputField, mockValue, className, key }: CardDetailsInputProps) {
  return (
    <AnimatePresence>
      {inputField ?
        <motion.span
          layout
          className={className}
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          {inputField}
        </motion.span> :
        <motion.span
          className={className}
          layout
          // className="inline-block w-full"
          key={key + "mock"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          {mockValue}
        </motion.span>
      }
    </AnimatePresence>
  )
}
