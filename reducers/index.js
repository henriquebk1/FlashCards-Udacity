import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...action.decks
            };

        case ADD_DECK :
            return {
                ...state,
                ...action.newDeck
            };

        case DELETE_DECK:
            delete state[action.title];
            return {
                ...state
            };

        case ADD_CARD :
            let card = { question: action.question, answer: action.answer};
            let deck = state[action.title];
            deck.questions.push(card);
            return {
                ...state,
                [action.title]: deck
            };

        default :
            return state
    }
}

export default decks;