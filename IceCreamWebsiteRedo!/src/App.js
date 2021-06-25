import Header from "./components/layout/Header";
import React, {useState} from "react";
import Product from "./components/products/ProductManager";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/cart_provider";

function App() {
  const [cartVisible, setShowCart] = useState(false);

  function showCart() {
    setShowCart(true);
  }

  function hideCart() {
    setShowCart(false);
  }


  return (
    
    <CartProvider>
      {cartVisible ? <Cart hideCart={hideCart} /> : ''}
        <Header showCart={showCart} />
        <main>
          <Product/>

        </main>
    </CartProvider>
  );
}

export default App;
