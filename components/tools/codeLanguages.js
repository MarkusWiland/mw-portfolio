import { SiHtml5, SiCss3, SiTypescript, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const CodeLanguages = [
  {
    link: "/",
    label: "JavaScript",
    icon: <SiJavascript />,
    color: "var(--icon-color-javascript)",
  },
  {
    link: "/",
    label: "TypeScript",
    icon: <SiTypescript />,
    color: "var(--icon-color-typescript)",
  },
  {
    link: "/",
    label: "Java",
    icon: <FaJava />,
    color: "var(--icon-color-java)",
  },
  {
    link: "/",
    label: "HTML5",
    icon: <SiHtml5 />,
    color: "var(--icon-color-html)",
  },
  {
    link: "/",
    label: "CSS3",
    icon: <SiCss3 />,
    color: "var(--icon-color-css)",
  },
];

export default CodeLanguages;
