import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CmsArticleDetails from "@/components/CmsArticleDetails";
import { getCmsArticle } from "@/lib/sanity";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getCmsArticle("insight", slug);
  return article ? { title: article.title, description: article.excerpt } : { title: "Insight Not Found" };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getCmsArticle("insight", slug);
  if (!article) notFound();
  return <main className="min-h-screen bg-white"><Header /><CmsArticleDetails article={article} backPath="/insights" backLabel="Insights" /><Footer /></main>;
}
