import Card from "./components/Card/Card";

function Game() {
    const suits = ["spades", "clubs", "hearts", "diamonds"];
    const ranks = ["7", "8", "9", "10", "J", "Q", "K", "A"];

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    const randomSuit = getRandomElement(suits);
    const randomRank = getRandomElement(ranks);


    return (
        <Card rank={randomRank} suit={randomSuit}/>
    );
}

export default Game;