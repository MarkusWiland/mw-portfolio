"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
const tabs = [
  { id: "home", label: "Start", link: "/" },
  { id: "about", label: "Om", link: "/about" },
  { id: "blog", label: "Blogg", link: "/blog" },
  { id: "projects", label: "Projekt", link: "/projects" },
  { id: "gear", label: "Utrustning", link: "/gear" },
];
export default function Header() {
  const pathName = usePathname();

  return (
    <header className="md:sticky top-0 z-20 backdrop-filter backdrop-grayscale backdrop-blur-md ">
      <nav className="py-3  flex justify-between items-center max-w-[700px] mx-auto">
        <Link
          href="/"
          className={`px-4 py-2 ${
            pathName === "/" ? "text-gray-200" : "text-secondary"
          }`}
        >
          <Image src="/BGICON.png" alt="bgicon" width={100} height={100} />
        </Link>
        <ul className="md:flex gap-1 items-center">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Link
                href={tab.link}
                className={`px-4 relative top-0 py-2 text-white rounded-full focus-visible:outline transition${
                  pathName === `${tab.link}` ? "" : "hover:text-white/50"
                }`}
              >
                {pathName === `${tab.link}` && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0  bg-white"
                    style={{ borderRadius: 10 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 mix-blend-exclusion">
                  {tab.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
