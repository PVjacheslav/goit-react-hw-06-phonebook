
import { Formik } from 'formik';
import {ImPlus} from "react-icons/im"
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import * as Yup from 'yup';
import { Button, ErrMsg, Label, StyledField, StyledForm } from './ContactForm.styled';
import Notiflix from 'notiflix';

const initialValues = { name: '', number: '' };
const schema = Yup.object().shape({
    name:   Yup.string().min(2, "Too short!").required("This field is required!"),
    number: Yup.number().min(4, "Min 4 numbers").required("This field is required!"),
})

const ContactForm = () => {
  
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = (values, {resetForm})=> {
        const isInContacts = contacts.find(
          ({name}) => name.toLowerCase().trim() === values.name.toLowerCase().trim()
        );

        if (isInContacts) {
            Notiflix.Notify.failure(`${values.name} is already in contacts!`, {
                position: 'left-top',
                distance: '10px',
              });
            return;
            }
        dispatch(
            addContact({ 
                id: nanoid(),
                name: values.name,
                number: values.number,
            })
        );
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <StyledForm autoComplete='off'>
                <Label htmlFor='name'>
                    Name
                        <StyledField type="text" name="name" placeholder="Rosie Simpson" />
                        <ErrMsg name="name" />
                </Label>

                <Label htmlFor='number'>
                    Number
                        <StyledField type='tel' name="number" placeholder="459-12-56" required />
                        <ErrMsg name="number" />
                </Label>

                    <Button type="submit">
                        <ImPlus fill="#2450DB" width="20" height="20"/>
                        Add Contact</Button>
            </StyledForm>
        </Formik>
    );
}

export default ContactForm;
