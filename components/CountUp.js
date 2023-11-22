"use client";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect } from "react";
export default function CountUpNumber({ numb, duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const animation = animate(count, numb, { duration: duration, delay: 0.5 });

    return animation.stop;
  }, []);
  return <motion.span>{rounded}</motion.span>;
}
