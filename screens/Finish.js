import React, {Component} from 'react';
import {MyButton, MyText, MyTitle, MyView} from '../components/MyComponents';
import {connect} from "react-redux";
import { NavigationActions } from "react-navigation";

class Finish extends Component {
    static navigationOptions = {
        title: 'Result',
    };

    replay = () =>{
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Quiz', params: {title: this.props.deck.title} })], 0);
    };

    goHome = () => {
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Home' })], 0);
    };

    render() {
        const {deck, correctCount} = this.props;
        return (
            <MyView>
                <MyTitle>{deck.title}</MyTitle>
                <MyText>{Math.round(correctCount/deck.questions.length*100.0)}%</MyText>
                <MyText>{`${correctCount}/${deck.questions.length} corrects answers`}</MyText>
                <MyButton mode='contained' onPress={() => this.replay()}>Play again</MyButton>
                <MyButton backColor='orangered' mode='contained'
                          onPress={() => this.goHome()}>
                    Return to home</MyButton>
            </MyView>
        )
    }
}

function mapStateToProps(state, {navigation}) {
    const {title} = navigation.state.params;
    return {
        deck: state[title],
        correctCount: navigation.state.params.correctCount
    }
}

export default connect(mapStateToProps)(Finish);