import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "educationTitle",
      title: "EducationTitle",
      description: "Education Type",
      type: "string",
    }),
    defineField({
      name: "educationImage",
      title: "EducationImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "instituteTitle",
      title: "InstituteTitle",
      description: "institute name",
      type: "string",
    }),
    defineField({
      name: "dateStart",
      title: "DateStart",
      description: "Starting Education",
      type: "date",
    }),
    defineField({
      name: "dateEnd",
      title: "DateEnd",
      description: "Ending Education",
      type: "date",
    }),
    defineField({
      name: "isCurrentlyEducationHere",
      title: "IsCurrentlyEducationHere",
      type: "boolean",
    }),
    defineField({
      name: "techno",
      title: "TechNo",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    }),
  ],
});
