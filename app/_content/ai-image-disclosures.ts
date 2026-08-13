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
  ["/expertise/books-and-methods.png", "generated"],
  ["/expertise/decision-dashboard.png", "generated"],
  ["/expertise/lab-review.png", "generated"],
  ["/expertise/podcast-recording.png", "generated"],
  ["/expertise/remote-review.png", "generated"],
  ["/industries/automotive.png", "generated"],
  ["/industries/consumer-technik.png", "generated"],
  ["/industries/consumer-technik-v2.png", "generated"],
  ["/industries/elektronische-produkte.png", "generated"],
  ["/industries/erneuerbare-energien.png", "generated"],
  ["/industries/halbleiterindustrie.png", "generated"],
  ["/industries/luft-und-raumfahrt.png", "generated"],
  ["/industries/luft-und-raumfahrt-v2.png", "generated"],
  ["/industries/maschinenbau.png", "generated"],
  ["/industries/medizintechnik.png", "generated"],
  ["/industries/medizintechnik-v2.png", "generated"],
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
  ["/team/engineering-partnership-review-v2.webp", "generated"],
  ["/team/home-engineering-consulting.png", "generated"],
  ["/team/home-reliability-planning.png", "generated"],
  ["/team/home-testbench-review.png", "generated"],
  ["/team/img-0107.png", "modified"],
  ["/team/img-0112.jpg", "modified"],
]);

export function getAiImageDisclosure(
  src: string | undefined,
): AiImageDisclosureKind | undefined {
  if (!src) return undefined;

  const path = src.split("?")[0];
  return aiImageDisclosures.get(path);
}
