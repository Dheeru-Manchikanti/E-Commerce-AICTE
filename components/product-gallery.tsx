"use client"

import type { Product } from "@/lib/types"
import { ProductCard } from "@/components/product-card"

type Props = {
  products: Product[]
  onSelect: (product: Product) => void
}

export function ProductGallery({ products, onSelect }: Props) {
  if (!products.length) {
    return <p className="text-muted-foreground">No products found for this category.</p>
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onOpen={() => onSelect(p)} />
      ))}
    </div>
  )
}
