import Image from "next/image";
import Link from "next/link";
import Posts from "@/components/Posts";
import CountUpNumber from "@/components/CountUp";
import WorkExperience from "@/components/workExperience/workExperience";
import Stats from "@/components/Stats";
import statsTools from "@/components/tools/statsTools";

export default async function Home() {


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
  return (
    <main className="flex flex-col gap-8 md:gap-12 md:pt-24 pt-16 md:pb-24 pb-16">
      <section className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="text-5xl animate-in text-primary text-center">
            Markus Wiland
          </h1>
          <p
            className="animate-in text-center text-secondary"
            style={{ "--index": 1 }}
          >
            I make code
          </p>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 444 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.8687 15.4899C74.054 16.4907 69.5447 17.8854 65.4916 19.7909C65.0503 20.0009 64.921 20.2841 64.883 20.4052C64.8199 20.6202 64.8511 20.8199 64.963 21.0044C65.033 21.1231 65.1442 21.2676 65.3756 21.3559C65.539 21.4191 65.9586 21.4632 66.5119 21.4377C67.4567 21.4035 68.9126 21.2647 69.6146 21.2492C72.0184 21.2229 74.4212 21.1566 76.8252 21.1437C84.483 21.1085 85.8217 21.1858 95.6622 20.8889C107.15 20.5424 118.663 20.1286 130.16 19.6349C93.6415 22.4425 57.1836 25.5826 20.9114 28.5584C20.507 28.5941 20.2036 28.9481 20.239 29.3479C20.2611 29.7614 20.6319 30.0604 21.0364 30.0248C105.676 23.0856 191.229 15.2182 276.614 12.95C280.828 12.9506 285.029 12.9515 289.216 12.9527C314.515 12.983 339.831 13.1332 365.113 13.6713C373.343 13.8506 381.573 14.0699 389.817 14.2622C392.249 14.3155 394.695 14.3684 397.141 14.4213C399.114 14.458 404.196 14.6399 404.912 14.6375C405.56 14.6366 405.71 14.0591 405.723 14.0321C405.76 13.8443 405.729 13.6313 405.562 13.4346C405.521 13.3821 405.41 13.2377 405.165 13.1763C405.125 13.1772 404.935 13.1546 404.543 13.1232C384.203 11.9287 363.82 11.2426 343.406 10.9712C346.147 10.9375 348.888 10.8905 351.629 10.8568C372.761 10.5516 393.956 10.6589 415.056 9.45961C419.859 9.19356 424.675 8.90043 429.463 8.56793C432.687 8.35002 440.994 8.35402 442.161 7.98109C442.698 7.82237 442.812 7.4459 442.821 7.25873C442.831 7.04486 442.785 6.80548 442.538 6.59726C442.427 6.49286 442.086 6.32685 441.449 6.20735C420.633 2.21891 396.411 4.00769 375.283 3.23116C317.901 1.08986 260.84 4.61719 203.585 7.94837C154.168 10.8264 104.716 12.0093 55.3401 15.5275C37.2672 16.807 18.588 16.2036 0.823249 19.9602C0.419887 20.0492 0.171052 20.4285 0.246881 20.8274C0.336212 21.2261 0.733323 21.4845 1.13668 21.3955C18.8207 17.654 37.4328 18.2723 55.4382 16.9942C63.2472 16.4349 71.0576 15.9424 78.8687 15.4899ZM231.787 13.1095C201.495 13.3094 171.207 13.7361 140.901 14.5507C120.111 15.1021 89.7341 11.8586 69.2331 19.7887C69.3816 19.7854 69.503 19.7827 69.611 19.7803C72.0147 19.7541 74.4174 19.6743 76.8217 19.6748C84.466 19.6399 85.8047 19.7173 95.6182 19.421C120.712 18.6545 145.867 17.5663 170.934 16.1861C191.239 15.0711 211.518 14.0234 231.787 13.1095ZM436.6 6.87493C416.94 3.91602 394.752 5.41987 375.219 4.70168C317.891 2.55919 260.87 6.08546 203.669 9.41545C178.105 10.9134 152.544 11.9439 126.998 13.0808C131.903 13.1598 136.591 13.19 140.87 13.0824C184.19 11.9144 227.513 11.5344 270.856 11.4877C297.755 10.4945 324.66 9.75496 351.612 9.37491C372.731 9.08329 393.885 9.17819 414.985 7.99223C419.775 7.72648 424.577 7.43365 429.365 7.10115C430.997 6.99842 433.954 6.94657 436.6 6.87493Z"
              fill="#3E3E3C"
            ></path>
          </svg>
        </div>
        <div
          className="animate-in flex md:items-center gap-6"
          style={{ "--index": 1 }}
        >
          <Image
            src="/me.jpeg"
            alt="Markus Wiland"
            height={100}
            width={100}
            className="rounded-full border"
          />
          <div
            className="flex animate-in flex-col gap-4"
            style={{ "--index": 1 }}
          >
            <ul className="space-y-2  animated-list">
            {statsTools.map((tool, index) => (
              <Stats key={index} stats={tool} />
            ))}
            </ul>
          </div>
        </div>
        <div
          className="italic animate-in max-w-xl pt-4"
          style={{ "--index": 2 }}
        >
          Jag är en passionerad utvecklare som trivs med att skapa innovativa
          lösningar med hjälp av kod. För närvarande är jag en aktiv IT-konsult
          hos{" "}
          <a href="www.garrison.se" className="font-bold underline">
            Garrison Consulting AB
          </a>
          , där jag fokuserar på att leverera högkvalitativa tekniska lösningar.
        </div>
        <ul
          className="flex gap-3 animate-in animated-list py-4"
          style={{ "--index": 2 }}
        >
          <li>
            <Link href="/" className="text-title ">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  length="auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <p>Kontakta Mig</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-title ">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  length="auto"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
                <p>Fler sätt att kontakta mig</p>
              </div>
            </Link>
          </li>
        </ul>
        <div
          className="grid grid-cols-3 animate-in gap-3"
          style={{ "--index": 1 }}
        >
          <WorkExperience />
        </div>
      </section>
      <section>
        <h2 className="py-10 text-2xl font-bold">Senaste Poster</h2>
        <ul className="flex flex-col gap-4 animated-list pb-4">
          <Posts posts={posts} />
        </ul>
        <Link href="/" className="underline flex items-center">
          Se alla poster{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              length="auto"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </span>
        </Link>
      </section>
    </main>
  );
}
