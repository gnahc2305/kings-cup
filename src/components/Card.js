import React from "react";
import spade from "../Icons/spade.png";
import club from "../Icons/club.png";
import diamond from "../Icons/diamond.png";
import heart from "../Icons/heart.png";

function Card({ cardNumber, cardSign }) {
  function checkSign(cardSign, cardNumber) {
    switch (cardSign) {
      case "spades":
        return (
          <div>
            {cardNumber}
            <img src={spade} alt="spade" height="50px" width="50px" />
          </div>
        );
      case "clubs":
        return (
          <div>
            {cardNumber}
            <img src={club} alt="club" height="50px" width="50px" />
          </div>
        );
      case "hearts":
        return (
          <div className="text-red-700">
            {cardNumber}
            <img src={heart} alt="heart" height="50px" width="50px" />
          </div>
        );
      case "diamonds":
        return (
          <div className="text-red-700">
            {cardNumber}
            <img src={diamond} alt="diamond" height="50px" width="50px" />
          </div>
        );
      default:
        return;
    }
  }

  return (
    <div className="h-[350px] w-[250px] bg-white rounded-xl">
      <div className="text-[70px] ml-3">
        <div className="flex flex-col">{checkSign(cardSign, cardNumber)}</div>
      </div>
    </div>
  );
}

export default Card;
