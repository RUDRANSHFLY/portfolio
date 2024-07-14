import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of SKill",
      type: "string",
    }),
    defineField({
      name: "progress",
      title: "Progress",
      description: "Progress of SKill from 0 to 100%",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "skillImage",
      title: "SkillImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
