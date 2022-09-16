import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/cart-context.jsx";

import Homepage from "./pages/homepage/Homepage";
import SingleProduct from "./pages/singleProduct/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="products/:id" element={<SingleProduct />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
