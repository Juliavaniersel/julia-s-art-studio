import artwork1 from "@/assets/artwork-1.mov";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";
import artwork7 from "@/assets/artwork-7.jpg";
import artwork8 from "@/assets/artwork-8.jpg";
import artwork9 from "@/assets/artwork-9.jpg";
import artwork10 from "@/assets/artwork-10.jpg";
import artwork11 from "@/assets/artwork-11.jpg";
import artwork12 from "@/assets/artwork-12.jpeg";
import artwork13 from "@/assets/artwork-13.jpeg";
import artwork14 from "@/assets/artwork-14.jpeg";
import artwork15 from "@/assets/artwork-15.jpg";
import artwork16 from "@/assets/artwork-16.jpg";
import artwork17 from "@/assets/artwork-17.jpg";
import artwork18 from "@/assets/artwork-18.jpg";
import heroPainting from "@/assets/hero-painting.jpg.jpg";
import shopTop1 from "@/assets/shop-top-1.jpg";
import shopTop2 from "@/assets/shop-top-2.jpg";
import shopTop3 from "@/assets/shop-top-3.jpg";
import shopTop4 from "@/assets/shop-top-4.jpg";
import shopTop5 from "@/assets/shop-top-5.jpg";
import shopTop6 from "@/assets/shop-top-6.jpg";
import shopTop7 from "@/assets/shop-top-7.jpg";
import shopTop8 from "@/assets/shop-top-8.jpg";

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
  isHorizontal?: boolean;
}

export const heroArtwork: Artwork = {
  id: "hero",
  title: "Cope with Distance",
  material: "Acrylic on paper, 53x 73 cm",
  year: 2021,
  image: heroPainting,
  available: true,
  isPlaceholder: false,
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "The challenge of letting go",
    material: "Acrylic on wooden panel, 260x150 cm",
    year: 2026,
    image: artwork1,
    available: false,
    price: 850,
    isPlaceholder: false,
  },
  {
    id: "2",
    title: "Juice WRLD Portrait",
    material: "Acrylic on paper",
    year: 2025,
    image: artwork2,
    available: false,
    price: 720,
    isPlaceholder: false,
  },
  {
    id: "3",
    title: "Balance and perspective",
    material: "Acrylic on canvas, 8x8 cm",
    year: 2026,
    image: artwork3,
    available: true,
    isPlaceholder: false,
  },
  {
    id: "4",
    title: "Top or Bottom?",
    material: "Acrylic on paper, 21x15 cm",
    year: 2025,
    image: artwork4,
    available: true,
    price: 90,
    isPlaceholder: false,
  },
  {
    id: "5",
    title: "Bodydotty",
    material: "Acrylic on paper, 21x15 cm",
    year: 2025,
    image: artwork5,
    available: true,
    isPlaceholder: false,
  },
  {
    id: "6",
    title: "Cheff",
    material: "Acrylic on paper",
    year: 2025,
    image: artwork6,
    available: false,
    price: 680,
    isPlaceholder: false,
  },
  {
    id: "7",
    title: "Observe and grow",
    material: "Linocut, 21x15 cm",
    year: 2025,
    image: artwork7,
    available: true,
    price: 50,
    isPlaceholder: false,
  },
  {
    id: "8",
    title: "Boobs are just a circle with a dot",
    material: "Gouache on paper",
    year: 2026,
    image: artwork8,
    available: true,
    price: 50,
    isPlaceholder: false,
    isHorizontal: true,
  },
  {
    id: "9",
    title: "Everything is a mirror",
    material: "Acrylic on paper",
    year: 2022,
    image: artwork9,
    available: true,
    price: 100,
    isPlaceholder: false,
  },
  {
    id: "10",
    title: "Juice WRLD portrait",
    material: "Acrylic on canvas",
    year: 2021,
    image: artwork10,
    available: false,
    price: 800,
    isPlaceholder: false,
  },
  {
    id: "11",
    title: "My first painting",
    material: "Acrylic on canvas",
    year: 2020,
    image: artwork11,
    available: true,
    price: 100,
    isPlaceholder: false,
  },
  {
    id: "12",
    title: "Juice WRLD portrait",
    material: "Acrylic on canvas",
    year: 2024,
    image: artwork12,
    available: true,
    price: 40,
    isPlaceholder: false,
  },
  {
    id: "13",
    title: "The Weeknd portrait",
    material: "Acrylic on paper",
    year: 2024,
    image: artwork13,
    available: false,
    isPlaceholder: false,
  },
  {
    id: "14",
    title: "Marilyn Monroe portrait",
    material: "Acrylic on paper",
    year: 2024,
    image: artwork14,
    available: false,
    isPlaceholder: false,
  },
  {
    id: "15",
    title: "Dog portrait",
    material: "Acrylic on paper",
    year: 2024,
    image: artwork15,
    available: false,
    isPlaceholder: false,
  },
  {
    id: "16",
    title: "Zoro portrait",
    material: "Acrylic on canvas",
    year: 2022,
    image: artwork16,
    available: false,
    isPlaceholder: false,
  },
  {
    id: "17",
    title: "Portrait for a friend",
    material: "Acrylic on canvas",
    year: 2022,
    image: artwork17,
    available: false,
    isPlaceholder: false,
  },
  {
    id: "18",
    title: "Locked like im crazy",
    material: "Acrylic on paper",
    year: 2022,
    image: artwork18,
    available: true,
    price: 100,
    isPlaceholder: false,
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
  externalUrl?: string;
}

export const shopItems: ShopItem[] = [
  // Row 1: Stropdas topjes
  { id: "top-1", title: "NeckTie Top — Blue lila", image: shopTop1, price: 34.99, type: "top", views: 120, date: "2025-01-15", isPlaceholder: false },
  { id: "top-2", title: "NeckTie Top — Red dark blue", image: shopTop2, price: 34.99, type: "top", views: 95, date: "2025-02-01", isPlaceholder: false },
  { id: "top-3", title: "NeckTie Top — Orange gray", image: shopTop3, price: 34.99, type: "top", views: 140, date: "2024-12-10", isPlaceholder: false },
  { id: "top-4", title: "NeckTie Top — Multi", image: shopTop4, price: 34.99, type: "top", views: 80, date: "2025-03-01", isPlaceholder: false },
  { id: "top-5", title: "NeckTie Top 5", image: shopTop5, price: 34.99, type: "top", views: 90, date: "2025-03-10", isPlaceholder: false, externalUrl: "https://www.vinted.nl/items/5804270008-handgemaakte-stropdas-top?referrer=catalog" },
  { id: "top-6", title: "NeckTie Top 6", image: shopTop6, price: 34.99, type: "top", views: 110, date: "2025-03-11", isPlaceholder: false },
  { id: "top-7", title: "NeckTie Top 7", image: shopTop7, price: 34.99, type: "top", views: 85, date: "2025-03-12", isPlaceholder: false },
  { id: "top-8", title: "NeckTie Top 8", image: shopTop8, price: 34.99, type: "top", views: 70, date: "2025-03-13", isPlaceholder: false },
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
