import React from "react";
const HomeCardItem = (props) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={props.item.img} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">{props.item.title}</h4>
          <p className="card-text">{props.item.desc}</p>
          <button className="btn btn-dark">{props.item.link}</button>
        </div>
      </div>
    </div>
  );
};
export default HomeCardItem;
