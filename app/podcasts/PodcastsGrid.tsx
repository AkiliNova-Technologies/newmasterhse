"use client";

import Image from "next/image";
import { Calendar, Clock, Headphones } from "lucide-react";
import { podcastCategories, podcastEpisodes } from "@/lib/podcasts";
import { useMemo, useState } from "react";

export default function PodcastsGrid() {
  const [category, setCategory] = useState("All Episodes");

  const episodes = useMemo(
    () =>
      category === "All Episodes"
        ? podcastEpisodes
        : podcastEpisodes.filter((episode) => episode.category === category),
    [category],
  );

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Conversations on workplace health, safety leadership and wellbeing. Audio is not yet
          available, so listening is marked as coming soon.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {podcastCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
                category === item
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-navy hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {episodes.length === 0 ? (
          <p className="text-center text-gray-600">
            No sample episodes are listed in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {episodes.map((episode) => (
              <article
                key={episode.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded-full">
                    Episode {episode.episode}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-orange-500 text-xs font-semibold mb-2">{episode.category}</p>
                  <h2 className="text-lg font-bold text-navy mb-3">{episode.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{episode.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-500" />
                      {episode.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-500" />
                      {episode.duration}
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-navy font-semibold rounded-full text-sm cursor-not-allowed"
                  >
                    <Headphones className="w-4 h-4" />
                    Coming Soon
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
