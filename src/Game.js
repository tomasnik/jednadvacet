import Card from "./components/Card/Card";

function Game() {
    const suits = ["spades", "clubs", "hearts", "diamonds"];
    const ranks = ["7", "8", "9", "10", "J", "Q", "K", "A"];

    return (
        <Card rank={ranks[0]} suit={suits[0]}/>
    );
}

export default Game;