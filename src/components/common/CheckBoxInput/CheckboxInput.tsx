import styled from "styled-components";
import {Div} from "../../Typography/Typography";


const CheckboxInput = () => {
    return (
        <StyledInputCheckboxContainer>
            <StyledInputCheckbox />
        </StyledInputCheckboxContainer>
    );
}


const StyledInputCheckbox = styled(Div)`
  border-bottom-width: 1px;
  border-color: rgba(17, 17, 17, 0.1);
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  border-radius: 4px;
  height: 20px;
  width: 20px;
`;
const StyledInputCheckboxContainer = styled(Div)``;
export default CheckboxInput;