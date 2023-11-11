import {ImBin} from "react-icons/im"
import { Item, List, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { removeContact } from "redux/contactsSlice";
import { useMemo } from "react";

const ContactList = () => {
    const saveContacts = useSelector(getContacts);
    const saveFilter = useSelector(getFilter)
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(removeContact());

    const getFilterContacts = useMemo(
        ()=> () =>{
            const normalizedFilter = saveFilter.toLowerCase();
            return saveContacts.filter(({ name }) =>
              name.toLowerCase().includes(normalizedFilter)
            );
          },
          [saveContacts, saveFilter]
        );
    const filterContacts = getFilterContacts();
    return(
    <List>
        {filterContacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
            {<Button
                type="button"
                name="delete"
                onClick={handleDelete}>
                <ImBin fill="#000000" width="20" height="20"/>
                delete
                </Button>}
        </Item>
     ))}
    </List>
    )
}

export default ContactList;