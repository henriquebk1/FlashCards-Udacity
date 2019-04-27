import React, { Component } from 'react';
import {Card, Paragraph, Title} from "react-native-paper";
import styled from 'styled-components';
import {ErrorButton, SuccessButton} from "./MyComponents";

class Answer extends Component {
    render() {
        const { question, correctListener, wrongListener } = this.props;
        return(
            <StyledCard>
                <Card.Content>
                    <Title>{question.question}</Title>
                    <Paragraph>{question.answer}</Paragraph>
                    <Paragraph>You think right?</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <ErrorButton mode="contained" onPress={() => wrongListener()}>No</ErrorButton>
                    <SuccessButton mode="contained" onPress={() => correctListener()}>Yes</SuccessButton>
                </Card.Actions>
            </StyledCard>
        )
    }
}

const StyledCard = styled(Card)`
    margin: 4px;
`;

export default Answer;