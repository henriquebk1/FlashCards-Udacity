import React, {Component} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {View} from 'react-native';
import styled from "styled-components";
import {connect} from "react-redux";
import {addCard} from "../actions";
import {saveCard} from "../utils/_decks";

class NewQuestion extends Component {
    static navigationOptions = {
        title: 'New Question',
    };

    state = {
        question: '',
        answer: ''
    };

    saveQuestion = () => {
        const {question, answer} = this.state;
        const {title} = this.props.deck;

        this.props.dispatch(addCard({title: title, question: question, answer: answer}));
        saveCard(title, {question, answer});

        this.props.navigation.navigate('Deck',
            { title: title });
    };

    render() {
        return (
            <CustomView>
                <CustomInput
                    underlineColor='orange'
                    selectionColor='orange'
                    label='Question'
                    onChangeText={text => this.setState({question: text})}
                    value={this.state.question}
                />
                <CustomInput
                    underlineColor='orange'
                    selectionColor='orange'
                    label='Answer'
                    onChangeText={text => this.setState({answer: text})}
                    value={this.state.answer}
                />
                <Button
                    onPress={this.saveQuestion}
                    disabled={this.state.question.length === 0 || this.state.answer.length === 0}
                    icon='save' mode='contained'>Save</Button>
            </CustomView>
        );
    }
}

const CustomView = styled(View)`
    padding: 4px;
`;

const CustomInput = styled(TextInput)`
    margin: 4px;
    color: orange;
`;

function mapStateToProps(state, {navigation}) {
    const {title} = navigation.state.params;
    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(NewQuestion);