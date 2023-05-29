import styled from 'styled-components';
import {Div, Paragraph} from "../../Typography/Typography";

export type NumberFilterInputType = {
    title: string;
    value: string;
};
const NumberFilterInput = ({title = '', value= ''}: NumberFilterInputType) => {
    return (
        <StyledNumberFilterInputContainer>
            <StyledNumberFilterInputTitleContainer>
                <StyledNumberFilterInputTitle>
                    {title}
                </StyledNumberFilterInputTitle>
            </StyledNumberFilterInputTitleContainer>
            <StyledInputContainer>
                <StyledInput>
                    {value}
                </StyledInput>
            </StyledInputContainer>
        </StyledNumberFilterInputContainer>
    )
}

const StyledInputContainer = styled(Div)`
  border-bottom-width: 1px;
  border-color: rgba(17, 17, 17, 0.1);
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  height: 48px;
  border-radius: 12px;
`;
const StyledInput = styled(Paragraph)`
    font-size: 14px;
  line-height: 20px;
  color: rgb(17, 17, 17);
  padding: 12px 16px;
`;
const StyledNumberFilterInputContainer = styled(Div)`
  width: 100%
`;
const StyledNumberFilterInputTitleContainer = styled(Div)``;
const StyledNumberFilterInputTitle = styled(Paragraph)`
    color: rgb(113,113, 113);
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  padding: 0;
`;
export default NumberFilterInput;