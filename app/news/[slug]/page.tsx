import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import RelatedInsights from "@/components/RelatedInsights";
import NewsDetails from "./NewsDetails";
import { getNewsArticle, newsArticles } from "@/lib/news";

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
