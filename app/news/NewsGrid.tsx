"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useMemo, useState } from "react";
import { newsArticles, newsCategories } from "@/lib/news";
import { articleCategoryLabel } from "@/lib/articleCategories";

export default function NewsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const articles = useMemo(
    () =>
      selectedCategory === "All Categories"
        ? newsArticles
        : newsArticles.filter(
            (article) => articleCategoryLabel(article.category) === selectedCategory,
          ),
    [selectedCategory],
  );

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Educational articles on workplace health, safety and prevention. Articles provide
          general guidance and do not describe specific NewMaster client engagements unless
          clearly stated.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {newsCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`min-h-11 px-4 py-2 rounded-full text-xs font-medium sm:text-sm ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-navy hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden sm:h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-4 py-2 bg-navy text-white text-xs font-semibold rounded-full">
                  {articleCategoryLabel(post.category)}
                </span>
              </div>
              <div className="flex flex-grow flex-col p-5 sm:p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  {post.date}
                </div>
                <h2 className="text-lg font-bold text-navy mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{post.excerpt}</p>
                <Link
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm"
                >
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
