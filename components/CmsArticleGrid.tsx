import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { CmsArticle } from "@/lib/sanity";
import { isSanityCdnImageUrl, sanityImageUrl } from "@/lib/sanity";
import { articleCategoryLabel } from "@/lib/articleCategories";

function displayDate(value?: string) {
  if (!value) return "Recently published";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default function CmsArticleGrid({
  articles,
  basePath,
  emptyMessage,
}: {
  articles: CmsArticle[];
  basePath: "/news" | "/insights";
  emptyMessage: string;
}) {
  if (!articles.length)
    return <p className="text-center text-gray-600">{emptyMessage}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {articles.map((post) => {
        const imageUrl = sanityImageUrl(post.image);
        const bypassImageOptimizer = isSanityCdnImageUrl(imageUrl);
        return (
          <article
            key={post._id}
            className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group flex flex-col">
            <div className="relative h-48 overflow-hidden bg-navy sm:h-52">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={bypassImageOptimizer}
                />
              )}
              {post.category && (
                <span className="absolute top-4 left-4 px-4 py-2 bg-navy text-white text-xs font-semibold rounded-full">
                  {articleCategoryLabel(post.category)}
                </span>
              )}
            </div>
            <div className="flex flex-grow flex-col p-5 sm:p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar className="w-4 h-4 text-orange-500" />
                {displayDate(post.publishedAt)}
              </div>
              <h2 className="text-lg font-bold text-navy mb-3 group-hover:text-orange-500 transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {post.excerpt}
                </p>
              )}
              <Link
                href={`${basePath}/${post.slug}`}
                className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm">
                Read article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
