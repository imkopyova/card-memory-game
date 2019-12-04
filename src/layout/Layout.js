//@flow
import * as React from "react";
import styled from "styled-components";

import { Card } from "../card/Card";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Grid = styled.div`
    width: calc(100vh - 100px);
    height: calc(100vh - 100px);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export const Layout = (props: {cards: React.Element<>}) => {
    return <Container>
        <Grid>{props.cards}</Grid>
    </Container>
}