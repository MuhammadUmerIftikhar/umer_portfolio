import { defineType, defineField } from "sanity";

export const techStackSchema = defineType({
  name: "techStack",
  title: "Tech Stack",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Technology Name", type: "string" }),
    defineField({
      name: "abbr",
      title: "Abbreviation",
      type: "string",
      description: "Short label shown inside the badge, e.g. 'U', 'C#', 'Ph'",
    }),
    defineField({
      name: "bg",
      title: "Background Color (hex)",
      type: "string",
      description: "e.g. #1a1a2e",
    }),
    defineField({
      name: "border",
      title: "Border Color (hex)",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text Color (hex)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
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
    select: { title: "name", subtitle: "abbr" },
  },
});
