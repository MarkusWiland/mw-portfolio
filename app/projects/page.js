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
        <div className="absolute top-[80vh] left-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg>
      </div>
    </main>
  );
}
