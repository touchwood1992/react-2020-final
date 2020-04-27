import React from "react";
import HomeCardItem from "./HomeCardItem/HomeCardItem";
import card1 from "../../../../assets/images/img_avatar1.png";

const cardObj = {
  cardItems: {
    one: {
      title: "John Doe",
      img: card1,
      desc:
        "Some example text some example text. John Doe is an architect and engineer",
      link: "See Profile",
    },
    two: {
      title: "John Doe",
      img: card1,
      desc:
        "Some example text some example text. John Doe is an architect and engineer",
      link: "See Profile",
    },
    three: {
      title: "John Doe",
      img: card1,
      desc:
        "Some example text some example text. John Doe is an architect and engineer",
      link: "See Profile",
    },
  },
};

const makeArray = [];
for (let [key, value] of Object.entries(cardObj.cardItems)) {
  makeArray.push({ key, ...value });
}

const HomeCards = () => {
  return (
    <div className="container mt-5 mb-2">
      <h2 className="heading">Our Team</h2>
      <div className="row">
        {makeArray.map((i) => (
          <HomeCardItem key={i.key} item={i}></HomeCardItem>
        ))}
      </div>
    </div>
  );
};
export default HomeCards;
