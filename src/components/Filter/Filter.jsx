import { Input, Label, Wrapper } from "./Filter.styled"
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";
import { setFilter } from "redux/contactsSlice";

export function Filter() {
    const dispatch = useDispatch();
    const saveFilter = useSelector(selectFilter);

    const onChange = evt => {
        const normalizedValue = evt.target.value.toLowerCase().trim();

        dispatch(setFilter(normalizedValue));
    };

    return (
        <Wrapper>
            <Label>
                Find contacts by name
                <Input 
                type="text" 
                value={saveFilter} 
                onChange={onChange}
                name="filter" />
            </Label>
        </Wrapper>
    )
}

