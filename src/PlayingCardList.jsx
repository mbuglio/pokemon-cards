import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

function CardTable(){
    const [cards, addCard, clearCards] = useAxios("cards", "https://deckofcardsapi.com/api/deck/new/draw/");

    return (
        <div className="PlayinCardList">
            <h3>Picak a card, any card!</h3>
        <div>
            <button onClick={()=> addCard(formatCard)}>Add a playing card!</button>
            <button onClick={clearCards}>Clear the table</button>
        </div>
        <div className="PlayCardList-card-area">
            {cards.map(card => (
                <PlayingCard key={card.id} front={card.image}/>
            ))}
        </div>
        </div>
    )
}

CardTable.defaultProps = {};

export default CardTable;
