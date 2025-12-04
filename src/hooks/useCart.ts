import { useEffect, useMemo, useState } from "react"
import { db } from '../data/db'
import type { CartItem, DessertItem } from "../types"

export function useCart(){
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem("cart")
        return localStorageCart? JSON.parse(localStorageCart) : []
    }

    const[data] =  useState(db)
    const[cart, setCart] = useState(initialCart)

    const minItems = 1
    const maxItems = 10

    const addToCart = (dessert : DessertItem) => {
        const itemExist = cart.find(itemCart => itemCart.id === dessert.id)
        
        if(itemExist){
            const updatedCart = cart.map(itemCart => itemCart.id === dessert.id?
                {...itemCart, quantity: itemCart.quantity + 1} 
                :
                itemCart)
            setCart(updatedCart)
        } else{
            const newItem = {...dessert, quantity: 1}
            setCart([...cart, newItem])
        }
    }

    const decrementQuantity = (id: DessertItem["id"]) => {
        const updatedCart = cart.map(itemCart => {
            if(itemCart.id === id && itemCart.quantity > minItems){
                return {...itemCart, quantity: itemCart.quantity - 1} 
            }
            return itemCart
        })
    
        setCart(updatedCart)
    }
    
    const incrementQuantity = (id : DessertItem["id"]) => {
        const updatedCart = cart.map(itemCart => {
            if(itemCart.id === id && itemCart.quantity < maxItems){
                return {...itemCart, quantity: itemCart.quantity + 1} 
            }
            return itemCart
        })
    
        setCart(updatedCart)
    }

    const removeItems = (id : DessertItem["id"]) => {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }

    const cartTotal = useMemo(
        () => cart.reduce((total, item) => total + (item.quantity * item.price),0)
        ,[cart])

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const clearCart = () => {
        setCart([])
        alert("Orden Confirmada")
    }

    return{
        data,
        cart,
        addToCart,
        decrementQuantity,
        incrementQuantity,
        removeItems,
        cartTotal,
        clearCart
    }
}