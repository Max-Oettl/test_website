import { permanentRedirect } from "next/navigation";

import { localizeHref, resolveLocale } from "../../_i18n/config";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function LegacyTrainingPage({ params }: Props) {
  const locale = await resolveLocale(params);

  permanentRedirect(localizeHref(locale, "/education"));
}
