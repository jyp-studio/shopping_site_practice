import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Button, ChakraProvider, HStack, VStack } from "@chakra-ui/react"
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import ProductList from "./components/ProductList";
import CartContext from './components/CartContext';
import { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'


function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <ChakraProvider>
      <BrowserRouter>

        <CartContext.Provider value={{cartItems, setCartItems}}>
          <VStack backgroundColor="pink">
            <HStack spacing="20px">
              <Button variant="link"><Link to="/">首頁</Link></Button>
              <Button variant="link"><Link to="/checkout">結帳</Link></Button>
            </HStack>
          </VStack>
        
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
    </ChakraProvider>
  );
}

export default App;
