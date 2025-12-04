import cartEmpty from "../assets/icons/illustration-empty-cart.svg"
import iconRemoveItem from "../assets/icons/icon-remove-item.svg"
import type { CartItem } from "../types"
import { formatCurrency } from "../helpers"

type CartItemProps ={
  cart: CartItem[]
  removeItems: (id: number) => void
  cartTotal: number
  clearCart: () => void
}

export default function Cart({cart, removeItems, cartTotal, clearCart} : CartItemProps) {
  return (
    <div className="w-full h-auto bg-white p-8 rounded-xl">
      <h1 className="w-full text-lg font-bold text-orange-700">Your cart</h1>
        {cart.length? (
          <>
            {cart.map(item => (
              
                 <div
                 key={item.id} 
                 className="flex justify-between items-center mt-4 w-auto">
                  <div>
                      <p>{item.name}</p>
                      <div className="flex gap-2">
                          <p className="text-orange-700">{item.quantity}x</p>
                          <p className="text-gray-500">@{formatCurrency(item.price)}</p>
                          <p className="font-bold">{formatCurrency(item.quantity * item.price)}</p>
                      </div>
                  </div>
                    <figure  
                    onClick={() => removeItems(item.id)}
                    className="size-6 border-2 border-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-200 ">
                        <img src={iconRemoveItem} alt="icono de eliminar item del carrito" className="object-cover w-full h-full"/>
                    </figure>
                </div>
              
            ))}
            <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500">Total:</p>
                <p className="font-bold text-2xl">{formatCurrency(cartTotal)}</p>
            </div>
                <button 
                onClick={clearCart}
                className="mt-4 w-full bg-orange-700 text-white p-2 rounded-4xl cursor-pointer hover:scale-105">
                  Confirm order
                </button>
            
          </>
        ) : (
          <div className="text-center">
            <img src={cartEmpty} alt="Empty cart" className="max-w-40 max-h-40 mx-auto"/>
            <p className="text-gray-500 h-6 min-w-16">Your added items will appear here</p>
          </div>
        )}
    </div>
  )
}
