import "./Card.css";

function Card({rank, suit}) {
    // Used to represent suits
    const symbols = {
        "spades": "♠",
        "clubs": "♣",
        "hearts": "❤",
        "diamonds": "♦"
    }

    return (
        <div className={"card " + suit}>
            <span className={"card-top"}>{rank + symbols[suit]}</span>
            <span className={"card-middle"}>{rank}</span>
            <span className={"card-bottom"}>{rank + symbols[suit]}</span>
        </div>
    );
}

export default Card;