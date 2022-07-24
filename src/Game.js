import Deck from "./components/Deck/Deck";
import {useEffect, useState} from "react";
import "./Game.css";

function Game() {
    const suits = ["spades", "clubs", "hearts", "diamonds"];
    const ranks = ["7", "8", "9", "10", "J", "Q", "K", "A"];
    const scores = {"7": 7, "8": 8, "9": 9, "10": 10, "J": 1, "Q": 1, "K": 2, "A": 11};

    function getAllPossibleCards() {
        const array = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                array.push({"suit": suit, "rank": rank, "score": scores[rank]});
            }
        }
        return array;
    }

    const [possibleCards, setPossibleCards] = useState(getAllPossibleCards);
    const [dealtCards, setDealtCards] = useState([]);
    const [score, setScore] = useState(0);
    const [status, setStatus] = useState("playing");

    useEffect(() => {
        if (score === 21) {
            setStatus("oko");
        } else if (score > 21) {
            setStatus("trop");
        }
    }, [score])

    function getRandomPossibleCard() {
        const card = possibleCards[Math.floor(Math.random() * possibleCards.length)];
        let newPossibleCards = possibleCards.filter((value) => {
            return value !== card;
        })
        setPossibleCards(newPossibleCards);
        return card;
    }

    function dealCard() {
        if (status !== "playing") {
            return;
        }
        let card = getRandomPossibleCard();
        const cardsCopy = dealtCards.slice();
        cardsCopy.push(card);
        setScore(score + card.score);
        setDealtCards(cardsCopy);
    }

    function stand() {
        if (status === "playing") {
            setStatus("stand");
        }
    }

    return (
        <div className={"game"}>
            <h1>{status}</h1>
            <h2>{score}</h2>
            <Deck cards={dealtCards}/>
            <div className={"game-buttons"}>
                <button className={"deal-button"} onClick={dealCard}></button>
                <button className={"stand-button"} onClick={stand}></button>
            </div>
        </div>
    );
}

export default Game;