import React from "react";

const Card = (data, key) => {
  let card_name;
  if (isNaN(parseInt(data.rank)) === true) {
    if (data.rank === "gray" || data.suit === "back") {
      card_name = "Card back";
    } else {
      card_name = `${data.rankLong} of ${data.suit}`;
    }
  } else {
    card_name = `${data.rank} of ${data.suit}`;
  }
  // console.log(data);
  return (
    <div className="cards">
      <img
        //change src to /cards/ when testing and /cards/ when deploying
        src={"/cards/standard_cards/" + data.rank + data.suit + ".png"}
        alt={card_name}
      />
      <p className='cardName'>{card_name}</p>
    </div>
  );
};

export default Card;
