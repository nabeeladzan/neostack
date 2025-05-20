import {makeStore} from "@powertrain/Store.ts";

// Define the state interface for our library stack
interface LibraryState {
    stack: string[]; // The array representing the stack of books (using strings for simplicity)
}

// Define the action interface for modifying the state
interface LibraryActions {
    addBook: (bookTitle: string) => void; // Action to add a book to the top of the stack
    removeBook: () => void; // Action to remove the book from the top of the stack
}

export const libraryStore = makeStore<LibraryState, LibraryActions>((set) => ({
    stack: [],
    addBook: (bookTitle) => {
        set((state) => {
            state.stack.push(bookTitle);
        });
    },
    removeBook: () => {
        set((state) => {
            state.stack.pop();
        });
    },
}));