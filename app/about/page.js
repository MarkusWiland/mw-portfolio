import CodeLanguages from "@/components/tools/codeLanguages";
import CodeTools from "@/components/tools/codeTools";
import ConnectLinks from "@/components/connectLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Work from "@/components/tools/work";

export default function About() {
  const startDate = new Date("2021-07-19"); // Ange ditt startdatum här
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - startDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  const yearsDifference = Math.floor(daysDifference / 365);
  const remainingDays = daysDifference % 365;

  const monthsDifference = Math.floor(remainingDays / 30);
  const daysRemaining = remainingDays % 30;

  return (
    <main>
      <div className="flex flex-col gap-16 md:gap-24">
        <div>
          <h1>Om Mig</h1>
          <h3>En snabbtitt</h3>
        </div>
        <div
          className="flex flex-col gap-16 md:gap-24 animate-in"
          style={{ "--index": 1 }}
        >
          <section className="flex gap-16">
            <h1 className="shrink-0 md:w-24 italic uppercase">Om Mig</h1>
            <div className="flex flex-col gap-6">
              <h2>Hello World, Jag heter Markus Wiland! </h2>
              <p>
                Jag har en passion för programmering, att skriva kod och
                utmaningar.
              </p>
              <p>
                När jag inte sitter vid skrivbordet och knackar kod så gillar
                jag att gå till gymmet, kolla fotboll och spela dator.
              </p>
            </div>
          </section>
          <section
            className="flex gap-16 w-full animate-in"
            style={{ "--index": 2 }}
          >
            <h1 className="shrink-0 md:w-24 italic uppercase">Kontakt</h1>
            <div className="w-full">
              <p className="pb-4 leading-none">
                Har du en fråga till mig? Kontakta mig på något av sätten nedan.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 animated-list ">
                {ConnectLinks.map((link, index) => (
                  <li key={index} className="transition-opacity col-span-1">
                    <Link
                      href={link.href}
                      className="rounded-lg border-gray-50 p-4 w-full border inline-grid  border-opacity-10"
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.icon}</span>
                        {link.label}
                        <span className="ml-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-arrow-up-right"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="flex gap-16">
            <h1 className="shrink-0 md:w-24 italic uppercase">Jobb</h1>
            <div className="flex flex-col gap-6 w-full ">
              <p className="leading-none">
                {yearsDifference}+ år av professionell utvecklings erfarenhet.
              </p>
              <p>
                Jag började som utvecklare för exakt {yearsDifference}år,{" "}
                {monthsDifference}månader, {daysRemaining}dagar sedan. ( exakt{" "}
                {daysDifference} antal dagar sedan)
              </p>
              <h3>Tillsvidare Anställd</h3>
              <ul className="flex flex-col gap-8">
                {Work.slice(0, 1).map((job, index) => (
                  <li
                    key={index}
                    className="transition-opacity border-b-2 pb-4 border-white border-opacity-10"
                  >
                    <Link href={job.link} className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <Image
                          src={job.image}
                          height={45}
                          alt={job.title}
                          width={45}
                          className="rounded-md border border-white border-opacity-30 h-full object-cover"
                        />
                        <div>
                          <h3 className="text-1xl uppercase font-bold">
                            {job.title}
                          </h3>
                          <p className="text-sm">{job.label}</p>
                        </div>
                      </div>
                      <time className="text-secondary">{job.year}</time>
                    </Link>
                  </li>
                ))}
              </ul>
              <h3>Mina konsult arbeten</h3>
              <ul className="flex flex-col animated-list gap-8">
                {Work.slice(1).map((job, index) => (
                  <li
                    key={index}
                    className="transition-opacity border-b-2 pb-4 border-white border-opacity-10"
                  >
                    <Link href={job.link} className="flex justify-between">
                      <div className="flex gap-4 items-center">
                        <Image
                          src={job.image}
                          alt={job.title}
                          height={45}
                          width={45}
                          className="rounded-md border border-white border-opacity-30 h-full object-cover"
                        />
                        <div>
                          <h3 className="text-1xl uppercase font-bold">
                            {job.title}
                          </h3>
                          <p className="text-sm">{job.label}</p>
                        </div>
                      </div>
                      <time className="text-secondary">{job.year}</time>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="flex gap-16">
            <h1 className="shrink-0 md:w-24 italic uppercase">Språk</h1>
            <div className="flex flex-col gap-6 w-full">
              <p className="leading-none">Kodspråk jag kan</p>
              <ul className="flex flex-wrap items-center animated-list gap-8">
                {CodeLanguages.map((lang, i) => (
                  <Link
                    style={{ "--icon-color": lang.color || "white" }}
                    href={lang.link}
                    alt={lang.label}
                    key={i}
                  >
                    <li className="flex items-center flex-col gap-2 code-language">
                      <span className="text-2xl icon">{lang.icon}</span>
                      <p>{lang.label}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </section>
          <section className="flex gap-16">
            <h1 className="shrink-0 md:w-24 italic uppercase">Verktyg</h1>
            <div className="flex flex-col gap-6 w-full">
              <p className="leading-none">Verktyg jag kan</p>
              <ul className="flex flex-wrap items-center animated-list gap-8">
                {CodeTools.map((tool, i) => (
                  <Link
                    style={{ "--icon-color": tool.color || "white" }}
                    href={tool.link}
                    alt={tool.label}
                    key={i}
                  >
                    <li className="flex items-center flex-col gap-2 code-tools">
                      <span className="text-2xl icon">{tool.icon}</span>
                      <p>{tool.label}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
