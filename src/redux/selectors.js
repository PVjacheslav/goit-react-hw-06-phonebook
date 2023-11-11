export const getContacts = state => state.contactsBook.contacts;

export const getFilter = state => state.contactsBook.filter;

export const getVisibleContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
};