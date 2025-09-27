import Image from "next/image";
import { data } from "./data"
import Description from "@/components/description";

export default async function Page() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {data.map(({ file, title, desc }, i) => {
        if (file === "BLANK") return <div key={i} className="flex flex-col w-full background-background items-center color-foreground py-5 px-10">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-center">{desc}</p>
        </div>
        return (
          <div
            key={i}
            className="flex justify-center snap-center relative"
          >
            <Image
              src={`/portfolio/${file}`}
              alt={`portfolio-${title}`}
              width={800}
              height={600}
              loading="lazy"
              className="z-50"
            />
            <Description title={title} desc={desc} />
          </div>
        )
      })}
    </main>
  );
}
