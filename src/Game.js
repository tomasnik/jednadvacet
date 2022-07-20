import Deck from "./components/Deck/Deck";
import Card from "./components/Card/Card";
import {useState} from "react";

function Game() {
    const [cards, setCards] = useState([]);

    const suits = ["spades", "clubs", "hearts", "diamonds"];
    const ranks = ["7", "8", "9", "10", "J", "Q", "K", "A"];

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function getRandomCard() {
        const randomSuit = getRandomElement(suits);
        const randomRank = getRandomElement(ranks);
        return <Card suit={randomSuit} rank={randomRank}/>
    }

    function addCard() {
        const card = getRandomCard();
        const cardsCopy = cards.slice();
        cardsCopy.push(card);
        setCards(cardsCopy);
    }

    return (
        <div className={"game"}>
            <Deck cards={cards}/>
            <button onClick={addCard}>New card</button>
        </div>
    );
}

export default Game;