import { defineType, defineField } from "sanity";

export const profileSchema = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string" }),
    defineField({ name: "title", title: "Job Title", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string",
      description: "Short one-liner shown under the title" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({
      name: "avatar",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      title: "Hero Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "icon",
              title: "Icon (Lucide name)",
              type: "string",
              description: "e.g. BadgeCheck, Star, Trophy, Clock",
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Details",
      type: "object",
      fields: [
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp Number",
          type: "string",
          description: "International format, e.g. +923095250595",
        }),
        defineField({ name: "location", title: "Location", type: "string" }),
      ],
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
        defineField({ name: "github", title: "GitHub URL", type: "url" }),
        defineField({ name: "upwork", title: "Upwork Profile URL", type: "url" }),
        defineField({ name: "twitter", title: "X / Twitter URL", type: "url" }),
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title" },
  },
});
