import { useState } from "react";

import Meals from "./Components/Meals/Meals";

import Header from "./Components/Layout/Navbar/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvier";



function App() {

  const [cartIsShown , setCartIsShown] = useState(false);

  const showcartHandler = () =>{
     setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false)
  }

  return (

    <CartProvider>
       {cartIsShown && < Cart onClose = {hideCartHandler} />}
      <Header onShowCart = {showcartHandler} />

        <main>
            
            <Meals />

        </main>

    </CartProvider>
   
  );
}

export default App;
