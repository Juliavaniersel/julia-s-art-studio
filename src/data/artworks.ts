import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";
import heroPainting from "@/assets/hero-painting.jpg.jpg";
import shopTop1 from "@/assets/shop-top-1.jpg";
import shopTop2 from "@/assets/shop-top-2.jpg";
import shopTop3 from "@/assets/shop-top-3.jpg";
import shopTop4 from "@/assets/shop-top-4.jpg";

export interface Artwork {
  id: string;
  title: string;
  material: string;
  year: number;
  image: string;
  available: boolean;
  price?: number;
  /** placeholder image — replace with real artwork */
  isPlaceholder: boolean;
}

export const heroArtwork: Artwork = {
  id: "hero",
  title: "Vergankelijkheid", // PLACEHOLDER TITLE
  material: "Olieverf op doek, 120 × 80 cm",
  year: 2025,
  image: heroPainting,
  available: true,
  isPlaceholder: true,
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Stille Kracht", // PLACEHOLDER
    material: "Olieverf op doek, 100 × 70 cm",
    year: 2024,
    image: artwork1,
    available: true,
    price: 850,
    isPlaceholder: true,
  },
  {
    id: "2",
    title: "Aardse Verbinding", // PLACEHOLDER
    material: "Acryl op doek, 90 × 60 cm",
    year: 2024,
    image: artwork2,
    available: true,
    price: 720,
    isPlaceholder: true,
  },
  {
    id: "3",
    title: "Rode Dialoog", // PLACEHOLDER
    material: "Olieverf op doek, 80 × 60 cm",
    year: 2023,
    image: artwork3,
    available: false,
    isPlaceholder: true,
  },
  {
    id: "4",
    title: "Horizon", // PLACEHOLDER
    material: "Gemengde techniek op doek, 100 × 80 cm",
    year: 2023,
    image: artwork4,
    available: true,
    price: 950,
    isPlaceholder: true,
  },
  {
    id: "5",
    title: "Contrast", // PLACEHOLDER
    material: "Acryl op doek, 120 × 90 cm",
    year: 2024,
    image: artwork5,
    available: false,
    isPlaceholder: true,
  },
  {
    id: "6",
    title: "Organisch", // PLACEHOLDER
    material: "Olieverf op doek, 70 × 50 cm",
    year: 2025,
    image: artwork6,
    available: true,
    price: 680,
    isPlaceholder: true,
  },
];

export interface ShopItem {
  id: string;
  title: string;
  image: string;
  price: number;
  type: "top" | "painting";
  views: number;
  date: string;
  isPlaceholder: boolean;
  shopifyUrl?: string;
}

export const shopItems: ShopItem[] = [
  // Row 1: Stropdas topjes
  { id: "top-1", title: "Stropdas Top — Terracotta", image: shopTop1, price: 45, type: "top", views: 120, date: "2025-01-15", isPlaceholder: true },
  { id: "top-2", title: "Stropdas Top — Multi", image: shopTop2, price: 50, type: "top", views: 95, date: "2025-02-01", isPlaceholder: true },
  { id: "top-3", title: "Stropdas Top — Emerald", image: shopTop3, price: 48, type: "top", views: 140, date: "2024-12-10", isPlaceholder: true },
  { id: "top-4", title: "Stropdas Top — Paisley", image: shopTop4, price: 55, type: "top", views: 80, date: "2025-03-01", isPlaceholder: true },
  // Row 2: Available paintings
  ...artworks.filter(a => a.available && a.price).map((a, i) => ({
    id: `paint-${a.id}`,
    title: a.title,
    image: a.image,
    price: a.price!,
    type: "painting" as const,
    views: [110, 75, 130, 60][i] || 50,
    date: `${a.year}-06-01`,
    isPlaceholder: a.isPlaceholder,
  })),
];
