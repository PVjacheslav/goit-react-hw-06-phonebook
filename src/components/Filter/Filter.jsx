import { Forma, Input, Label } from "./Filter.styled"

function Filter({ value, onChangeFilter }) {
    return (
        <Forma>
            <Label>
                Find contacts by name
                <Input type="text" value={value} onChange={onChangeFilter} />
            </Label>
        </Forma>
    )
}

export default Filter;
