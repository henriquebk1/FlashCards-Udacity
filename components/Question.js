import React, { Component } from 'react';
import {Button, Card, Title} from "react-native-paper";
import styled from 'styled-components';

class Question extends Component {
    render() {
        const { question, showAnswerListener } = this.props;
        return(
            <StyledCard>
                <Card.Content>
                    <Title>{question.question}</Title>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => showAnswerListener()}>Show Answer</Button>
                </Card.Actions>
            </StyledCard>
        )
    }
}

const StyledCard = styled(Card)`
    margin: 4px;
`;

export default Question;