//@flow
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import type { ExtendedCardType } from "../App";

const Placeholder = styled.div`
    margin: 5px;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    outline: none;
`;

const FaceDownCard = styled(Container)`
    background-color: #CDDCDC;
`;

const FaceUpCard = styled(Container)`
    background-color: ${prop => prop.color};
    font-size: 130px;
`;

export const Card = (props: { card: ExtendedCardType, onOpen: ExtendedCardType => mixed, isOpen: boolean, isHidden: boolean }) => {
    const { card, onOpen, isOpen, isHidden } = props;

    return (
        <Placeholder onClick={() => !isHidden && onOpen(card)}>
            {!isHidden && isOpen ? 
                <FaceUpCard color={card.color}>
                    <span>{card.letter}</span>
                </FaceUpCard> :
                !isHidden ? <FaceDownCard /> : null
                }
            
        </Placeholder>
    );
}