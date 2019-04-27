export const ADD_DECK = "ADD_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";

export function addDeck ( newDeck) {
    return {
        type: ADD_DECK,
        newDeck
    }
}

export function deleteDeck(title){
    return {
        type: DELETE_DECK,
        title
    }
}

export function receiveDecks ( decks ) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addCard( newCard ) {
    return {
        type: ADD_CARD,
        title: newCard.title,
        question: newCard.question,
        answer: newCard.answer
    }
}