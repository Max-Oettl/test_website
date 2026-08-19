export type AiImageDisclosureKind = "generated" | "modified";

/*
 * Visible disclosure is intentionally limited to realistic synthetic or
 * materially AI-altered imagery that could be mistaken for an authentic
 * photograph. Logos, icons, plots, diagrams, book covers and unchanged
 * employee/customer photographs are not included here.
 */
const aiImageDisclosures = new Map<string, AiImageDisclosureKind>([
  ["/about/bernd-bertsche-professional.png", "generated"],
  ["/about/bernd-bertsche-professional.webp", "generated"],
  ["/about/component-review.png", "generated"],
  ["/about/consulting-simulation-review.png", "generated"],
  ["/about/kevin-lucan-professional.png", "generated"],
  ["/about/kevin-lucan-professional.webp", "generated"],
  ["/about/testbench-data-review.png", "generated"],
  ["/about/whiteboard-failure-analysis.png", "generated"],
  ["/graphics/knowledge/risk-management.png", "generated"],
  ["/graphics/knowledge/testing.png", "generated"],
  ["/graphics/wissen/reliability-product-development-overview.png", "generated"],
  ["/expertise/books-and-methods.webp", "generated"],
  ["/expertise/decision-dashboard.webp", "generated"],
  ["/expertise/lab-review.webp", "generated"],
  ["/expertise/podcast-recording.png", "generated"],
  ["/expertise/remote-review.png", "generated"],
  ["/education/electronic-components-training-hero.webp", "generated"],
  ["/education/doe-training-hero.webp", "generated"],
  ["/education/digital-reliability-engineering-elearning.webp", "generated"],
  ["/industries/automotive.webp", "generated"],
  ["/industries/consumer-technik.png", "generated"],
  ["/industries/consumer-products-reliability-testing.webp", "generated"],
  ["/industries/elektronische-produkte.webp", "generated"],
  ["/industries/erneuerbare-energien.webp", "generated"],
  ["/industries/halbleiterindustrie.webp", "generated"],
  ["/industries/luft-und-raumfahrt.png", "generated"],
  ["/industries/aerospace-reliability-engineering.webp", "generated"],
  ["/industries/maschinenbau.webp", "generated"],
  ["/industries/medizintechnik.png", "generated"],
  ["/industries/medical-device-reliability-testing.webp", "generated"],
  ["/podcast/kevin-lucan-background.png", "generated"],
  ["/projects/design-of-experiments-lab-team.png", "generated"],
  ["/projects/design-of-experiments-natural.png", "generated"],
  ["/projects/design-of-experiments.png", "generated"],
  ["/projects/field-failure-fracture.png", "generated"],
  ["/projects/new-product-generation.png", "generated"],
  ["/projects/reliability-process-integration-natural.png", "generated"],
  ["/projects/reliability-process-integration.png", "generated"],
  ["/projects/risk-based-assurance-strategy-natural.png", "generated"],
  ["/projects/risk-based-assurance-strategy.png", "generated"],
  ["/projects/risk-based-assurance-teams-meeting.png", "generated"],
  ["/services/engineering-project-partnership.webp", "generated"],
  ["/services/engineering-project-partnership-european.png", "generated"],
  ["/services/engineering-project-partnership-european.webp", "generated"],
  ["/services/engineering-project-partnership-realistic.webp", "generated"],
  ["/team/academy-e-learning.png", "generated"],
  ["/team/engineering-partnership-review.png", "generated"],
  ["/team/engineering-partnership-review.webp", "generated"],
  ["/team/engineering-project-partnership-review.webp", "generated"],
  ["/team/home-engineering-consulting.webp", "generated"],
  ["/team/home-reliability-planning.png", "generated"],
  ["/team/home-testbench-review.png", "generated"],
  ["/team/reliability-engineering-seminar.webp", "modified"],
  ["/team/engineering-simulation-review.jpg", "modified"],
]);

export function getAiImageDisclosure(
  src: string | undefined,
): AiImageDisclosureKind | undefined {
  if (!src) return undefined;

  const path = src.split("?")[0];
  return aiImageDisclosures.get(path);
}
