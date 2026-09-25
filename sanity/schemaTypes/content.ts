import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service", title: "Service", type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", title: "Content", type: "array", of: [{ type: "block" }] }),
  ],
});

export const podcast = defineType({
  name: "podcast", title: "Podcast", type: "document",
  fields: [
    defineField({ name: "title", title: "Episode title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "publishedAt", title: "Publication date", type: "datetime" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "audioUrl", title: "Audio URL", type: "url" }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
  ],
});

export const teamMember = defineType({
  name: "teamMember", title: "Team member", type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Biography", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "order", title: "Display order", type: "number", initialValue: 0 }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings", title: "Site settings", type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "contactEmail", title: "Contact email", type: "email" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 3 }),
    defineField({ name: "socialLinks", title: "Social links", type: "array", of: [{ type: "object", fields: [defineField({ name: "label", type: "string" }), defineField({ name: "url", type: "url" })] }] }),
  ],
});
