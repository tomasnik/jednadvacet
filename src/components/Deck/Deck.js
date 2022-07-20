import "./Deck.css";
import Card from "../Card/Card";

function Deck({cards}) {
    const renderedCards = [];
    for (let index in cards) {
        renderedCards.push(<Card key={index} suit={cards[index].suit} rank={cards[index].rank}/>);
    }

    return (
        <div className={"deck"}>
            {renderedCards}
        </div>
    );
}

export default Deck;