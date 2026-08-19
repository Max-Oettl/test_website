import { stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const photos = [
  "public/team/home-engineering-consulting.png",
  "public/expertise/decision-dashboard.png",
  "public/expertise/books-and-methods.png",
  "public/expertise/lab-review.png",
  "public/education/doe-training-hero.png",
  "public/education/electronic-components-training-hero.png",
  "public/team/reliability-engineering-seminar.png",
  "public/industries/automotive.png",
  "public/industries/maschinenbau.png",
  "public/industries/elektronische-produkte.png",
  "public/industries/halbleiterindustrie.png",
  "public/industries/erneuerbare-energien.png",
  "public/industries/consumer-products-reliability-testing.png",
  "public/industries/medical-device-reliability-testing.png",
  "public/industries/aerospace-reliability-engineering.png",
];

const root = process.cwd();
let sourceBytes = 0;
let optimizedBytes = 0;

for (const relativeSource of photos) {
  const source = path.join(root, relativeSource);
  const output = source.replace(/\.[^.]+$/, ".webp");

  await sharp(source)
    .rotate()
    .webp({ quality: 85, effort: 5, smartSubsample: true })
    .toFile(output);

  const [sourceStats, outputStats] = await Promise.all([stat(source), stat(output)]);
  sourceBytes += sourceStats.size;
  optimizedBytes += outputStats.size;

  const saving = Math.round((1 - outputStats.size / sourceStats.size) * 100);
  console.log(
    `${relativeSource} -> ${path.relative(root, output)} (${saving}% smaller)`,
  );
}

const totalSaving = Math.round((1 - optimizedBytes / sourceBytes) * 100);
console.log(
  `Total: ${(sourceBytes / 1024 / 1024).toFixed(2)} MB -> ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB (${totalSaving}% smaller)`,
);
