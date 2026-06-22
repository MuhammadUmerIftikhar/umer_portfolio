import { defineType, defineField } from "sanity";

export const expertiseSchema = defineType({
  name: "expertise",
  title: "Expertise",
  type: "document",
  fields: [
    defineField({
      name: "icon",
      title: "Icon (Lucide name)",
      type: "string",
      description: "Lucide icon component name, e.g. Users, Cloud, Database, Gauge, Package, Layers",
    }),
    defineField({ name: "title", title: "Service Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "gradient",
      title: "Gradient Classes",
      type: "string",
      description: "Tailwind gradient, e.g. from-violet-600 to-purple-600",
    }),
    defineField({
      name: "bg",
      title: "Card Background Class",
      type: "string",
      description: "e.g. bg-violet-500/10",
    }),
    defineField({
      name: "border",
      title: "Border Class",
      type: "string",
      description: "e.g. border-violet-500/20",
    }),
    defineField({
      name: "iconColor",
      title: "Icon Color Class",
      type: "string",
      description: "e.g. text-violet-400",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "icon" },
  },
});
