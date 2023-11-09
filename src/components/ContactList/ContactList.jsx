import {ImBin} from "react-icons/im"
import { Item, List, Button } from "./ContactList.styled";

const ContactList = ({ contacts, onCleaningContact }) => (
    <List>
        {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
            {<Button
                type="button"
                name="delete"
                onClick={() => onCleaningContact(contact.id)}>
                <ImBin fill="#000000" width="20" height="20"/>
                delete</Button>}
        </Item>
    ))}
    </List>
);

export default ContactList;