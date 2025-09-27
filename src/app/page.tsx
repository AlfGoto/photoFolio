import Image from "next/image";
import { data } from "./data"
import Description from "@/components/description";

export default async function Page() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {data.map(({ file, title, place }, i) => (
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
          <Description title={title} place={place} />
        </div>
      ))}
    </main>
  );
}
