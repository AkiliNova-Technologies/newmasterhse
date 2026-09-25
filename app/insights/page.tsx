import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { images } from "@/lib/images";
import CmsArticleGrid from "@/components/CmsArticleGrid";
import { getCmsArticles } from "@/lib/sanity";
import Link from "next/link";
import { ArrowRight, FileText, Headphones } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Insights",
  description:
    "News and podcasts on workplace health, safety, occupational medicine and wellbeing from NewMaster Health and Safety.",
};

export default async function InsightsPage() {
  const articles = await getCmsArticles("insight");
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageBanner
        title="Insights"
        description="Explore NewMaster news and podcast resources for healthier people and safer workplaces."
        image={images.bannerInsights}
        imageAlt="Ugandan occupational health and safety professionals in discussion"
        priority
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Insights brings together NewMaster Health and Safety news articles and podcast
            conversations on workplace health, safety and wellbeing.
          </p>
          {articles.length ? <CmsArticleGrid articles={articles} basePath="/insights" emptyMessage="Insights will appear here when they are published by the editorial team." /> : <LegacyInsightLinks />}
        </div>
      </section>
      <Footer />
    </main>
  );
}

function LegacyInsightLinks() {
  return <div className="grid md:grid-cols-2 gap-6">
    <Link href="/news" className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-gray-100">
      <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-white mb-6"><FileText className="w-7 h-7" /></div>
      <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-orange-500">News</h2>
      <p className="text-gray-600 mb-6">Educational articles on emergency preparedness, medical examinations, safety culture and workplace risk.</p>
      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold">Browse news <ArrowRight className="w-4 h-4" /></span>
    </Link>
    <Link href="/podcasts" className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-gray-100">
      <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6"><Headphones className="w-7 h-7" /></div>
      <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-orange-500">Podcasts</h2>
      <p className="text-gray-600 mb-6">Sample episodes on safety leadership, occupational health and growing African businesses. Audio coming soon.</p>
      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold">Browse podcasts <ArrowRight className="w-4 h-4" /></span>
    </Link>
  </div>;
}
