import Image, { type ImageProps } from "next/image";

const precompressedImagePaths = new Set([
  "/education/digital-reliability-engineering-elearning.webp",
  "/education/doe-training-hero.webp",
  "/education/electronic-components-training-hero.webp",
  "/expertise/books-and-methods.webp",
  "/expertise/decision-dashboard.webp",
  "/expertise/lab-review.webp",
  "/industries/aerospace-reliability-engineering.webp",
  "/industries/automotive.webp",
  "/industries/consumer-products-reliability-testing.webp",
  "/industries/elektronische-produkte.webp",
  "/industries/erneuerbare-energien.webp",
  "/industries/halbleiterindustrie.webp",
  "/industries/maschinenbau.webp",
  "/industries/medical-device-reliability-testing.webp",
  "/graphics/knowledge/testing-realistic.webp",
  "/team/home-engineering-consulting.webp",
  "/team/reliability-engineering-seminar.webp",
]);

type AiAwareImageProps = ImageProps & {
  disclosureClassName?: string;
  disclosureLocale?: "de" | "en";
  disclosureSize?: "sm" | "md";
  showAiDisclosure?: boolean;
};

export function AiAwareImage({
  alt,
  src,
  unoptimized,
  disclosureClassName: _disclosureClassName,
  disclosureLocale: _disclosureLocale,
  disclosureSize: _disclosureSize,
  showAiDisclosure: _showAiDisclosure,
  ...imageProps
}: AiAwareImageProps) {
  void _disclosureClassName;
  void _disclosureLocale;
  void _disclosureSize;
  void _showAiDisclosure;

  const useOriginalImage =
    typeof src === "string" && precompressedImagePaths.has(src);

  return (
    <Image
      {...imageProps}
      src={src}
      alt={alt}
      unoptimized={unoptimized ?? useOriginalImage}
    />
  );
}
