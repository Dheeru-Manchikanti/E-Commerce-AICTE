"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/use-cart"
import { formatCurrency } from "@/lib/utils-currency"

type Props = {
  product: Product
  onOpen: () => void
}

export function ProductCard({ product, onOpen }: Props) {
  const { add } = useCart()

  return (
    <Card className="overflow-hidden">
      <button onClick={onOpen} className="block w-full cursor-pointer" aria-label={`View details for ${product.name}`}>
        <img
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          className="h-40 w-full object-cover sm:h-48"
        />
      </button>

      <CardContent className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium">{product.name}</h3>
            <p className="text-muted-foreground text-xs">{product.category}</p>
          </div>
          <span className="shrink-0 text-sm font-semibold">{formatCurrency(product.price)}</span>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0">
        <Button className="w-full" onClick={() => add(product)} aria-label={`Add ${product.name} to cart`}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
