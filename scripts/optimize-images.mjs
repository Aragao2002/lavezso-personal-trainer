import sharp from "sharp";
import path from "node:path";

const source = path.resolve("work/source-images");
const target = path.resolve("public/assets");
const jobs = [
  ["WhatsApp Image 2026-08-22 at 12.03.17.jpeg", "personal-hero.webp", 1400, 84],
  ["WhatsApp Image 2026-08-22 at 12.03.17 (1).jpeg", "personal-dumbbells.webp", 1200, 84],
  ["WhatsApp Image 2026-08-22 at 12.03.18 (1).jpeg", "presencial.webp", 900, 82],
  ["WhatsApp Image 2026-08-22 at 12.03.18.jpeg", "consultoria.webp", 900, 82],
  ["WhatsApp Image 2026-08-22 at 12.03.18 (2).jpeg", "resultado-01.webp", 720, 78],
  ["WhatsApp Image 2026-08-22 at 12.03.19 (1).jpeg", "resultado-02.webp", 720, 78],
  ["WhatsApp Image 2026-08-22 at 12.03.19 (2).jpeg", "resultado-03.webp", 720, 78],
  ["WhatsApp Image 2026-08-22 at 12.03.19 (3).jpeg", "resultado-04.webp", 720, 78],
  ["WhatsApp Image 2026-08-22 at 12.03.19.jpeg", "resultado-05.webp", 720, 78],
  ["WhatsApp Image 2026-08-22 at 12.03.20 (1).jpeg", "resultado-06.webp", 720, 78],
];

await Promise.all(jobs.map(async ([input, output, width, quality]) => {
  let pipeline = sharp(path.join(source, input)).rotate().resize({ width, withoutEnlargement: true });
  if (output.startsWith("resultado-")) {
    const privacyCover = await sharp({ create: { width, height: 130, channels: 4, background: "#142b45" } }).png().toBuffer();
    pipeline = pipeline.composite([{ input: privacyCover, top: 0, left: 0 }]);
  }
  await pipeline.webp({ quality }).toFile(path.join(target, output));
}));
await sharp(Buffer.from(`<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="24" fill="#050505"/><path d="M26 18h25L39 89h54l-4 22H10z" fill="#2580ff"/><path d="M58 18h51l-4 22H54z" fill="#fff"/></svg>`)).png().toFile(path.resolve("public/favicon.png"));
console.log(`Optimized ${jobs.length} images.`);
