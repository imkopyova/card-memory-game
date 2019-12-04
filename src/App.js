//@flow
import React from "react";

import { Layout } from "./layout/Layout";
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

const createCardsForGame = (uniqCards: Array<{matchIndex: number}>) => {
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

    const cardsList = <>
        {uniqCards.map((card, index) => <Card key={index} color={card.color} letter={card.letter} />)}
    </>;

    return <Layout cards={cardsList}/>
}

export default App;