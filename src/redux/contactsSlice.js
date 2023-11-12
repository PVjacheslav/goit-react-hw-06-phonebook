import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        prepare(newContact) {
            return {
                payload: { id: nanoid(), ...newContact }
            }
        },
        removeContact(state, action) {
            const index = state.contacts.findIndex(
                contact => contact.id !== action.payload
              );
              state.contacts.splice(index, 1);
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    }
})

export const {addContact, setFilter, removeContact} = contactsSlice.actions;

export const persistedReducer = persistReducer({
    key: 'contacts', 
    storage,
    whitelist: ['contacts'],
    },
    contactsSlice.reducer
)