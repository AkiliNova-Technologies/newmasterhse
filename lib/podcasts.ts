import { images } from "@/lib/images";

export type PodcastEpisode = {
  slug: string;
  episode: number;
  title: string;
  category: string;
  description: string;
  date: string;
  duration: string;
  image: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    slug: "building-a-strong-workplace-safety-culture",
    episode: 1,
    title: "Building a Strong Workplace Safety Culture",
    category: "Safety Culture",
    description:
      "A conversation about how leadership, reporting and everyday habits shape whether people work safely — or only look compliant.",
    date: "8 August 2026",
    duration: "32 min",
    image: images.podcast,
  },
  {
    slug: "occupational-health-beyond-medical-checkups",
    episode: 2,
    title: "Occupational Health Beyond Medical Checkups",
    category: "Occupational Medicine",
    description:
      "Why occupational health is more than a one-off examination, and how surveillance, fitness-to-work and prevention fit together.",
    date: "25 July 2026",
    duration: "28 min",
    image: images.occupationalHealth,
  },
  {
    slug: "why-risk-assessments-matter",
    episode: 3,
    title: "Why Risk Assessments Matter",
    category: "Compliance",
    description:
      "A practical look at HIRA, Job Safety Analysis and how risk assessment should change the way work is planned.",
    date: "11 July 2026",
    duration: "26 min",
    image: images.newsAssessment,
  },
  {
    slug: "managing-health-and-safety-in-growing-african-businesses",
    episode: 4,
    title: "Managing Health and Safety in Growing African Businesses",
    category: "Safety Leadership",
    description:
      "How expanding operations across sites and regions can outpace health and safety systems — and what leaders can do about it.",
    date: "27 June 2026",
    duration: "34 min",
    image: images.whyChooseUs,
  },
  {
    slug: "the-role-of-leadership-in-preventing-workplace-incidents",
    episode: 5,
    title: "The Role of Leadership in Preventing Workplace Incidents",
    category: "Safety Leadership",
    description:
      "Supervisors and executives influence incident prevention through resourcing, accountability and the example they set on site.",
    date: "13 June 2026",
    duration: "30 min",
    image: images.training,
  },
];

export const podcastCategories = [
  "All Episodes",
  "Workplace Health",
  "Safety Leadership",
  "Occupational Medicine",
  "Environmental Health",
  "Worker Wellbeing",
  "Compliance",
  "Safety Culture",
];
