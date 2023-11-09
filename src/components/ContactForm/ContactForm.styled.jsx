import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
    display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #F0F011;
  border: 4px solid #2450DB;
  border-radius: 4px;
`;

export const StyledField = styled(Field)`
    padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #2450DB;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 4px solid #2450DB;
  color: #2450DB;
  font-size: 20px;
`;

export const ErrMsg = styled(ErrorMessage)`
    color: #F5530D;
`