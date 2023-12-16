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
import { useEffect, useState } from "react";
import axios from "axios";
import { Context } from "./components/ReactContext.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [productsInCart, setProductsInCart] = useState([]);
  const [numberOfProductsInCart, setNumberOfProductsInCart] = useState(0)
  const values = { products, isLoggedIn, setIsLoggedIn, productsInCart, setProductsInCart, numberOfProductsInCart, setNumberOfProductsInCart };
  useEffect(() => {
    // Hàm này sẽ chạy sau khi component được mount
    const fetchProducts = async () => {
      try {
        // Thực hiện yêu cầu GET đến API
        const response = await axios.get(
          "https://6576af1c0fd5d07e432ed3ca.mockapi.io/dataUITShop"
        );

        // Lấy dữ liệu từ phản hồi và cập nhật state
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Gọi hàm để tải danh sách sản phẩm
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component được mount
  return (
    <Context.Provider value={values}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<NavigationLayout />}>
              <Route path="/" element={<SideBarLayout />}>
                <Route index element={<HomePage />} />
                <Route path="laptop" element={<ProductsDisplay title='Laptop' />} />
                <Route path="mousepad" element={<ProductsDisplay title='Lót chuột' />} />
                <Route path="mouse" element={<ProductsDisplay title='Chuột' />} />
                <Route path="keyboard" element={<ProductsDisplay title='Bàn phím' />} />
                <Route path="UITproducts" element={<ProductsDisplay title='Đồ UIT' />} />
                <Route path="others" element={<ProductsDisplay title='Khác' />} />
              </Route>
              <Route path="orders" element={<Orders />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/laptop/:id" element={<ProductInfo />} />
              <Route path="/mousepad/:id" element={<ProductInfo />} />
              <Route path="/mouse/:id" element={<ProductInfo />} />
              <Route path="/keyboard/:id" element={<ProductInfo />} />
              <Route path="/UITproducts/:id" element={<ProductInfo />} />
              <Route path="/others/:id" element={<ProductInfo />} />
            </Route>
            <Route path="login" element={<LogInForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
