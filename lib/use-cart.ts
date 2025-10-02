"use client"

import { useEffect, useSyncExternalStore } from "react"
import type { CartItem, Product } from "./types"

// Simple external store pattern to sync state across components without extra deps.
// Not persisted intentionally (spec did not require persistence).
let state: CartItem[] = []
const listeners = new Set<() => void>()

function emit() {
  for (const l of listeners) l()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return state
}

function add(product: Product) {
  const idx = state.findIndex((li) => li.product.id === product.id)
  if (idx >= 0) {
    state = state.map((li, i) => (i === idx ? { ...li, quantity: li.quantity + 1 } : li))
  } else {
    state = [...state, { product, quantity: 1 }]
  }
  emit()
}

function remove(productId: number) {
  state = state.filter((li) => li.product.id !== productId)
  emit()
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  const total = items.reduce((sum, li) => sum + li.product.price * li.quantity, 0)

  // Optional: focus outline announcement when items change (accessibility nicety)
  useEffect(() => {
    // no-op: placeholder for potential toasts or analytics
  }, [items])

  return {
    items,
    total,
    add,
    remove,
  }
}
