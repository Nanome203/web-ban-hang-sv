import React from "react";
import ProductsDisplay from "../components/ProductsDisplay.jsx";
import SlideShow from "../components/SlideShow.jsx";
function HomePage() {
  return (
    <>
      <SlideShow />
      <ProductsDisplay title="Tất cả sản phẩm" />
    </>
  );
}

export default HomePage;
