import "./Deck.css";

function Deck({cards}) {
    return (
        <div className={"deck"}>
            {cards}
        </div>
    );
}

export default Deck;