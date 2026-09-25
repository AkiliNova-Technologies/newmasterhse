import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import RelatedInsights from "@/components/RelatedInsights";
import NewsDetails from "./NewsDetails";
import { getNewsArticle, newsArticles } from "@/lib/news";
import { getCmsArticle, getCmsArticles } from "@/lib/sanity";
import CmsArticleDetails from "@/components/CmsArticleDetails";

export async function generateStaticParams() {
  const cmsArticles = await getCmsArticles("news");
  const slugs = new Set([
    ...newsArticles.map((article) => article.slug),
    ...cmsArticles.map((article) => article.slug),
  ]);

  return Array.from(slugs, (slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getCmsArticle("news", slug);
  if (article) return { title: article.title, description: article.excerpt };
  const staticArticle = getNewsArticle(slug);
  if (!staticArticle) return { title: "Article Not Found" };
  return {
    title: staticArticle.title,
    description: staticArticle.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cmsArticle = await getCmsArticle("news", slug);
  if (cmsArticle) return <main className="min-h-screen bg-white"><Header /><CmsArticleDetails article={cmsArticle} backPath="/news" backLabel="News" /><Footer /></main>;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  const related = newsArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      image: item.image,
      category: item.category,
      date: item.date,
    }));

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <NewsDetails article={article} />
      {related.length > 0 && <RelatedInsights insights={related} />}
      <Newsletter />
      <Footer />
    </main>
  );
}
