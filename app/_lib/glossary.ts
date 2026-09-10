export function normalizeGlossarySearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .toLocaleLowerCase()
    .trim();
}

export function getGlossaryEntryId(term: string) {
  const slug = normalizeGlossarySearch(term)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `glossar-begriff-${slug}`;
}
