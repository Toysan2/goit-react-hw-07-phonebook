import axios from 'axios';

const BASE_URL = 'https://659003f2cbf74b575eca5b2a.mockapi.io/contacts/contacts';

// Fetch contacts from the backend
const fetchContacts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Add a new contact to the backend
const addContact = async (contact) => {
  const response = await axios.post(BASE_URL, contact);
  return response.data;
};

// Delete a contact from the backend
const deleteContact = async (contactId) => {
  await axios.delete(`${BASE_URL}/${contactId}`);
  return contactId;
};

// Grouping all API methods in a single object for export
const apiMethods = { fetchContacts, addContact, deleteContact };

export default apiMethods;
