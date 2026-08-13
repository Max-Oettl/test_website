import Image, { type ImageProps } from "next/image";

import { getAiImageDisclosure } from "../_content/ai-image-disclosures";
import { AiImageLabel } from "./ai-image-label";

type AiAwareImageProps = ImageProps & {
  disclosureClassName?: string;
  disclosureLocale?: "de" | "en";
  disclosureSize?: "sm" | "md";
  showAiDisclosure?: boolean;
};

export function AiAwareImage({
  alt,
  disclosureClassName = "right-3 bottom-3",
  disclosureLocale,
  disclosureSize = "sm",
  showAiDisclosure = true,
  ...imageProps
}: AiAwareImageProps) {
  const src = typeof imageProps.src === "string" ? imageProps.src : undefined;
  const kind = getAiImageDisclosure(src);

  return (
    <>
      <Image {...imageProps} alt={alt} />
      {showAiDisclosure && kind ? (
        <AiImageLabel
          kind={kind}
          locale={disclosureLocale}
          size={disclosureSize}
          className={disclosureClassName}
        />
      ) : null}
    </>
  );
}
