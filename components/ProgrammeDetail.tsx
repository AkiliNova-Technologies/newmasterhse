import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Programme } from "@/lib/programmes";

function renderParagraphs(description?: string | string[]) {
  if (!description) return null;
  const paragraphs = Array.isArray(description) ? description : [description];
  return paragraphs.map((paragraph) => (
    <p key={paragraph} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
      {paragraph}
    </p>
  ));
}

export default function ProgrammeDetail({ programme }: { programme: Programme }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {programme.sections?.map((section, index) => {
          if (section.kind === "intro") {
            return (
              <div key={index} className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  {section.label && (
                    <div className="section-label text-navy/70 mb-4">
                      {section.label}
                    </div>
                  )}
                  {section.title && (
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                      {section.title}
                    </h2>
                  )}
                  {renderParagraphs(section.description)}
                </div>
                {section.image && (
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? section.title ?? ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          }

          if (section.kind === "items") {
            return (
              <div key={index}>
                {section.label && (
                  <div className="section-label text-navy/70 mb-4">
                    {section.label}
                  </div>
                )}
                {section.title && (
                  <h2 className="text-3xl font-bold text-navy mb-8">
                    {section.title}
                  </h2>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.items?.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 bg-gray-50 rounded-xl p-4"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-navy font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (section.kind === "cards") {
            return (
              <div key={index}>
                {section.label && (
                  <div className="section-label text-navy/70 mb-4">
                    {section.label}
                  </div>
                )}
                {section.title && (
                  <h2 className="text-3xl font-bold text-navy mb-8">
                    {section.title}
                  </h2>
                )}
                <div className="grid md:grid-cols-2 gap-8">
                  {section.cards?.map((card) => (
                    <div
                      key={card.title}
                      className={
                        card.variant === "navy"
                          ? "bg-navy text-white rounded-2xl p-8 diagonal-pattern"
                          : "bg-orange-50 rounded-2xl p-8"
                      }
                    >
                      <h3
                        className={
                          card.variant === "navy"
                            ? "text-2xl font-bold mb-3 text-white"
                            : "text-2xl font-bold mb-3 text-navy"
                        }
                      >
                        {card.title}
                      </h3>
                      <p
                        className={
                          card.variant === "navy"
                            ? "text-white/80 leading-relaxed"
                            : "text-gray-600 leading-relaxed"
                        }
                      >
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // prose
          return (
            <div key={index}>
              {section.label && (
                <div className="section-label text-navy/70 mb-4">
                  {section.label}
                </div>
              )}
              {section.title && (
                <h2 className="text-3xl font-bold text-navy mb-4">
                  {section.title}
                </h2>
              )}
              <div className="max-w-3xl">{renderParagraphs(section.description)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}