import CalenderIcon from "../../Icons/CalenderIcon";
import styled from "styled-components";
import {Div, Paragraph} from "../../Typography/Typography";

const DatePicker = () => (
    <StyledDateSelector>
        <StyledCalenderIconContainer>
            <CalenderIcon />
        </StyledCalenderIconContainer>
        <TitleContainer>
            <StyledTitle>
                June 14 - 21
            </StyledTitle>
        </TitleContainer>
    </StyledDateSelector>
);


const TitleContainer = styled(Div)`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: none;
  flex: 0 0 auto;
  height: auto;
  position: relative;
  white-space: pre;
  width: auto;
`;

const StyledTitle = styled(Paragraph)`
  font-size: 14px;
  line-height: 20px;
`;

const StyledCalenderIconContainer = styled(Div)`
  flex: 0 0 auto;
  height: 20px;
  position: relative;
  width: 20px;
  flex-shrink: 0;
  aspect-ratio: inherit;
  svg {
    width: 20px;
    height: 20px;
    fill: #717171;
  }
`;

const StyledDateSelector = styled(Div)`
  place-content: center flex-start;
  align-items: center;
  background-color: rgb(243, 243, 242);
  border-radius: 12px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 12px;
  height: 48px;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  width: min-content;
`;

export default  DatePicker;