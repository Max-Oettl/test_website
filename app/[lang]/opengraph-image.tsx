import { resolveLocale } from "../_i18n/config";
import { renderSocialImage, socialImageSize } from "../_seo/social-image";

export const alt = "RelTest Reliability Engineering";
export const size = socialImageSize;
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const locale = await resolveLocale(params);
  return renderSocialImage(locale);
}
