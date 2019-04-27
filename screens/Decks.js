import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import DeckTitleCard from "../components/DeckTitleCard";
import {FAB} from 'react-native-paper';
import styled from 'styled-components';
import {connect} from "react-redux";
import {getAll} from "../utils/_decks";
import {receiveDecks} from "../actions";
import {AppLoading} from "expo";

class Decks extends Component{
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        ready: false
    };

    componentDidMount() {
        getAll()
            .then( (decks) => this.props.dispatch(receiveDecks( decks )) )
            .then(() => this.setState(() => ({
                ready: true
            })))
    }

    render() {
        const { decks } = this.props;
        const { ready } = this.state;

        if (!ready) {
            return <AppLoading />
        }
        return (
            <FullHeightView>
                { decks.length > 0
                    ?
                    <FlatList data={decks}
                              renderItem={({item}) => <DeckTitleCard deck={item}/>}
                              keyExtractor={(item, index) => item.title+index}/>
                              :
                    <Text>No Decks Saved. Add a new deck with the button ADD DECK.</Text>
                }
                <StyledFAB
                    label="add deck"
                    icon="add"
                    onPress={() => this.props.navigation.navigate('NewDeck')}
                />
            </FullHeightView>
        )
    }
}

const StyledFAB = styled(FAB)`
    position: absolute;
    margin: 16px;
    right: 0;
    bottom: 0;
`;

const FullHeightView = styled(View)`
    height: 100%;
`;

function mapStateToProps( state ) {
    const decks = Object.keys(state).map((key) => {
        return state[key];
    }) || [];
    return {
        decks: decks
    }
}

export default connect(mapStateToProps)(Decks);