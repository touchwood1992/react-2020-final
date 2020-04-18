import React from "react";

const SliderItem = (props) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
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
