"use client";

import React from "react";

import GearEquipmentComp from "@/components/gearEquipmentComp";
export default function Gear() {
  return (
    <main className="flex flex-col gap-16 md:pt-24 pt-16 md:pb-24 pb-16">
      <section>
        <div className="flex flex-col gap-10">
          <GearEquipmentComp title={"Apple"} />
        </div>
      </section>
      <section className="animate-in" style={{ "--index": 2 }}>
        <div className="flex flex-col gap-10">
          <GearEquipmentComp title={"Önskemål"} />
        </div>
      </section>
    </main>
  );
}
