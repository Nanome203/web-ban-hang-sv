import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../componentsCSS/ProductDisplay.module.css";
function ProductsDisplay() {
  const [products, setProducts] = useState([]);

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
        console.log(products.data.img);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Gọi hàm để tải danh sách sản phẩm
    fetchProducts();
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component được mount

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <img src={product.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsDisplay;
