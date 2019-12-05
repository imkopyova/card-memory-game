//@flow
import React from "react";
import { useState, useEffect } from "react";

import { Layout } from "./layout/Layout";
import { Control } from "./control/Control";
import { Card } from "./card/Card";

const colors = {
    TERRA_COTTA: "#ED6A5A",
    BLOND: "#F4F1BB",
    SEA_FOAM_GREEN: "#B2DBBF",
    VERY_PALE_YELLOW: "#F3FFBD",
    CAMBRIDGE_BLUE: "#9BC1BC",
    CADET_BLUE: "#5CA4A9",
    PLATINUM: "#E6EBE0",
    PALE_GOLD: "#E6B89C"
}

const uniqCards = [
    {matchIndex: 0, color: colors.TERRA_COTTA, letter: "A" },
    {matchIndex: 1, color: colors.BLOND, letter: "B" },
    {matchIndex: 2, color: colors.SEA_FOAM_GREEN, letter: "C" },
    {matchIndex: 3, color: colors.VERY_PALE_YELLOW, letter: "D" },
    {matchIndex: 4, color: colors.CAMBRIDGE_BLUE, letter: "E" },
    {matchIndex: 5, color: colors.CADET_BLUE, letter: "F" },
    {matchIndex: 6, color: colors.PLATINUM, letter: "G" },
    {matchIndex: 7, color: colors.PALE_GOLD, letter: "H" }
];

type UniqCardType = {
    matchIndex: number,
    color: string,
    letter: string
};

export type ExtendedCardType = {
    ...UniqCardType,
    id: number
}

const createCardsForGame = (uniqCards: Array<UniqCardType>): Array<ExtendedCardType> => {
    return [
        ...uniqCards.map((card, index) => ({...card, id: card.matchIndex})),
        ...uniqCards.map((card, index) => ({...card, id: card.matchIndex + uniqCards.length}))
    ];
}

const shuffle = (items: Array<any>) => {
    let manipulated = items;
    let shuffled = [];
    for (let i = items.length - 1; i >= 0; i--) {
        let random = Math.floor(Math.random()*(i + 1));
        shuffled.push(manipulated[random]);
        manipulated[random] = manipulated[i];
    }
    return shuffled;
}

const App = () => {

    const [ cards, setCards] = useState(createCardsForGame(uniqCards));
    const [ openedCards, setOpenedCards ] = useState([]);
    const [ hiddenCards, setHiddenCards ] = useState([]);
    const [ moves, setMoves ] = useState(0);

    useEffect(() => {
        if (openedCards.length !== 2) return;

        setMoves(moves + 1);

        if (openedCards[0].matchIndex === openedCards[1].matchIndex) {
            setTimeout(
                () => setHiddenCards([...hiddenCards, ...openedCards]),
                1000
            );
        };

        setTimeout(
            () => setOpenedCards([]),
            1000
        );
    }, [openedCards]);

    const cardsList = <>
        {createCardsForGame(uniqCards).map((card, index) => (
            <Card
                key={index}
                card={card}
                isHidden={!!hiddenCards.find(hiddenCard => card.id === hiddenCard.id)}
                isOpen={!!openedCards.find(openedCard => card.id === openedCard.id)}
                onOpen={card => setOpenedCards([...openedCards, card])}   />
        ))}
    </>;

    return <Layout control={<Control moves={moves} />} cards={cardsList}/>
}

export default App;