import Deck from "./components/Deck/Deck";
import {useState} from "react";

function Game() {
    const suits = ["spades", "clubs", "hearts", "diamonds"];
    const ranks = ["7", "8", "9", "10", "J", "Q", "K", "A"];

    function getAllPossibleCards() {
        const array = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                array.push({"suit": suit, "rank": rank});
            }
        }
        return array;
    }

    const [possibleCards, setPossibleCards] = useState(getAllPossibleCards);
    const [dealtCards, setDealtCards] = useState([]);

    function getRandomPossibleCard() {
        const card = possibleCards[Math.floor(Math.random() * possibleCards.length)];
        let newPossibleCards = possibleCards.filter((value) => {
            return value !== card;
        })
        setPossibleCards(newPossibleCards);
        return card;
    }

    function dealCard() {
        if (dealtCards.length === suits.length * ranks.length) {
            return;
        }
        let card = getRandomPossibleCard();
        const cardsCopy = dealtCards.slice();
        cardsCopy.push(card);
        setDealtCards(cardsCopy);
    }

    return (
        <div className={"game"}>
            <Deck cards={dealtCards}/>
            <button onClick={dealCard}>Deal card</button>
        </div>
    );
}

export default Game;