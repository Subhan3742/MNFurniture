export type Product = {
  id: string;
  name: string;
  price: string;
  tag: string;
  image: string;
  images: string[];
  description: string;
  material: string;
  dimensions: string;
};

export type Category = {
  slug: string;
  name: string;
  count: string;
  image: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "living-room",
    name: "Living Room",
    count: "48 items",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80",
    products: [
      { id: "lr-1", name: "Luxe Sofa Set", price: "PKR 85,000", tag: "Bestseller", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80","https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80","https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80","https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"], description: "Premium solid wood frame sofa with plush cushioning. Perfect centerpiece for any living room.", material: "Sheesham Wood, Fabric", dimensions: "220cm x 90cm x 85cm" },
      { id: "lr-2", name: "L-Shape Corner Sofa", price: "PKR 1,20,000", tag: "New", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80", images: ["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80","https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80"], description: "Spacious L-shaped sofa crafted from solid wood with premium foam seating.", material: "Teak Wood, Velvet", dimensions: "280cm x 180cm x 85cm" },
      { id: "lr-3", name: "Coffee Table", price: "PKR 22,000", tag: "Popular", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80", images: ["https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80","https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"], description: "Handcrafted solid wood coffee table with natural grain finish.", material: "Sheesham Wood", dimensions: "120cm x 60cm x 45cm" },
      { id: "lr-4", name: "TV Console", price: "PKR 35,000", tag: "Sale", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80","https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80","https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"], description: "Modern wooden TV console with ample storage and cable management.", material: "MDF + Walnut Veneer", dimensions: "160cm x 45cm x 50cm" },
    ],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    count: "36 items",
    image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=600&q=80",
    products: [
      { id: "bd-1", name: "King Bed Frame", price: "PKR 65,000", tag: "New", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80", images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80","https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80","https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&q=80","https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80"], description: "Solid wood king size bed frame with elegant headboard design.", material: "Sheesham Wood", dimensions: "200cm x 180cm x 120cm" },
      { id: "bd-2", name: "Queen Bed with Storage", price: "PKR 55,000", tag: "Bestseller", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80", images: ["https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80","https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80","https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&q=80"], description: "Queen bed with hydraulic storage underneath — maximize your space.", material: "Teak Wood", dimensions: "200cm x 160cm x 110cm" },
      { id: "bd-3", name: "Bedside Table", price: "PKR 12,000", tag: "Popular", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80","https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80"], description: "Compact bedside table with drawer and open shelf.", material: "Sheesham Wood", dimensions: "45cm x 40cm x 55cm" },
      { id: "bd-4", name: "Dressing Table", price: "PKR 28,000", tag: "Sale", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80", images: ["https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80","https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80","https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"], description: "Elegant dressing table with large mirror and multiple drawers.", material: "MDF + Mirror", dimensions: "100cm x 45cm x 150cm" },
    ],
  },
  {
    slug: "dining-room",
    name: "Dining Room",
    count: "24 items",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80",
    products: [
      { id: "dr-1", name: "Dining Table 6-Seater", price: "PKR 55,000", tag: "Sale", image: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=600&q=80", images: ["https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&q=80","https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80","https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80"], description: "Solid wood 6-seater dining table with natural finish.", material: "Sheesham Wood", dimensions: "180cm x 90cm x 76cm" },
      { id: "dr-2", name: "Dining Table 4-Seater", price: "PKR 38,000", tag: "Popular", image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=600&q=80", images: ["https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80","https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&q=80","https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80"], description: "Compact 4-seater dining table perfect for smaller spaces.", material: "Teak Wood", dimensions: "120cm x 75cm x 76cm" },
      { id: "dr-3", name: "Dining Chair (Set of 4)", price: "PKR 24,000", tag: "Bestseller", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80", images: ["https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80","https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80"], description: "Solid wood dining chairs with cushioned seats.", material: "Sheesham Wood, Fabric", dimensions: "45cm x 45cm x 90cm" },
      { id: "dr-4", name: "China Cabinet", price: "PKR 42,000", tag: "New", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80", images: ["https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80","https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=800&q=80"], description: "Display cabinet with glass doors for your crockery and decor.", material: "Sheesham Wood + Glass", dimensions: "100cm x 40cm x 180cm" },
    ],
  },
  {
    slug: "office",
    name: "Office",
    count: "30 items",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    products: [
      { id: "of-1", name: "Executive Chair", price: "PKR 28,000", tag: "Popular", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80", images: ["https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80","https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80"], description: "High-back executive chair with lumbar support and armrests.", material: "Wood Frame, Leather", dimensions: "65cm x 65cm x 120cm" },
      { id: "of-2", name: "Office Desk", price: "PKR 32,000", tag: "Bestseller", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80", images: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80","https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80","https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80"], description: "Spacious solid wood office desk with cable management.", material: "Sheesham Wood", dimensions: "150cm x 70cm x 76cm" },
      { id: "of-3", name: "Bookshelf 5-Tier", price: "PKR 18,000", tag: "New", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80", images: ["https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"], description: "5-tier solid wood bookshelf for your books and decor.", material: "Sheesham Wood", dimensions: "80cm x 30cm x 180cm" },
      { id: "of-4", name: "Filing Cabinet", price: "PKR 15,000", tag: "Sale", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80", images: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"], description: "3-drawer filing cabinet with lock for secure document storage.", material: "MDF + Wood Veneer", dimensions: "45cm x 55cm x 90cm" },
    ],
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    count: "18 items",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    products: [
      { id: "out-1", name: "Garden Bench", price: "PKR 18,000", tag: "Popular", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80","https://images.unsplash.com/photo-1600210491892-03d54730d73e?w=800&q=80"], description: "Weather-resistant solid wood garden bench.", material: "Teak Wood", dimensions: "150cm x 55cm x 85cm" },
      { id: "out-2", name: "Outdoor Dining Set", price: "PKR 65,000", tag: "New", image: "https://images.unsplash.com/photo-1600210491892-03d54730d73e?w=600&q=80", images: ["https://images.unsplash.com/photo-1600210491892-03d54730d73e?w=800&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"], description: "4-seater outdoor dining set with weather-treated wood.", material: "Teak Wood", dimensions: "120cm x 80cm x 76cm" },
    ],
  },
  {
    slug: "kids-room",
    name: "Kids Room",
    count: "22 items",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80",
    products: [
      { id: "kr-1", name: "Kids Bunk Bed", price: "PKR 45,000", tag: "Bestseller", image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80", images: ["https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80","https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"], description: "Safe and sturdy bunk bed with side rails and ladder.", material: "Sheesham Wood", dimensions: "200cm x 100cm x 160cm" },
      { id: "kr-2", name: "Study Table for Kids", price: "PKR 14,000", tag: "Popular", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80", images: ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"], description: "Compact study table with bookshelf and drawer.", material: "MDF + Wood", dimensions: "100cm x 55cm x 76cm" },
    ],
  },
  {
    slug: "wardrobe",
    name: "Wardrobe",
    count: "15 items",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80",
    products: [
      { id: "wd-1", name: "3-Door Wardrobe", price: "PKR 55,000", tag: "Bestseller", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80", images: ["https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80","https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80","https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"], description: "Spacious 3-door wardrobe with mirror and internal shelving.", material: "Sheesham Wood + Mirror", dimensions: "150cm x 55cm x 210cm" },
      { id: "wd-2", name: "2-Door Wardrobe", price: "PKR 38,000", tag: "Popular", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80", images: ["https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80","https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"], description: "Compact 2-door wardrobe ideal for smaller rooms.", material: "Sheesham Wood", dimensions: "100cm x 55cm x 210cm" },
    ],
  },
  {
    slug: "storage-shelves",
    name: "Storage & Shelves",
    count: "27 items",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80",
    products: [
      { id: "ss-1", name: "Wall Shelf Set", price: "PKR 8,500", tag: "Popular", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80", images: ["https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"], description: "Set of 3 floating wall shelves in solid wood.", material: "Sheesham Wood", dimensions: "60cm x 20cm x 4cm each" },
      { id: "ss-2", name: "Storage Cabinet", price: "PKR 25,000", tag: "New", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80","https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80"], description: "Multi-purpose storage cabinet with doors and shelves.", material: "Sheesham Wood", dimensions: "90cm x 40cm x 120cm" },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductById(categorySlug: string, productId: string) {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.products.find((p) => p.id === productId);
}
