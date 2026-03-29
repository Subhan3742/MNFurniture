export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (R: any) => R.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (R: any) => R.required(),
    },
    {
      name: "price",
      title: "Price (e.g. PKR 85,000)",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: ["Bestseller", "New", "Sale", "Popular"],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "material",
      title: "Material",
      type: "string",
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
      description: "Tick to show this product in the Featured Products section on homepage",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (R: any) => R.min(1),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "images.0",
    },
  },
};
