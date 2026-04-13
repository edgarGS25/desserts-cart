import addToCartIcon from "../assets/icons/icon-add-to-cart.svg"
import iconDecrement from "../assets/icons/icon-decrement-quantity.svg"
import iconIncrement from "../assets/icons/icon-increment-quantity.svg"
import { formatCurrency } from "../helpers"
import type { CartItem, DessertItem } from "../types"

type DessertItemProps = {
    dessert: DessertItem
    addToCart: (item: DessertItem) => void
    cart: CartItem[]
    decrementQuantity: (id: number) => void
    incrementQuantity: (id: number) => void
}

export default function Dessert({dessert, cart, addToCart, decrementQuantity, incrementQuantity} : DessertItemProps) {
    const itemExist = cart.find(itemCart => itemCart.id === dessert.id)
    
    return (
        <div className="relative w-full max-w-sm h-auto">
                <img
                src={`/images/${dessert.image}.jpg`}
                alt={dessert.name}
                className="h-64 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                
                {cart.length && itemExist?(
                     
                        <>
                            <button 
                            className="flex gap-12 absolute bottom-25 inset-x-0 mx-auto w-2/3 rounded-4xl bg-orange-700 border-2 border-gray-600 p-4 text-sm font-medium transition hover:scale-105 justify-center cursor-pointer text-white">
                                <figure 
                                onClick={() => decrementQuantity(dessert.id)}
                                className="size-6 border-2 border-white rounded-full p-1 content-center">
                                    <img src={iconDecrement} alt="icono de decrementar cantidad" className="w-full object-cover"/>
                                </figure>

                                  {itemExist.quantity}

                                <figure 
                                onClick={() => incrementQuantity(dessert.id)}
                                className="size-6 border-2 border-white rounded-full p-1">
                                    <img src={iconIncrement} alt="icono de incrementar cantidad" className="w-full object-cover"/>
                                </figure>
                            </button>
                        </> 
                ) : (
                    <>
                        <button 
                        className="flex gap-4 absolute bottom-25 inset-x-0 mx-auto w-2/3 rounded-4xl bg-white border-2 border-gray-600 p-4 text-sm font-medium transition hover:scale-105 justify-center cursor-pointer"
                        onClick={() => addToCart(dessert)}
                        >
                        <img src={addToCartIcon} alt="icono de agregar al carrito" className=""/>
                        Add to Cart
                        </button>
                    </>
                )}
                
            <div className="relative bg-transparent mt-8">
                
                <p>{dessert.category}</p>
                <h2 className="mt-4 text-lg font-medium text-gray-900" id="name">{dessert.name}</h2>

                <p className="mt-1.5 text-sm text-orange-700" id="price">{formatCurrency(dessert.price)}</p>

            </div>
    </div>
    )
}

