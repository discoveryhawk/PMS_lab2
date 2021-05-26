import {
    ADD_BOOK,
    ADD_INFO,
    ADD_IMAGES
} from './actions';

const initialState = {
    InfoData: [],
    BooksData: [],
    ImagesData: [],
};

function booksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                BooksData: action.payload
            };
        case ADD_INFO:
            return {
                ...state,
                InfoData: action.payload,
            };
        case ADD_IMAGES:
            return {
                ...state,
                ImagesData: action.payload,
            };
        default:
            return state;
    }
}

export default booksReducer
