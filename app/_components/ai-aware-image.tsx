import Image, { type ImageProps } from "next/image";

type AiAwareImageProps = ImageProps & {
  disclosureClassName?: string;
  disclosureLocale?: "de" | "en";
  disclosureSize?: "sm" | "md";
  showAiDisclosure?: boolean;
};

export function AiAwareImage({
  alt,
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

  return <Image {...imageProps} alt={alt} />;
}
