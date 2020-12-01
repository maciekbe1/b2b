import React from "react";
import Slider from "infinite-react-carousel";
import slider from "../../assets/img/slider.png";
import slider2 from "../../assets/img/slider2.png";
import slider3 from "../../assets/img/slider3.png";
import slider4 from "../../assets/img/slider4.png";

export default function Carousel() {
  const settings = {
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={slider}
          alt=""
          style={{ height: "60vh", objectFit: "contain", margin: "0 auto" }}
        />
      </div>
      <div>
        <img
          src={slider2}
          alt=""
          style={{ height: "60vh", objectFit: "contain", margin: "0 auto" }}
        />
      </div>
      <div>
        <img
          src={slider3}
          alt=""
          style={{ height: "60vh", objectFit: "contain", margin: "0 auto" }}
        />
      </div>
      <div>
        <img
          src={slider4}
          alt=""
          style={{ height: "60vh", objectFit: "contain", margin: "0 auto" }}
        />
      </div>
    </Slider>
  );
}
