import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { CartProvider, useCart } from "./context/CartContext";

function Navber() {
const { cart } = useCart()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          🛒 MyShop
        </a>
        <div>
          <a className="nav-link d-inline me-3 text-white" href="/">
            Home
          </a>
          <a className="nav-link d-inline text-white" href="/cart">
            Cart ({cart.length})
          </a>
        </div>
      </div>
    </nav>
  );
}


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
