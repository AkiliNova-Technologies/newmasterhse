"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    title: "A True Partner in Workplace Safety!",
    content:
      "NewMaster helped us identify risks we had been overlooking for years. Their comprehensive approach to occupational health and safety has transformed how we protect our workforce.",
    author: "[CLIENT NAME]",
    role: "Managing Director",
    company: "[COMPANY NAME]",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
  },
  {
    rating: 5,
    title: "Exceptional Training & Support!",
    content:
      "The training programs delivered by NewMaster Training Academy were practical, engaging, and immediately applicable. Our incident rates have decreased significantly since implementation.",
    author: "[CLIENT NAME]",
    role: "Chief Operating Officer",
    company: "[COMPANY NAME]",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
  },
  {
    rating: 5,
    title: "Compliance Made Manageable!",
    content:
      "What sets NewMaster apart is their ability to simplify complex regulatory requirements into actionable steps. They helped us strengthen our systems and prepare confidently for audits.",
    author: "[CLIENT NAME]",
    role: "Founder & CEO",
    company: "[COMPANY NAME]",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
  },
  {
    rating: 5,
    title: "Healthier Workforce, Stronger Organization!",
    content:
      "The occupational health services and wellness programs from NewMaster have made a measurable difference in employee wellbeing and attendance. A genuine long-term partner.",
    author: "[CLIENT NAME]",
    role: "Director of Operations",
    company: "[COMPANY NAME]",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Dynamic visible testimonials based on screen size
  const visibleTestimonials = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - visibleTestimonials;

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative bg-navy py-16 sm:py-20 lg:py-28 diagonal-pattern overflow-hidden">
      {/* Background gradient - Preserved */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive */}
        <div className="text-center mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
            Client Testimonials
            <span className="w-6 sm:w-8 h-0.5 bg-orange-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-white block sm:inline">Trusted by Organizations</span>
            <span className="text-orange-500 italic block sm:inline sm:ml-2">
              Across Industries
            </span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, repositioned on tablet/desktop */}
          <div className={`
            absolute top-1/2 -translate-y-1/2 left-0 z-20
            ${isMobile ? 'hidden' : '-ml-4 lg:-ml-12'}
          `}>
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-orange-500 backdrop-blur-sm border border-white/20"
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </button>
          </div>
          
          <div className={`
            absolute top-1/2 -translate-y-1/2 right-0 z-20
            ${isMobile ? 'hidden' : '-mr-4 lg:-mr-12'}
          `}>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all ${
                currentIndex === maxIndex
                  ? "bg-white/5 text-white/30 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-orange-500 backdrop-blur-sm border border-white/20"
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden px-2 sm:px-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 px-2 sm:px-4
                    ${isMobile ? 'w-full' : 'w-1/2'}
                  `}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 h-full relative group hover:bg-white/10 transition-all duration-300">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-orange-500"
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      {testimonial.title}
                    </h3>

                    {/* Content */}
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-orange-500 transition-all flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 48px, 56px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-semibold text-sm sm:text-base truncate">
                          {testimonial.author}
                        </div>
                        <div className="text-white/60 text-xs sm:text-sm truncate">
                          {testimonial.role}
                        </div>
                        <div className="text-white/40 text-[10px] sm:text-xs truncate">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Quote Mark - Responsive sizing */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-white/5 text-6xl sm:text-7xl lg:text-8xl font-serif leading-none">
                      &ldquo;
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots - Enhanced for mobile */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  rounded-full transition-all duration-300
                  ${index === currentIndex
                    ? "bg-orange-500 w-6 sm:w-10 h-2 sm:h-2.5"
                    : "bg-white/30 hover:bg-white/50 w-2 sm:w-2.5 h-2 sm:h-2.5"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>

          {/* Mobile Swipe Indicator */}
          {/* {isMobile && (
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-1 text-white/40 text-xs">
                <ChevronLeft className="w-3 h-3" />
                <span>Swipe</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          )} */}
        </div>
      </div>

      {/* Mobile Decorative Elements */}
      <div className="lg:hidden absolute left-0 top-1/3 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -z-10" />
      <div className="lg:hidden absolute right-0 bottom-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}