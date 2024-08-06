import { Module } from "vuex";
import { RootState } from "@/types";
import axios from "axios";

export const booksModule = "books";

export interface Book {
  list_name: string;
  display_name: string;
  updated: string;
  book_image: string;
}

interface BooksState {
  books: Book[];
  library: Book[];
}

export default <Module<BooksState, RootState>>{
  namespaced: true,
  state: {
    books: [],
    library: [],
  },
  mutations: {
    SET_BOOKS(state, books: Book[]) {
      state.books = books;
    },
    ADD_TO_LIBRARY(state, book: Book) {
      state.library.push(book);
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        commit("SET_BOOKS", response.data.results);
      } catch (error) {
        console.error(error);
      }
    },
    addToLibrary({ commit }, book: Book) {
      commit("ADD_TO_LIBRARY", book);
    },
  },
  getters: {
    books: (state) => state.books,
    library: (state) => state.library,
  },
};
