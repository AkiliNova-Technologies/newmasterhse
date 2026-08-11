"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

interface Insight {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  readTime: string;
  content: string;
  tags: string[];
}

export default function InsightDetails({ insight }: { insight: Insight }) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
    setShowShareMenu(false);
  };

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showShareMenu && !(e.target as Element).closest('.share-menu-container')) {
        setShowShareMenu(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showShareMenu]);

  return (
    <>
      {/* Hero Section - Responsive */}
      <section className="relative bg-navy pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
        {/* Background Image with Overlay - Preserved */}
        <div className="absolute inset-0">
          <Image
            src={insight.heroImage}
            alt={insight.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy/85" />
          <div className="absolute inset-0 dotted-pattern opacity-20" />
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Link - Responsive positioning */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-white transition-colors mb-6 sm:mb-8 group absolute left-4 sm:left-6 lg:left-0 top-0 text-sm sm:text-base"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          {/* Category Badge - Responsive */}
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6 mt-12 sm:mt-8">
            {insight.category}
          </div>

          {/* Title - Responsive */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {insight.title}
          </h1>
          
          {/* Subtitle - Responsive */}
          <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
            {insight.subtitle}
          </p>

          {/* Author & Meta - Responsive */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/70">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
              <span className="truncate">{insight.date}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
              <span className="truncate">{insight.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bar - Responsive Sticky */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Author Info */}
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-orange-500 flex-shrink-0">
                <Image
                  src={insight.authorImage}
                  alt={insight.author}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-navy text-sm sm:text-base truncate">
                  {insight.author}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 truncate">
                  {insight.authorRole}
                </div>
              </div>
            </div>
            
            {/* Share Button - Responsive */}
            <div className="relative share-menu-container flex-shrink-0 ml-2 sm:ml-0">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Share article"
              >
                <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-navy" />
                <span className="text-xs sm:text-sm font-medium text-navy hidden sm:inline">
                  Share
                </span>
              </button>
              
              {/* Share Menu - Responsive positioning */}
              {showShareMenu && (
                <div className={`
                  absolute z-50 bg-white rounded-xl shadow-xl border border-gray-100 py-2
                  ${isMobile 
                    ? 'right-0 mt-2 w-44' 
                    : 'right-0 mt-2 w-48'
                  }
                `}>
                  <button className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-gray-50 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-gray-50 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-500" />
                    <span>Twitter</span>
                  </button>
                  <button className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-gray-50 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </button>
                  <button 
                    onClick={handleCopyLink}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left hover:bg-gray-50 flex items-center gap-2 sm:gap-3 text-sm sm:text-base border-t border-gray-100 mt-1 pt-2 sm:pt-2.5"
                  >
                    <LinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                    <span>Copy Link</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 sm:mb-12 shadow-xl w-full">
            <Image
              src={insight.heroImage}
              alt={insight.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
            />
          </div>

          {/* Content - Responsive Typography */}
          <article 
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none 
              prose-headings:text-navy prose-headings:font-bold 
              prose-p:text-gray-600 prose-p:text-sm sm:prose-p:text-base 
              prose-strong:text-navy prose-ul:list-disc prose-li:text-gray-600 
              prose-li:text-sm sm:prose-li:text-base
              prose-headings:text-xl sm:prose-headings:text-2xl lg:prose-headings:text-3xl
              prose-h2:mt-8 sm:prose-h2:mt-10 lg:prose-h2:mt-12
              prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />

          {/* Tags - Responsive */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-navy hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio - Responsive */}
          <div className="mt-10 sm:mt-12 p-5 sm:p-6 lg:p-8 bg-gray-50 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-orange-500 flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src={insight.authorImage}
                  alt={insight.author}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-bold text-navy mb-2">
                  About {insight.author}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                  {insight.authorRole} at NewMaster Occupational Health & Safety. {insight.author} specializes in {insight.category.toLowerCase()} and is committed to helping organizations create safer, healthier, and more productive workplaces.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-orange-500 font-semibold text-xs sm:text-sm hover:gap-2 sm:hover:gap-3 transition-all py-1.5"
                >
                  Meet our team
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Decorative Elements */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-1/3 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl -z-10" />
          <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-navy/5 rounded-full blur-2xl -z-10" />
        </>
      )}
    </>
  );
}