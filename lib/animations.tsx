// EncryptionAnimation.tsx
import React from "react";
import { motion } from "framer-motion";

interface EncryptionAnimationProps {
  cardNumber: string;
}

const EncryptionAnimation: React.FC<EncryptionAnimationProps> = ({
  cardNumber,
}) => {
  const encryptedNumber = cardNumber.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      {char}
    </motion.span>
  ));

  return <>{encryptedNumber}</>;
};

export default EncryptionAnimation;
