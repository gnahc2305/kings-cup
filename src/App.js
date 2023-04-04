import { cardsValue } from "./constants/information";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(undefined);
  const [challenge, setChallenge] = useState(undefined);

  const cards = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    signs: ["spades", "clubs", "diamonds", "hearts"],
  };

  let usedCards = [];

  function drawCard() {
    const rNumber = Math.floor(Math.random() * cards.numbers.length);
    let sss = cards.numbers[rNumber];
    setRandomNumber(sss);

    const rSign = Math.floor(Math.random() * cards.signs.length);
    let randomSign = cards.signs[rSign];

    let card = randomNumber + randomSign;

    if (usedCards.length === 52) {
      alert("game ended");
      return;
    }

    if (usedCards.includes(card)) {
      drawCard();
    } else {
      usedCards.push(card);
      console.log(card);
      console.log(cardsValue[randomNumber]);
      setChallenge(cardsValue[randomNumber]);
    }
  }

  return (
    <div className="">
      {/* <button onClick={() => console.log(usedCards)}>
        usedCards
      </button> */}

      <button
        className="text-3xl font-bold ml-[50%] mt-[50%] bg-blue-800 rounded-sm p-1"
        onClick={drawCard}
      >
        PLAY
      </button>

      <Card cardNumber={randomNumber} challenge={challenge} />
    </div>
  );
}

export default App;
