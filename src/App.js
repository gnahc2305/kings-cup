function App() {
  const cards = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    signs: ["spades", "clubs", "diamonds", "hearts"],
  };

  function drawCard() {
    const randomNumber = Math.floor(Math.random() * cards.numbers.length);
    console.log(cards.numbers[randomNumber]);

    const randomSign = Math.floor(Math.random() * cards.signs.length);
    console.log(cards.signs[randomSign]);

  }

  drawCard();

  return (
    <div className="">
      {/* <button className="text-3xl font-bold ml-[50%] mt-[50%] bg-blue-800 rounded-sm p-1">
        PLAY
      </button> */}
    </div>
  );
}

export default App;
