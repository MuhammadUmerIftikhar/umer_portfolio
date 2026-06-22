import { defineType, defineField } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string" }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. MULTIPLAYER, 3D, STORY DRIVEN",
    }),
    defineField({
      name: "tagColors",
      title: "Tag Colors",
      type: "array",
      of: [{ type: "string" }],
      description: "Tailwind bg classes per tag, e.g. bg-purple-600",
    }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
    defineField({
      name: "platforms",
      title: "Platforms / Tech",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Unity, Photon, PlayFab, Mobile, PC",
    }),
    defineField({
      name: "gradient",
      title: "Card Gradient (Tailwind)",
      type: "string",
      description: "e.g. from-slate-900 via-green-950 to-slate-900",
    }),
    defineField({
      name: "accentColor",
      title: "Accent Color (hex)",
      type: "string",
      description: "Used for glow and highlights, e.g. #22c55e",
    }),
    defineField({
      name: "shapes",
      title: "Visual Shape Style",
      type: "string",
      options: {
        list: [
          { title: "Military", value: "military" },
          { title: "Fantasy", value: "fantasy" },
          { title: "Racing", value: "racing" },
          { title: "Strategy", value: "strategy" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "category",
      title: "Gallery Category",
      type: "string",
      options: {
        list: [
          { title: "2D", value: "2D" },
          { title: "3D", value: "3D" },
          { title: "Mobile", value: "Mobile" },
          { title: "VR/AR", value: "VR/AR" },
        ],
        layout: "radio",
      },
    }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "featured", title: "Featured Project", type: "boolean" }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Featured First",
      name: "featuredOrder",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "thumbnail" },
  },
});
