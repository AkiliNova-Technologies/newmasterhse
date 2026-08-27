import { redirect } from "next/navigation";
import { getNewsArticle, newsArticles } from "@/lib/news";

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function InsightRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getNewsArticle(slug)) {
    redirect("/news");
  }
  redirect(`/news/${slug}`);
}
