"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Card({ card, index, leng }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const { title, img, link } = card;
  console.log("card", card);
  return (
    <main
      ref={container}
      className="h-[100vh] sticky top-0  flex items-center justify-center"
    >
      <motion.div
        style={{
          top: `calc(-5vh + ${index * 80}px)`,
          opacity: scrollYProgress,
        }}
        className={`flex flex-col relative w-full  origin-top	 bg-box py-4 px-8 border border-opacity-10 border-white rounded-md`}
      >
        <h1 className="text-2xl">{title}</h1>
        <h3 className="text-sm uppercase">PERSONAL PROJECT</h3>
        <div className="grid grid-cols-[3fr_2fr] gap-x-[30px] h-full mt-[25px]">
          <div className="pt-[25px] pb-[50px] px-0 border-t-[#d9d9d9] border-t border-solid ">
            <h4>Descriptipn</h4>
            <p className="text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
            </p>
            <div>
              <h4>Tech used</h4>
              <div className="flex items-center flex-wrap">
                <div>
                  <span>Next JS</span>
                </div>
                <div>
                  <span>Next JS</span>
                </div>
                <div>
                  <span>Next JS</span>
                </div>
                <div>
                  <span>Next JS</span>
                </div>
                <div>
                  <span>Next JS</span>
                </div>
                <div>
                  <span>Next JS</span>
                </div>
              </div>
            </div>
            <span>hejsan</span>
          </div>
          <div>
            <Image src={img} alt={title} width={55} height={55} />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
