import {ImBin} from "react-icons/im"
import { Item, List, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "redux/selectors";
import { removeContact } from "redux/contactsSlice";


const ContactList = () => {
    const saveContacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(removeContact());

    return(
    <List>
        {saveContacts.map(contact => (
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