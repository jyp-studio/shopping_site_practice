import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import ProductList from "./components/ProductList";
import CartContext from './components/CartContext';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Link to="/">首頁</Link>
        <Link to="/checkout">結帳</Link>
      
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/product-detail' element={<ProductDetail/>}>
            <Route path=':id' element={<ProductDetail/>} />
          </Route>
          <Route path='/*' element={<p>404 Not Found</p>} />
        </Routes>

      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;
