export const ARTICLE_CATEGORIES = [
  { value: "workplace-safety", title: "Workplace Safety" },
  { value: "occupational-health", title: "Occupational Health" },
  { value: "emergency-preparedness", title: "Emergency Preparedness" },
  { value: "training-and-compliance", title: "Training and Compliance" },
  { value: "health-and-wellness", title: "Health and Wellness" },
  { value: "industry-insights", title: "Industry Insights" },
  { value: "company-updates", title: "Company Updates" },
  { value: "community-engagement", title: "Community Engagement" },
] as const;

export type ArticleCategoryValue = (typeof ARTICLE_CATEGORIES)[number]["value"];

const legacyCategoryMap: Record<string, ArticleCategoryValue> = {
  "Safety Culture": "workplace-safety",
  "Risk Management": "workplace-safety",
  "Fire Safety": "emergency-preparedness",
  "Training & Development": "training-and-compliance",
  "Regulatory Compliance": "training-and-compliance",
  "Corporate Wellness": "health-and-wellness",
};

export function articleCategoryLabel(value: string) {
  const mappedValue = legacyCategoryMap[value] || value;
  return ARTICLE_CATEGORIES.find((category) => category.value === mappedValue)?.title || value;
}
