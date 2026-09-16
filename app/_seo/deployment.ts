// Fail closed: a Production deployment is not automatically a public launch.
// Change this flag only as part of the documented, approved go-live process.
export const isSiteIndexingEnabled =
  process.env.SITE_INDEXING_ENABLED === "true" &&
  process.env.NODE_ENV === "production" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");

export const noIndexHeader = "noindex, nofollow, noarchive, nosnippet";
