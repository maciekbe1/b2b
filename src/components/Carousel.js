import React from "react";
import Slider from "infinite-react-carousel";

export default function Carousel({ settings, images, type }) {
  return (
    <Slider {...settings}>
      {type === "component"
        ? images.map((item, index) => {
            return <div key={index}>{item}</div>;
          })
        : images.map((image, index) => {
            return (
              <div key={index}>
                <img src={image.path} alt="" style={image.style} />
              </div>
            );
          })}
    </Slider>
  );
}
