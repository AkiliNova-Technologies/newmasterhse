import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import {
  isSanityCdnImageUrl,
  sanityImageUrl,
  type CmsArticle,
} from "@/lib/sanity";
import ArticleBody from "@/components/ArticleBody";
import { articleCategoryLabel } from "@/lib/articleCategories";

export default function CmsArticleDetails({
  article,
  backPath,
  backLabel,
}: {
  article: CmsArticle;
  backPath: "/news" | "/insights";
  backLabel: string;
}) {
  const imageUrl = sanityImageUrl(article.image);
  const bypassImageOptimizer = isSanityCdnImageUrl(imageUrl);
  const date =
    article.publishedAt &&
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(article.publishedAt));
  return (
    <>
      <section className="relative bg-navy pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden diagonal-pattern">
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <Link
            href={backPath}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to {backLabel}
          </Link>
          {article.category && (
            <div className="flex justify-center mb-6">
              <span className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full">
                {articleCategoryLabel(article.category)}
              </span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            {date && (
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                {date}
              </span>
            )}
            {article.readTime && (
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                {article.readTime}
              </span>
            )}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {imageUrl && (
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10 shadow-xl">
              <Image
                src={imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 896px"
                unoptimized={bypassImageOptimizer}
              />
            </div>
          )}
          <article>
            {article.body ? (
              <ArticleBody body={article.body} />
            ) : (
              article.excerpt && (
                <p className="text-gray-600 text-lg">{article.excerpt}</p>
              )
            )}
          </article>
        </div>
      </section>
    </>
  );
}
