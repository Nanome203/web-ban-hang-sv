import React from "react";
import ProductsDisplay from "../components/ProductsDisplay.jsx";
import SlideShow from "../components/SlideShow.jsx";
import Footer from "../components/Footer.jsx";
function HomePage() {
  return (
    <>
      <SlideShow />
      <ProductsDisplay title="Tất cả sản phẩm" />
      <Footer />
    </>
  );
}

export default HomePage;
