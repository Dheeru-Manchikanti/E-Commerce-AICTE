"use client"

import { useState, useMemo } from "react"
import { Separator } from "@/components/ui/separator"
import { ProductGallery } from "@/components/product-gallery"
import { FilterControls } from "@/components/filter-controls"
import { ProductModal } from "@/components/product-modal"
import { Cart } from "@/components/cart"
import { products as allProducts, categoriesFromProducts } from "@/data/products"
import type { Product } from "@/lib/types"

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = useMemo(() => ["All", ...categoriesFromProducts(allProducts)], [])
  const products = useMemo(() => {
    if (activeCategory === "All") return allProducts
    return allProducts.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-4 md:p-6">
      <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            E-commerce Product Showcase
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Clean, minimalist gallery with filters, details, and a simple cart.
          </p>
        </div>

        {/* Compact cart action for very small screens */}
        <div className="md:hidden">
          <a href="#cart" className="text-primary underline underline-offset-4">
            Skip to cart
          </a>
        </div>
      </header>

      <section aria-label="Filters">
        <FilterControls categories={categories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_320px]">
        <section aria-label="Products">
          <ProductGallery
            products={products}
            onSelect={(product) => {
              setSelectedProduct(product)
              setIsModalOpen(true)
            }}
          />
        </section>

        <aside id="cart" className="md:sticky md:top-4">
          <div className="rounded-lg border bg-card p-4">
            <h2 className="text-lg font-medium">Shopping Cart</h2>
            <Separator className="my-3" />
            <Cart />
          </div>
        </aside>
      </div>

      <footer className="mt-6 text-sm text-muted-foreground">
        <Separator className="mb-4" />
        <p>Built with a mobile-first layout. Images are real product photos.</p>
      </footer>

      <ProductModal open={isModalOpen} onOpenChange={setIsModalOpen} product={selectedProduct} />
    </main>
  )
}
