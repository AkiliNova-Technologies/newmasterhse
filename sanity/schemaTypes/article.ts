import { defineField, defineType } from "sanity";
import { ARTICLE_CATEGORIES } from "../../lib/articleCategories";

const articleFields = [
  defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: { source: "title", maxLength: 96 },
    validation: (Rule) => Rule.required(),
  }),
  defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (Rule) => Rule.required().max(260) }),
  defineField({
    name: "category",
    title: "Category",
    description: "Choose the one category that best describes this article.",
    type: "string",
    options: { list: ARTICLE_CATEGORIES },
    validation: (Rule) => Rule.required(),
  }),
  defineField({ name: "publishedAt", title: "Publication date", type: "datetime", validation: (Rule) => Rule.required() }),
  defineField({ name: "author", title: "Author", type: "string" }),
  defineField({ name: "readTime", title: "Reading time", type: "string", description: "For example, 6 min read" }),
  defineField({ name: "image", title: "Featured image", type: "image", options: { hotspot: true } }),
  defineField({
    name: "body",
    title: "Article body",
    description: "Use headings and lists to make guidance easy to scan. Use Important note for disclaimers or key cautions.",
    type: "array",
    of: [
      {
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "Section heading (H2)", value: "h2" },
          { title: "Subheading (H3)", value: "h3" },
        ],
        lists: [
          { title: "Bullet list", value: "bullet" },
          { title: "Numbered list", value: "number" },
        ],
        marks: {
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
          ],
          annotations: [{
            name: "link",
            title: "Link",
            type: "object",
            fields: [defineField({ name: "href", title: "URL", type: "url", validation: (Rule) => Rule.required().uri({ scheme: ["http", "https", "mailto"] }) })],
          }],
        },
      },
      {
        name: "importantNote",
        title: "Important note",
        type: "object",
        fields: [
          defineField({ name: "title", title: "Heading", type: "string", initialValue: "Important note" }),
          defineField({ name: "body", title: "Note", type: "array", of: [{ type: "block" }] }),
        ],
        preview: { select: { title: "title", subtitle: "body.0.children.0.text" } },
      },
    ],
    validation: (Rule) => Rule.required(),
  }),
  defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
];

export const news = defineType({ name: "news", title: "News", type: "document", fields: articleFields, preview: { select: { title: "title", subtitle: "publishedAt", media: "image" } } });
export const insight = defineType({ name: "insight", title: "Insights", type: "document", fields: articleFields, preview: { select: { title: "title", subtitle: "publishedAt", media: "image" } } });
