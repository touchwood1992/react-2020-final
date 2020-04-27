import React from "react";

const SliderItem = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right , rgba(0,0,0,0.2),rgba(0,0,0,0.2)) , url(${props.img})`,
        }}
        className="inner-slide-item"
      >
        <div className="slick-content">
          <div>{props.content}</div>
        </div>
      </div>
    </div>
  );
};
export default SliderItem;
