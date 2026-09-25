import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";
import NewsGrid from "./NewsGrid";
import CmsArticleGrid from "@/components/CmsArticleGrid";
import { getCmsArticles } from "@/lib/sanity";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "News",
  description:
    "Workplace health and safety articles from NewMaster Health and Safety covering emergency preparedness, medical examinations, safety culture and risk assessment.",
};

export default async function NewsPage() {
  const articles = await getCmsArticles("news");
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="News"
        description="Educational articles and practical guidance on occupational health, workplace safety and prevention."
        image={images.bannerNews}
        imageAlt="Ugandan facilitator addressing workplace health and safety participants"
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />
      {articles.length ? <section className="relative bg-white py-16 sm:py-20 lg:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">Educational articles on workplace health, safety and prevention.</p><CmsArticleGrid articles={articles} basePath="/news" emptyMessage="No news articles have been published yet." /></div></section> : <NewsGrid />}
      <Footer />
    </main>
  );
}
