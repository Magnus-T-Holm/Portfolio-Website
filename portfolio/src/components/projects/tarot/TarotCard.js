import React from "react";

const TarotCard = (data, key) => {
  // console.log(data);
  return (
    <div className="tarot_cards">
      <img
        src={"/cards/" + data.style + "/" + data.rank + ".jpg"}
        alt={data.rank}
      />
      {/* Not domt */}
      <p>{data.rank}</p>

      {/* Domt */}
      <p>{data.domt_title}</p>
      <p>{data.domt_text}</p>
    </div>
  );
};

export default TarotCard;
