// hooks/useCardAnimation.ts
import { useEffect, useState } from "react";
import { useMotionValue, useTransform } from "framer-motion";

export const useCardAnimation = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth > 768 : false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateY = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const rotateX = useTransform(y, [-0.5, 0.5], [20, -20]);

  const bgSize = useTransform([x, y], ([latestX, latestY]) => {
    const scaleX = 1 + (Math.abs(latestX as number) * 0.8);
    const scaleY = 1 + (Math.abs(latestY as number) * 0.8);
    const size = Math.min(scaleX, scaleY) * 100;
    return `${size}%`;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isWideScreen) {
      document.removeEventListener("mousemove", handleMouseMove);
      x.set(0);
      y.set(0);
    }
  }, [isWideScreen]);

  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const normX = (mouseX - centerX) / centerX;
    const normY = (mouseY - centerY) / centerY;

    x.set(normX);
    y.set(normY);
  };

  useEffect(() => {
    const handleMouseMoveCondition = (event: MouseEvent) => {
      if (!isWideScreen) return;

      const halfScreenX = window.innerWidth / 2;
      if (event.clientX <= halfScreenX) {
        document.addEventListener("mousemove", handleMouseMove);
      } else {
        document.removeEventListener("mousemove", handleMouseMove);
        x.set(0);
        y.set(0);
      }
    };

    if (isWideScreen) {
      document.addEventListener("mousemove", handleMouseMoveCondition);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveCondition);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isWideScreen]);

  return { rotateY, rotateX, isWideScreen, bgSize };
};
