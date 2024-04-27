import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../componentsCSS/SlideShow.module.css";
function SlideShow() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  };

  return (
    <div className="slideContainer">
      <Slider {...settings}>
        <div className={styles.slider_item}>
          <img
            src={require("../images/asus-rog-rtx-its-on-promo-01.jpg")}
            alt=""
          />
        </div>

        <div className={styles.slider_item}>
          <img
            src={require("../images/maxresdefault.jpg")}
            alt=""
          />
        </div>

        <div className={styles.slider_item}>
          <img
            src={require("../images/RJVLR7HsKHDSGqHMp9iXKW.jpg")}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default SlideShow;
