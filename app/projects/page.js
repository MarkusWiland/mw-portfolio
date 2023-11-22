import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <main>
      <h1>Inga projekt inlagda ännu...</h1>
      <ul className="flex flex-col animated-list">
        <li className="py-6 flex flex-col md:flex-row gap-4 md:gap-6">
          <Link
            href={`/`}
            className="w-full md:w-1/5 aspect-video rounded-md border border-opacity-40	border-gray-400 overflow-clip select-none"
          >
            <div className="relative w-full h-full">
              <Image
                src="/ga.jpeg"
                alt={"ga"}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </Link>

          <div className="w-full md:w-4/5 space-y-2">
            <div className="flex gap-4 items-center">
              <h1>title</h1> *<time>2023 02 20</time>
            </div>
            <p> lorem ipsum</p>
          </div>
        </li>
      </ul>
    </main>
  );
}
