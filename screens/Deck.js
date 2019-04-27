import React, {Component} from 'react';
import {MyView, MyButton, MyTitle, MyText} from '../components/MyComponents';
import {connect} from "react-redux";
import {removeDeck} from "../utils/_decks";
import {deleteDeck} from "../actions";

class Deck extends Component{
    static navigationOptions = {
        title: 'Deck',
    };

    deleteDeck = (title) => {
        removeDeck(title);
        this.props.dispatch( deleteDeck(title) );
        this.props.navigation.navigate('Home');
    };

    render() {
        const { deck } = this.props;
        if(deck !== undefined){
            return (
                <MyView>
                    <MyTitle>{deck.title}</MyTitle>
                    <MyText>{deck.questions.length} questions</MyText>
                    <MyButton mode='contained' onPress={() => this.props.navigation.navigate('Quiz',
                        { title: deck.title })}>Start Quiz</MyButton>
                    <MyButton backColor='orangered' mode='contained' onPress={() => this.props.navigation.navigate('NewQuestion',
                        { title: deck.title })}>
                        Create New Question</MyButton>
                    <MyButton backColor='blue' mode='contained' onPress={() => this.deleteDeck(deck.title)}>
                        Delete deck</MyButton>
                </MyView>
            )
        }
        else{
            return (
                <MyView>
                </MyView>
            )
        }
    }
}

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;
    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(Deck);