import React, {Component} from 'react';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import {View} from 'react-native';
import styled from "styled-components";
import {connect} from "react-redux";
import {createDeck} from "../utils/_decks";
import {addDeck} from "../actions";

class NewDeck extends Component {
    static navigationOptions = {
        title: 'New Deck',
    };

    state = {
        uniqueName: true,
        title: ''
    };

    saveNewDeck = () => {
        this.props.dispatch(addDeck({ [this.state.title] : {title : this.state.title, questions : []} }));
        createDeck(this.state.title);
        this.setState({ title: '' });
        this.props.navigation.navigate('Home');
    };

    checkName = (text) => {
        this.setState({ title: text, uniqueName: this.props.decks.filter((deck) => deck.title === text).length === 0  });
    };

    render(){
        return (
            <CustomView>
                <CustomInput
                    underlineColor='orange'
                    selectionColor='orange'
                    label='Name'
                    onChangeText={text => this.checkName(text)}
                />
                <Button
                    disabled={this.state.uniqueName===false || this.state.title === undefined || this.state.title === ''}
                    icon='save' mode='contained' onPress={this.saveNewDeck}>Save</Button>
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

function mapStateToProps(state) {
    const decks = Object.keys(state).map((key) => {
        return state[key];
    }) || [];
    return {
        decks: decks
    }
}

export default connect(mapStateToProps)(NewDeck);