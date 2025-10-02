import type { Product } from "@/lib/types"

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    imageUrl: "/images/wireless-headphones.jpg",
    description: "High-fidelity wireless headphones with noise-cancellation and a 20-hour battery life.",
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    category: "Apparel",
    price: 24.99,
    imageUrl: "/images/cotton-tshirt.jpg",
    description: "A comfortable and stylish 100% cotton t-shirt, available in multiple colors.",
  },
  {
    id: 3,
    name: "Smartwatch",
    category: "Electronics",
    price: 199.99,
    imageUrl: "/images/smartwatch.jpg",
    description: "A sleek smartwatch with fitness tracking, notifications, and a customizable watch face.",
  },
  {
    id: 4,
    name: "Ceramic Mug",
    category: "Home & Kitchen",
    price: 14.99,
    imageUrl: "/images/ceramic-mug.jpg",
    description: "Glossy ceramic mug with a comfortable handle, perfect for coffee or tea.",
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Sports & Outdoors",
    price: 29.99,
    imageUrl: "/images/yoga-mat.jpg",
    description: "Non-slip yoga mat with excellent cushioning for all types of workouts.",
  },
  {
    id: 6,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    imageUrl: "/images/leather-wallet.jpg",
    description: "Slim bifold leather wallet with RFID protection and multiple card slots.",
  },
  {
    id: 7,
    name: "LED Desk Lamp",
    category: "Home Office",
    price: 34.99,
    imageUrl: "/images/led-desk-lamp.jpg",
    description: "Adjustable LED desk lamp with 3 color temperatures and dimmable brightness.",
  },
  {
    id: 8,
    name: "Running Sneakers",
    category: "Footwear",
    price: 79.99,
    imageUrl: "/images/sneakers.jpg",
    description: "Lightweight running sneakers with breathable mesh and responsive cushioning.",
  },
  {
    id: 9,
    name: "Vitamin C Serum",
    category: "Beauty & Personal Care",
    price: 24.5,
    imageUrl: "/images/facial-serum.jpg",
    description: "Brightening facial serum with Vitamin C and hyaluronic acid for daily use.",
  },
]

export function categoriesFromProducts(list: Product[]): string[] {
  return Array.from(new Set(list.map((p) => p.category)))
}
