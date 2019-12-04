//@flow
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

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

export const Card = (props: {color: string, letter: string}) => {
    const [ isOpen, setOpen ] = useState(true);
    const [ isVisible, setVisible ] = useState(true);
    return (
        <Placeholder onClick={() => isVisible && setOpen(!isOpen)}>
            {isVisible && isOpen ? 
                <FaceUpCard color={props.color}>
                    <span>{props.letter}</span>
                </FaceUpCard> :
                <FaceDownCard />
                }
            
        </Placeholder>
    );
}