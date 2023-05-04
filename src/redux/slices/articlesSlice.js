import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {},
  reducers: {
    addArticles: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description) {
        return {
          payload: {
            title,
            description,
            id: nanoid(),
          },
        };
      },
    },
    deleteArticles(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addArticles, deleteArticles } = contactsSlice.actions;