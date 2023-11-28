import Card from "@/components/projects/Card";
const dataa = [
  {
    title: "tailwind",
    img: "/tailwind.png",
    link: "/",
  },
  {
    title: "Next js",
    img: "/nextjs.png",
    link: "/",
  },
  {
    title: "React",
    img: "/react.png",
    link: "/",
  },
  {
    title: "Vue",
    img: "/vue.png",
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
