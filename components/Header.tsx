"use client";
import { useCardContext } from "@/contexts/CardContext";
import DecryptionAnimation from "./Decrypt";
import { m, motion, MotionValue, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const mockValues = {
  cardNumber: "0000 0000 0000 0000",
  cardholderName: "Jane Appleseed",
  expiryMonth: "00",
  expiryYear: "23",
  cvc: "000",
};

export default function Header() {
  const { isConfirmed, cardNumber, cardholderName, cvc, expiryMonth, expiryYear } =
    useCardContext();
  // Motion values for mouse position
  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);

  // Perspective transformations
  const rotateY = useTransform(x, [-1, 1], [-20, 20]);
  const rotateX = useTransform(y, [-1, 1], [20, -20]);
  // Transformations for rotation and perspective

  // Event handler for mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Normalized values (-0.5 to 0.5)
    const normX = (mouseX - centerX) / centerX;
    const normY = (mouseY - centerY) / centerY;

    // Set motion values (-0.5 to 0.5)
    x.set(normX);
    y.set(normY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])
  return (
    <header className="relative sm:-ml-4 sm:h-[558px] sm:py-4">
      <section
        className="relative mb-[100px] px-4 pt-8 sm:mb-0 sm:flex sm:h-full sm:w-full sm:flex-col sm:items-center sm:justify-between sm:p-0">
        <motion.div
          style={{ rotateY, rotateX, perspective: "1000px" }}
          className="relative ml-auto z-10 h-[160px] w-[286px] bg-[url(/images/bg-card-back.png)] bg-contain bg-no-repeat sm:left-0 sm:top-0 sm:ml-[95px] sm:h-[246px] sm:w-[446px]" >
          <div className="absolute left-[28px] right-[26px] top-[66px] rounded bg-[#adb5be] px-3 py-[6px] text-right text-xs text-ic-white sm:left-[44px] sm:right-[40px] sm:text-sm sm:px-5 sm:py-[10px] sm:top-[100px]">
            {cvc ? cvc : mockValues.cvc}
          </div>
        </motion.div>
        <motion.div
          style={{ rotateY, rotateX, perspective: "1000px" }}
          className="absolute z-20 -mt-[66px] h-[160px] w-[286px] bg-[url(/images/bg-card-front.png)] bg-contain bg-no-repeat px-5 py-[18px] sm:relative sm:order-first sm:mt-0 sm:h-[246px] sm:w-[446px] sm:-ml-[92px] sm:px-8 sm:py-7">
          <div className="h-[30px] sm:h-[46px] w-auto bg-[url(/images/card-logo.svg)] bg-contain bg-no-repeat" />
          <div className="relative mt-9 sm:mt-16">
            {isConfirmed ? <DecryptionAnimation
              cardNumber={cardNumber}
            /> : <div className="text-nowrap tabular-nums tracking-[0.145em] text-ic-white sm:mt-16 sm:text-3xl sm:tracking-[0.095em]">{cardNumber || mockValues.cardNumber}</div>
            }
          </div>
          <div className="mt-3 flex sm:mt-6 sm:text-[15px] justify-between text-[10px] text-ic-white">
            <div className="uppercase tracking-[0.075em] sm:tracking-[0.085em]">
              {cardholderName ? cardholderName : mockValues.cardholderName}
            </div>
            <div className="tabular-nums tracking-[0.075em]">
              {expiryMonth ? expiryMonth : mockValues.expiryMonth}/
              {expiryYear ? expiryYear : mockValues.expiryYear}
            </div>
          </div>
        </motion.div>
      </section>
    </header>
  );
}
