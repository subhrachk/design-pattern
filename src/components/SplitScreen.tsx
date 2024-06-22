import React, { Component, ReactNode } from 'react'
import styled from 'styled-components';
import { Left, LeftType } from './Left';
import { Right } from './Right';

const Container = styled.div`
    display : flex
`;

const Pane = styled.div<{ $weight?: number; }>`
    flex: ${props => props.$weight};
`;

type SplitScreenProps = {
    left : React.ComponentType,
    right : React.ComponentType,
    leftweight : number ,
    rightweight : number
}

export const SplitScreen = ({ left , right , leftweight = 1, rightweight = 1 } : SplitScreenProps) => {
  return (
    <Container>
        <Pane $weight={leftweight}>
            <Left>Subhra</Left>
        </Pane>
        <Pane $weight={rightweight}>
            <Right />
        </Pane>

    </Container>
  )
}
