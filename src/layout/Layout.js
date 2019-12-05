//@flow
import * as React from "react";
import styled from "styled-components";

import { Card } from "../card/Card";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    width: calc(100vh - 200px);
    height: calc(100vh - 200px);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const Control = styled.div`
    width: calc(100vh - 200px);
    box-sizing: border-box;
    padding: 30px;
`;

export const Layout = (props: {cards: React.Element<>, control: React.Element<>}) => {
    return <Container>
        <Control>{props.control}</Control>
        <Grid>{props.cards}</Grid>
    </Container>
}