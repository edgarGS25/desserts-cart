
import Dessert from './components/Dessert'
import Cart from './components/Cart'
import { useCart } from './hooks/useCart'


function App() {
  

  const { data, cart, addToCart, decrementQuantity, incrementQuantity, removeItems, cartTotal, clearCart } = useCart()

  return (
    <main className='bg-rose-50'>
      <h1 className="text-4xl font-bold text-orange-700 px-8 py-4">Desserts</h1>
      <div className="w-full flex flex-col md:flex-row  md:gap-8 p-8 mx-auto">
              <div className="w-full sm:w-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-8 lg:col-span-2">
                  {data.map(dessert => (
                    <Dessert 
                      key={dessert.id}
                      dessert={dessert}
                      cart={cart}
                      addToCart={addToCart}
                      decrementQuantity={decrementQuantity}
                      incrementQuantity={incrementQuantity}
                    />
                  ))}
              </div>
              <section className="w-auto max-w-md mt-5 md:mt-0 md:w-md">
                  <Cart 
                    cart={cart}
                    removeItems={removeItems}
                    cartTotal={cartTotal}
                    clearCart={clearCart}
                  />
              </section>
      </div>
    </main>
  )
}

export default App
