import React, { useEffect, useState } from "react";
import { decks } from "cards"; // https://www.npmjs.com/package/cards
import Aside from "../../Aside";
import Card from "./Card";

const CardDraw = () => {
  const [deck] = useState(new decks.StandardDeck());
  useEffect(() => {
    deck.shuffleAll();
  }, [])
  const [deck_size, setDeck_size] = useState(deck.remainingLength);
  const [current_cards, setCurrent_cards] = useState([
    { rank: { shortName: "gray", longName: "" }, suit: { name: "back" } },
  ]);
  const [draw_amount, setDraw_amount] = useState(1);

  const target = React.createRef();
  const wrong_input = React.createRef();

  // Draw cards from deck
  function draw_cards() {
    // Check if deck is empty
    if (deck.remainingLength !== 0) {
      // Check if draw_amount is an allowed number
      if (target.current.value === "" || target.current.value <= 0) {
      } else {
        let newCards = deck.draw(draw_amount);
        setCurrent_cards(newCards);
        setDeck_size(deck.remainingLength);
      }
    }
  }

  // Reset deck
  function reset_deck() {
    deck.shuffleAll();
    setDeck_size(deck.remainingLength);
    setCurrent_cards([
      { rank: { shortName: "gray", longName: "" }, suit: { name: "back" } },
    ]);
  }

  // Update Draw Amount
  function updateDrawAmount() {
    console.log(target.current.value);
    if (target.current.value === "" || target.current.value < 0) {
      wrong_input.current.style.display = "block";
    } else {
      wrong_input.current.style.display = "none";
      setDraw_amount(parseInt(target.current.value));
    }
  }

  return (
    <main >
      <Aside />
      <div id="card_draw">
        <div id="controls">
          <button onClick={draw_cards}>Draw Cards</button>
          <p>
            Cards left: <span>{deck_size}</span>/52
          </p>
          <div id="draw_amount_container">
            <label htmlFor="draw_amount">Amount of cards to draw</label>
            <input
              ref={target}
              type="number"
              name="draw_amount"
              id="draw_amount"
              min="1"
              defaultValue="1"
              onChange={updateDrawAmount}
            />
            <p ref={wrong_input} id="wrong_input">
              The input is invalid.
              <br />
              Please enter a positive number.
            </p>          </div>
          <button onClick={reset_deck}>Reset Deck</button>
        </div>

        <div id="card_area_container">
          <div id="card_area">
            {current_cards.map((card, i) => (
              <Card
                rank={card.rank.shortName}
                rankLong={card.rank.longName}
                suit={card.suit.name}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDraw;
