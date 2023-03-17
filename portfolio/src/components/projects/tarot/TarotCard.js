import React from "react";

const TarotCard = (data, key) => {
  // console.log(data);
  return (
    <div className="cards">
      <img
        //change src to /cards/ when testing and /portfolio/cards/ when deploying
        src={"/portfolio/cards/" + data.style + "/" + data.rank + ".jpg"}
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
