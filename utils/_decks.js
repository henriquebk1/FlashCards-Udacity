import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'Flashcards:decks';

export const getAll = () => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
        return (JSON.parse(decks));
    });
};

export const getDeck = (title) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
        return (JSON.parse(decks))[title];
    })
};

export const createDeck = (title) => {
    return AsyncStorage.mergeItem( DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
};

export const removeDeck = (title) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
        decks = JSON.parse(decks);
        delete decks[title];
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    })
};

export const saveCard = (title, question) => {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(decks => {
        decks = JSON.parse(decks);
        decks[title].questions.push(question);
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    })
};