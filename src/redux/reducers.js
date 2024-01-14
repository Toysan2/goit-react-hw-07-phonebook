import { createReducer } from '@reduxjs/toolkit';
import { fetchContactsAsync, addContactAsync, deleteContactAsync, updateFilter } from './actions';

const initialState = {
  contacts: [],
  filter: ''
};

// Reducers using builder callback notation
const contactsReducer = createReducer(initialState.contacts, (builder) => {
  builder
    .addCase(fetchContactsAsync.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(addContactAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContactAsync.fulfilled, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

const filterReducer = createReducer(initialState.filter, (builder) => {
  builder.addCase(updateFilter, (state, action) => {
    return action.payload;
  });
});

export { contactsReducer, filterReducer };
