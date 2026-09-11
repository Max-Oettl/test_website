import { AiAwareImage as Image } from "./ai-aware-image";

export function IndustrySpectrumGraphic({ label }: { label: string }) {
  return (
    <Image
      src="/industries/pictograms/industry-spectrum-pictograms-generated-v2.png"
      alt={label}
      width={1448}
      height={1086}
      sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 44vw, calc(100vw - 3rem)"
      className="h-auto w-full object-contain"
      preload
    />
  );
}
