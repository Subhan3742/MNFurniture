import { client, writeClient } from "./client";

export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] | order(_createdAt asc) {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "count": count(*[_type == "product" && references(^._id)])
    }
  `);
}

export async function getCategoryBySlug(slug: string) {
  return client.fetch(`
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "count": count(*[_type == "product" && references(^._id)])
    }
  `, { slug });
}

export async function getProductsByCategory(categorySlug: string) {
  return client.fetch(`
    *[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt asc) {
      _id,
      name,
      "slug": slug.current,
      price,
      tag,
      description,
      material,
      dimensions,
      "images": images[].asset->url,
      "image": images[0].asset->url,
      "categorySlug": category->slug.current,
      "categoryName": category->name
    }
  `, { categorySlug });
}

export async function getProductBySlug(categorySlug: string, productSlug: string) {
  return client.fetch(`
    *[_type == "product" && slug.current == $productSlug && category->slug.current == $categorySlug][0] {
      _id,
      name,
      "slug": slug.current,
      price,
      tag,
      description,
      material,
      dimensions,
      "images": images[].asset->url,
      "image": images[0].asset->url,
      "categorySlug": category->slug.current,
      "categoryName": category->name
    }
  `, { categorySlug, productSlug });
}

export async function getAllProducts() {
  return client.fetch(`
    *[_type == "product"] | order(_createdAt asc) {
      _id,
      name,
      "slug": slug.current,
      price,
      tag,
      "image": images[0].asset->url,
      "categorySlug": category->slug.current,
      "categoryName": category->name
    }
  `);
}

export async function getFeaturedProducts() {
  return client.fetch(`
    *[_type == "product" && featured == true] | order(_createdAt asc) {
      _id,
      name,
      "slug": slug.current,
      price,
      tag,
      "image": images[0].asset->url,
      "categorySlug": category->slug.current
    }
  `);
}

export async function createOrder(order: {
  customerName: string;
  phone: string;
  address: string;
  city: string;
  notes: string;
  items: { productName: string; price: string; quantity: number }[];
  total: number;
}) {
  return writeClient.create({
    _type: "order",
    ...order,
    status: "pending",
    createdAt: new Date().toISOString(),
  });
}
