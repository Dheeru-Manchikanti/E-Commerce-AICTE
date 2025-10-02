"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/use-cart"
import { formatCurrency } from "@/lib/utils-currency"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product | null
}

export function ProductModal({ open, onOpenChange, product }: Props) {
  const { add } = useCart()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        {product && (
          <>
            <DialogHeader>
              <DialogTitle className="text-pretty">{product.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                className="h-56 w-full rounded-md object-cover"
              />
              <p className="text-sm text-muted-foreground">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">{formatCurrency(product.price)}</span>
              </div>
            </div>
            <DialogFooter className="gap-2 sm:gap-2">
              <Button variant="secondary" onClick={() => onOpenChange(false)} aria-label="Close details">
                Close
              </Button>
              <Button
                onClick={() => {
                  add(product)
                  onOpenChange(false)
                }}
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
