import React, { Component } from 'react';
import {Button, Card, Paragraph, Title} from "react-native-paper";
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

class DeckTitleCard extends Component {
    render() {
        const { deck } = this.props;
        return(
            <StyledCard>
                <Card.Content>
                    <Title>{deck.title}</Title>
                    <Paragraph>{deck.questions.length} questions</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => this.props.navigation.navigate('Deck',
                        { title: deck.title })}>Open</Button>
                </Card.Actions>
            </StyledCard>
        )
    }
}

const StyledCard = styled(Card)`
    margin: 4px;
`;

export default withNavigation(DeckTitleCard);