type BrandLineWatermarkProps = {
  placement?: "education" | "solutions" | "knowledge" | "expertise";
};

const placementClasses = {
  education:
    "-left-72 -top-28 h-[28rem] w-[40rem] sm:-left-64 sm:-top-36 sm:h-[36rem] sm:w-[52rem] lg:-left-56 lg:-top-44 lg:h-[44rem] lg:w-[64rem]",
  solutions:
    "-bottom-48 -right-56 h-[36rem] w-[52rem] sm:-bottom-56 sm:-right-40 sm:h-[44rem] sm:w-[64rem] lg:-bottom-64 lg:-right-28 lg:h-[52rem] lg:w-[76rem]",
  knowledge:
    "-right-72 -top-40 h-[34rem] w-[50rem] sm:-right-52 sm:-top-48 sm:h-[42rem] sm:w-[62rem] lg:-right-40 lg:-top-56 lg:h-[50rem] lg:w-[74rem]",
  expertise:
    "-bottom-52 -left-64 h-[38rem] w-[54rem] sm:-bottom-60 sm:-left-48 sm:h-[46rem] sm:w-[66rem] lg:-bottom-72 lg:-left-32 lg:h-[54rem] lg:w-[78rem]",
};

export function BrandLineWatermark({
  placement = "education",
}: BrandLineWatermarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-[0.11] ${placementClasses[placement]}`}
      viewBox="0 0 900 660"
      fill="none"
    >
      <path
        d="M-30 510C170 500 330 472 455 404C578 337 674 220 770-30"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M-30 176C155 322 317 404 465 431C612 457 755 452 930 486"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M-30 342L758 225C804 217 859 209 930 201"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
