"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    date: "Mars 2023",
    title: "tailwind",
    content: "hej",
  },
  {
    date: "Januari 2023",
    title: "Next js",
    content: "hej",
  },
  {
    date: "Juni 2023",
    title: "React",
    content: "hej",
  },
  {
    date: "Auusti 2023",
    title: "Vue",
    content: "hej",
  },
];
export default function Blog() {
  const [search, setSearch] = useState("");
 
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
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
  return (
    <main>
      <section>
        <h2 className="py-10 text-2xl font-bold">Senaste Poster</h2>
        <input
          name="search"
          placeholder="Sök..."

          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 w-full rounded-md capitalize italic text-black"
        />
        <ul className="flex flex-col gap-4 animated-list pb-4 my-10 ">
          {filteredPosts.map((post, index) => {
            return (
              <motion.div
                variants={fadeInVariants}
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <Link href={`/blog/${post.slug}`}>
                  <li className="flex items-center relative overflow-hidden p-3 -m-3 outline-none gap-2">
                    <span className=" text-[#ededed] font-bold">{post.title}</span>
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
            );
          })}
        </ul>
      </section>
    </main>
  );
}
