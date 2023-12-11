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
    autoplaySpeed: 9000,
    speed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="slideContainer">
      <Slider {...settings}>
        <div className={styles.slider_item}>
          <img
            src="https://techuda.com/wp-content/uploads/2021/05/SworD-1.png"
            alt=""
          />
        </div>

        <div className={styles.slider_item}>
          <img
            src="https://www.phucanh.vn/media/news/3009_Giam5ptphukienlaptop.png"
            alt=""
          />
        </div>

        <div className={styles.slider_item}>
          <img
            src="https://i.ytimg.com/vi/LZQKqvpdA4M/maxresdefault.jpg"
            alt=""
          />
        </div>

        <div className={styles.slider_item}>
          <img
            src="https://cdn.mos.cms.futurecdn.net/RJVLR7HsKHDSGqHMp9iXKW.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default SlideShow;
