import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Tittle Of the Project",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Image Of the Project",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "Summary Of the Project",
      type: "text",
    }),
    defineField({
      name: "techstack",
      title: "TechStack",
      description: "Tech Stack used to build the Project",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    }),
    defineField({
      name: "livelink",
      title: "LiveLink",
      description: "Live Link Of the Project",
      type: "text",
    }),
    defineField({
      name: "codelink",
      title: "CodeLink",
      description: "Code Link Of the Project",
      type: "text",
    }),
  ],
});
