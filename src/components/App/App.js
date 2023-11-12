import { Container, SubTitle, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

const App = () => {
  const saveContacts = useSelector(selectContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm/>
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {saveContacts.length !== 0 && <ContactList />}
    </Container>
  );
};

export default App;
