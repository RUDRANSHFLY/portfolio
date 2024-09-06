import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "backgroundInformation",
      title: "BackGroundInformation",
      type: "string",
    }),
    defineField({
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    }),
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return { ...selection, subtitle: author && `by ${author}` };
  //   },
  // },
});

// defineField({
//   name: "title",
//   title: "Title",
//   type: "string",
// }),
// defineField({
//   name: "slug",
//   title: "Slug",
//   type: "slug",
//   options: {
//     source: "title",
//     maxLength: 96,
//   },
// }),
// defineField({
//   name: "author",
//   title: "Author",
//   type: "reference",
//   to: { type: "author" },
// }),
// defineField({
//   name: "mainImage",
//   title: "Main image",
//   type: "image",
//   options: {
//     hotspot: true,
//   },
//   fields: [
//     {
//       name: "alt",
//       type: "string",
//       title: "Alternative Text",
//     },
//   ],
// }),
// defineField({
//   name: "categories",
//   title: "Categories",
//   type: "array",
//   of: [{ type: "reference", to: { type: "category" } }],
// }),
// defineField({
//   name: "publishedAt",
//   title: "Published at",
//   type: "datetime",
// }),
// defineField({
//   name: "body",
//   title: "Body",
//   type: "blockContent",
// }),
