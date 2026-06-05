const educationBulletsByTitle: Record<string, string[]> = {
  "Inhouse-Schulungen und Seminare": [
    "Individuell auf Ihr Unternehmen, Ihre Produkte und Ihre Fragestellungen zugeschnitten",
    "Direkt an Entwicklungsalltag, Erprobung und realen Projektbeispielen ausgerichtet",
    "Intensiver fachlicher Austausch mit unmittelbarem Praxisbezug für Ihr Team",
  ],
  "RelTest Academy": [
    "Zeitlich flexibel, ortsunabhängig und sofort im Arbeitsalltag einsetzbar",
    "Strukturiert für nachhaltigen Wissensaufbau in Reliability Engineering und DoE",
    "Ideal als Ergänzung zu Inhouse-Schulungen, Projektarbeit oder individueller Weiterbildung",
  ],
};

export function getEducationBullets(title: string, fallback: string[]) {
  return educationBulletsByTitle[title] ?? fallback;
}
