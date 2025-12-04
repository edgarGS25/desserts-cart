export type DessertItem = {
    id: number
    image: string
    name: string
    category: string
    price: number
}

export type CartItem  = DessertItem & {
    quantity: number
}