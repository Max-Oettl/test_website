import Image from "next/image";

type SiteBrandLogoProps = {
  placement: "header" | "footer";
};

export function SiteBrandLogo({ placement }: SiteBrandLogoProps) {
  if (placement === "header") {
    return (
      <Image
        src="/branding/reltest-horizontal-positive.svg"
        alt="RelTest"
        fill
        className="object-contain object-left"
        sizes="(min-width: 640px) 208px, 168px"
      />
    );
  }

  return (
    <div className="flex h-28 w-80 max-w-full items-center">
      <Image
        src="/branding/reltest-horizontal-negative.svg"
        alt="RelTest"
        width={466}
        height={195}
        className="h-full w-full object-contain object-left"
      />
    </div>
  );
}
