import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SideBarLayout from "./layout/SideBarLayout.jsx";
import ProductsDisplay from "./components/ProductsDisplay.jsx";
import NotFound from "./pages/NotFound.jsx";
import LogInForm from "./pages/LogInForm.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx";
import NavigationLayout from "./layout/NavigationLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route path="/" element={<SideBarLayout />}>
            <Route index element={<HomePage />} />
            <Route path="laptop" element={<ProductsDisplay />} />
            <Route path="mousepad" element={<NotFound />} />
            <Route path="mouse" element={<NotFound />} />
            <Route path="keyboard" element={<NotFound />} />
            <Route path="UITproducts" element={<NotFound />} />
            <Route path="others" element={<NotFound />} />
          </Route>
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="login" element={<LogInForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
