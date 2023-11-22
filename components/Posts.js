"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};
export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <motion.div
          variants={fadeInVariants}
          key={index}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
            <Link href="/">
            <li className="flex items-center relative overflow-hidden p-3 -m-3 outline-none gap-2">
                    <span className=" text-[#ededed] font-bold">
                     
                      {post.title}
                    </span>
                    <span className="text-[#a0a0a0]">
          
                      A home to delvieire to you
                    </span>

                    <div className="flex-grow border-b border-dotted text-blogColor"></div>
                    <h2 className="text-blogColor md:w-24 whitespace-nowrap	">
                      {post.date}
                    </h2>
                  </li>
            </Link>
        </motion.div>
      ))}
    </>
  );
}
