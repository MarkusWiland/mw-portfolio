"use client";
import { motion } from "framer-motion";
import gearEquipment from "@/components/tools/gearEquipment";
import Image from "next/image";
import Link from "next/link";
export default function GearEquipmentComp({ title }) {
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
    <>
      <h1 className="text-2xl animated-in" style={{ "--index": 1 }}>
        {title}
      </h1>
      <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8 animated-list">
        {gearEquipment.map((gear, index) => (
          <motion.div
            variants={fadeInVariants}
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <li className="flex gap-4 items-center transition-opacity">
              <Image
                src={gear.image}
                width={55}
                height={55}
                className="rounded-lg border border-gray-50 border-opacity-10"
              />
              <div className="flex grow justify-between gap-2 items-center">
                <div className="space-y-1">
                  <h2 className="text-1xl">{gear.title}</h2>
                  <p className="text-sm">{gear.content}</p>
                </div>
                <div>
                  <Link
                    href={gear.link}
                    className="text-sm py-2 px-3 rounded-md bg-gray-600 hover:bg-gray-800"
                  >
                    Köp
                  </Link>
                </div>
              </div>
            </li>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
