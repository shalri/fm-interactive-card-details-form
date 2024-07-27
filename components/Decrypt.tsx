import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DecryptionAnimationProps {
  cardNumber: string;
}

const DecryptionAnimation: React.FC<DecryptionAnimationProps> = ({
  cardNumber,
}) => {
  const placeholder = "0000 0000 0000 0000";
  const [displayedNumber, setDisplayedNumber] = useState<string>(placeholder);
  const [randomChars, setRandomChars] = useState<string[]>([]);

  useEffect(() => {
    const chars = cardNumber.split("").map((char, index) => ({
      char,
      delay: index * 100,
    }));

    chars.forEach(({ char, delay }, index) => {
      setTimeout(() => {
        setRandomChars((prev) => {
          const newChars = [...prev];
          newChars[index] = getRandomChar();
          return newChars;
        });
      }, delay);

      setTimeout(() => {
        setRandomChars((prev) => {
          const newChars = [...prev];
          newChars[index] = char;
          return newChars;
        });
      }, delay + 300);
    });

    setDisplayedNumber(cardNumber);
  }, [cardNumber]);

  const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    // const chars = "0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  return (
    <div className="h-[27px] sm:h-[36px]">
      <motion.div
        className="text-nowrap tabular-nums tracking-[0.145em] text-ic-white sm:mt-16 sm:text-3xl sm:tracking-[0.095em]"
      >
        {randomChars.join("")}
      </motion.div>
    </div>
  );
};

export default DecryptionAnimation;
