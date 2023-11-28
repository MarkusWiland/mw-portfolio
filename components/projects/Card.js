"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export default function Card({ card, index, leng }) {
  const { title, img, link } = card;
  console.log("card", card);
  return (
    <main className="h-[100vh] sticky top-16  flex items-center justify-center">
      <motion.div
        style={{ top: `calc(-5vh + ${index * 40}px)` }}
        className={`flex flex-col relative w-full  origin-top	 rounded-[25px] `}
      >
        <Link href={link}>
          <div className="bg-box animate-in flex flex-col justify-center items-center gap-2 border  border-opacity-10	rounded-md border-white py-10 px-10">
            <Image src={img} alt={title} width={55} height={55} />
            <h1 className="text-2xl">{title}</h1>
          </div>
        </Link>
      </motion.div>
    </main>
  );
}
