import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiMethods from '../components/myAPI/myAPI';

const { fetchContacts, addContact, deleteContact } = apiMethods;

// Async thunks
export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetchContacts();
    return response;
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await addContact(contact);
    return response;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await deleteContact(contactId);
    return contactId;
  }
);

export const updateFilter = createAction('filter/update');
