import dateCounter from "@/helpers/dateCounter";
import React from "react";
import CountUpNumber from "../CountUp";
import workExperienceTools from "../tools/workExperienceTools";
export default function WorkExperience() {
  return (
    <>
      {workExperienceTools.map((work, index) => (
        <div
          key={index}
          className="bg-box animate-in flex flex-col justify-center items-center gap-2 border  border-opacity-10	rounded-md border-white py-10 px-10"
          style={{ "--index": work.index }}
        >
          <h1>
            <span className="text-5xl">
              <CountUpNumber numb={dateCounter(work.date)} />
            </span>
            dagar
          </h1>
          <p className="text-title text-sm whitespace-nowrap">{work.title}</p>
          <p className="text-title text-sm">
            {new Date().getFullYear() - work.year} År
          </p>
        </div>
      ))}
    </>
  );
}
