import { createContext, useReducer } from "react";

export const BookContext = createContext();

export const booksReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOOKS":
            return {
                books: action.payload,
            };
        case "ADD_BOOK":
            return {
                books: [action.payload, ...state.books],
            };
        case "DELETE_BOOK":
            return {
                books: state.books.filter((book) => {
                    book._id != action.payload._id;
                }),
            };
        case "SET_SEARCH":
            return {
                search: action.payload,
            };
        default:
            return state;
    }
};

export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(booksReducer, {
        books: null,
        search: null,
    });

    return (
        <BookContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BookContext.Provider>
    );
};
