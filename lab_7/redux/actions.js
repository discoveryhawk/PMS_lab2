export const ADD_BOOK = 'ADD_BOOK';
export const ADD_INFO = 'ADD_INFO';
export const ADD_IMAGES = 'ADD_IMAGES';

export const addBook = book => dispatch => {
    dispatch({
        type: ADD_BOOK,
        payload: book
    });
};

export const addInfo = info => dispatch => {
    dispatch({
        type: ADD_INFO,
        payload: info
    });
};

export const addImg = img => dispatch => {
    dispatch({
        type: ADD_IMAGES,
        payload: img
    });
};
