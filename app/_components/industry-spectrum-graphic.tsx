import Image from "next/image";

export function IndustrySpectrumGraphic({ label }: { label: string }) {
  return (
    <Image
      src="/industries/pictograms/industry-pictograms-master-v2.png"
      alt={label}
      width={1254}
      height={1254}
      sizes="(min-width: 1024px) 30rem, (min-width: 640px) 28rem, calc(100vw - 6rem)"
      loading="eager"
      className="h-full w-full object-cover"
    />
  );
}
