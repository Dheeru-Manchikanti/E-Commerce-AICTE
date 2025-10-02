export type Product = {
  id: number
  name: string
  category: string
  price: number
  imageUrl: string
  description: string
}

export type CartItem = {
  product: Product
  quantity: number
}
