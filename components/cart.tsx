"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/use-cart"
import { formatCurrency } from "@/lib/utils-currency"

export function Cart() {
  const { items, remove, total } = useCart()

  if (items.length === 0) {
    return <p className="text-muted-foreground text-sm">Your cart is empty.</p>
  }

  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-3">
        {items.map((li) => (
          <li key={li.product.id} className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {li.product.name}
                <span className="text-muted-foreground"> × {li.quantity}</span>
              </p>
              <p className="text-muted-foreground text-xs">{li.product.category}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{formatCurrency(li.product.price * li.quantity)}</span>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => remove(li.product.id)}
                aria-label={`Remove ${li.product.name} from cart`}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Separator />
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Total</span>
        <span className="text-base font-semibold">{formatCurrency(total)}</span>
      </div>
    </div>
  )
}
