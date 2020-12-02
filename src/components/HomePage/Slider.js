import React from "react";
import Slider from "infinite-react-carousel";
import slider from "../../assets/img/slider-text.png";
import slider2 from "../../assets/img/slider2.png";
import slider3 from "../../assets/img/slider3-text.png";
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
        <div className="">
          <img
            src={slider}
            alt=""
            style={{
              height: "60vh",
              objectFit: "contain",
              margin: "0 auto",
              width: "100%",
            }}
          />
        </div>
      </div>
      <div>
        <img
          src={slider2}
          alt=""
          style={{
            height: "60vh",
            objectFit: "cover",
            margin: "0 auto",
            width: "100%",
          }}
        />
      </div>
      <div>
        <img
          src={slider3}
          alt=""
          style={{
            height: "60vh",
            objectFit: "cover",
            margin: "0 auto",
            width: "100%",
          }}
        />
      </div>
      <div>
        <img
          src={slider4}
          alt=""
          style={{
            height: "60vh",
            objectFit: "cover",
            margin: "0 auto",
            width: "100%",
          }}
        />
      </div>
    </Slider>
  );
}
