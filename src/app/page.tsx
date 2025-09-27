import fs from "fs";
import path from "path";
import Image from "next/image";

async function getImages() {
  const dir = path.join(process.cwd(), "public", "portfolio");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map((file) => `/portfolio/${file}`);
}

export default async function Page() {
  const images = await getImages();

  return (
    <main className="flex flex-col items-center">
      {images.map((src, i) => (
        <div key={i} className="w-full max-w-3xl">
          <Image
            src={src}
            alt={`portfolio-${i}`}
            width={1200}
            height={800}
            className="shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </main>
  );
}
