import Card from "@/components/projects/Card";
const dataa = [
  {
    title: "tailwind",
    img: "/ga.jpeg",
    link: "/",
  },
  {
    title: "Next js",
    img: "/ga.jpeg",
    link: "/",
  },
  {
    title: "React",
    img: "/ga.jpeg",
    link: "/",
  },
  {
    title: "Vue",
    img: "/ga.jpeg",
    link: "/",
  },
];
export default function Projects() {
  return (
    <main className="relative ">
      {dataa.map((card, index) => (
        <Card key={index} card={card} index={index} leng={dataa.length} />
      ))}
    </main>
  );
}
