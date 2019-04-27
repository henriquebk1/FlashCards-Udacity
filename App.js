import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Decks from './screens/Decks.js';
import Deck from './screens/Deck.js';
import NewDeck from './screens/NewDeck.js';
import NewQuestion from './screens/NewQuestion.js';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {setDailyNotification} from "./utils/helpers";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from "react-redux";
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import Quiz from "./screens/Quiz";
import Finish from "./screens/Finish";

const AppNavigator = createStackNavigator({
        Home: Decks,
        Deck: Deck,
        NewDeck: NewDeck,
        NewQuestion: NewQuestion,
        Quiz: Quiz,
        Finish: Finish
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

const AppContainer = createAppContainer(AppNavigator);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ff4000',
        accent: 'green',
    }
};

class App extends Component {
    componentDidMount() {
        setDailyNotification();
    }

    render() {
        return (
            <Provider store={createStore(reducer, applyMiddleware(ReduxThunk))}>
                <PaperProvider theme={theme}>
                    <AppContainer/>
                </PaperProvider>
            </Provider>
        )
    }
}

export default App
