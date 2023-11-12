import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contactsBook.contacts;

export const selectFilter = state => state.contactsBook.filter;

export const getVisibleContacts = createSelector( 
    [selectContacts, selectFilter], 
    (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
);