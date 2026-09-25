const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "oqdatg5j";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export type CmsArticle = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;
  author?: string;
  image?: SanityImage;
  body?: ArticleBody;
  featured?: boolean;
};

export type SanityImage = { asset?: { _ref?: string } };

export type TeamMember = {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  photo?: SanityImage;
  order?: number;
};

export type PortableTextSpan = { _type?: "span"; _key?: string; text?: string; marks?: string[] };
export type PortableTextBlock = {
  _type?: "block";
  _key?: string;
  style?: "normal" | "h2" | "h3";
  listItem?: "bullet" | "number";
  level?: number;
  children?: PortableTextSpan[];
  markDefs?: { _key?: string; _type?: string; href?: string }[];
};
export type ImportantNoteBlock = { _type: "importantNote"; _key?: string; title?: string; body?: PortableTextBlock[] };
export type ArticleBody = string | Array<PortableTextBlock | ImportantNoteBlock>;

const articleFields = `
  _id, title, "slug": slug.current, excerpt,
  "category": coalesce(category, categories[0]), publishedAt,
  readTime, author, image, body, featured
`;

export async function getCmsArticles(type: "news" | "insight") {
  return sanityFetch<CmsArticle[]>(`*[_type == $type && defined(slug.current)] | order(publishedAt desc) {${articleFields}}`, { type }).catch(() => []);
}

export async function getCmsArticle(type: "news" | "insight", slug: string) {
  return sanityFetch<CmsArticle | null>(`*[_type == $type && slug.current == $slug][0] {${articleFields}}`, { type, slug }).catch(() => null);
}

export async function getTeamMembers() {
  return sanityFetch<TeamMember[]>(
    `*[_type == "teamMember" && !(_id in path("drafts.**"))] | order(order asc, name asc) {
      _id, name, role, "bio": pt::text(bio), photo, order
    }`,
  ).catch(() => []);
}

/** Public published-content query: deliberately no token or write capability. */
async function sanityFetch<T>(query: string, params: Record<string, string> = {}) {
  const search = new URLSearchParams({ query, ...Object.fromEntries(Object.entries(params).map(([key, value]) => [`$${key}`, JSON.stringify(value)])) });
  const response = await fetch(`https://${projectId}.api.sanity.io/v2026-09-21/data/query/${dataset}?${search}`, { next: { revalidate: 60 } });
  if (!response.ok) throw new Error(`Sanity public query failed (${response.status})`);
  return (await response.json() as { result: T }).result;
}

export function sanityImageUrl(image?: SanityImage) {
  const ref = image?.asset?._ref;
  if (!ref) return null;
  const [, id, dimensions, format] = ref.split("-");
  return id && dimensions && format ? `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}` : null;
}

/** Sanity's CDN is reliable for browser delivery but can time out through Next's optimizer. */
export function isSanityCdnImageUrl(url?: string | null) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && parsed.hostname === "cdn.sanity.io" && parsed.pathname.startsWith(`/images/${projectId}/${dataset}/`);
  } catch {
    return false;
  }
}
