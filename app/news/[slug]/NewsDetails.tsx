"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { NewsArticle } from "@/lib/news";

export default function NewsDetails({ article }: { article: NewsArticle }) {
  return (
    <>
      <section className="relative bg-navy pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
        </div>
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          <div className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-full mb-6">
            {article.category}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-400" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10 shadow-xl">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>
          <article
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-navy prose-p:text-gray-600 prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-3">
            <Tag className="w-5 h-5 text-orange-500" />
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-navy">
              {article.category}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-navy">
              Educational content
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
