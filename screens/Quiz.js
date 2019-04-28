import React from 'react';
import {MyText, MyView} from "../components/MyComponents";
import Question from "../components/Question";
import {connect} from "react-redux";
import Answer from "../components/Answer";
import {NavigationActions} from "react-navigation";

class Quiz extends React.Component {
    static navigationOptions = {
        title: 'Quiz',
    };

    state = {
        currentIndex: 0,
        correctAnswers: 0,
        showingAnswer: false,
        finished: false
    };


    goToNext = (correct) =>{
        let index = this.state.currentIndex + 1;
        let correctCount = this.state.correctAnswers;
        if(correct){
            correctCount++;
        }
        if(index === this.props.deck.questions.length){
            //navigate to finish
            this.props.navigation.reset([NavigationActions.navigate(
                { routeName: 'Finish',
                    params: {title: this.props.deck.title, correctCount: correctCount} })], 0);
        }
        else{
            //go to next question
            this.setState({
                currentIndex: index,
                correctAnswers: correctCount,
                showingAnswer: false,
            });
        }
    };

    render() {
        const {deck} = this.props;
        const currentQuestion = deck.questions[this.state.currentIndex];
        const {showingAnswer, currentIndex} = this.state;
        return (
            <MyView>
                <MyText>{`${currentIndex+1}/${deck.questions.length}`}</MyText>
                {
                    !showingAnswer && currentQuestion &&
                        <Question question={currentQuestion} showAnswerListener={() => this.setState({showingAnswer: true})}/>
                }
                {
                    showingAnswer && currentQuestion &&
                    <Answer question={currentQuestion} correctListener={() => this.goToNext(true)} wrongListener={() => this.goToNext(false)}/>
                }
            </MyView>
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params;
    return {
        deck: state[title],
    }
}

export default connect(mapStateToProps)(Quiz);