"use client"

import { Button } from "@/components/ui/button"

type Props = {
  categories: string[]
  activeCategory: string
  onSelectCategory: (category: string) => void
}

export function FilterControls({ categories, activeCategory, onSelectCategory }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((cat) => {
        const isActive = cat === activeCategory
        return (
          <Button
            key={cat}
            variant={isActive ? "default" : "secondary"}
            onClick={() => onSelectCategory(cat)}
            aria-pressed={isActive}
            aria-label={`Filter by ${cat}`}
          >
            {cat}
          </Button>
        )
      })}
    </div>
  )
}
