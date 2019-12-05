//@flow
import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    font-family: sans-serif;
    font-size: 20px;
`;

export const MoveCounter = (props: {moves: number}) => <span>{props.moves} moves</span>;

export const Control = (props: {moves: number}) => {
    return (
        <Container>
            <MoveCounter moves={props.moves} />
        </Container>
    );
}