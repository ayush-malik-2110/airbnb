import MinusIcon from "../../Icons/MinusIcon";
import PlusIcon from "../../Icons/PlusIcon";
import styled from "styled-components";
import {Div, Paragraph} from "../../Typography/Typography";

const GuestSelector = () => (
    <StyledGuestCountContainer>
        <StyledGuestIconContainer>
            <MinusIcon />
        </StyledGuestIconContainer>
        <StyledCalendarTitleContainer>
            <StyledCalendarTitle>
                4 guests
            </StyledCalendarTitle>
        </StyledCalendarTitleContainer>
        <StyledGuestIconContainer>
            <PlusIcon />
        </StyledGuestIconContainer>
    </StyledGuestCountContainer>
);

const StyledGuestIconContainer = styled(Div)`
  flex: 0 0 auto;
  height: 32px;
  position: relative;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: inherit;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  svg {
    width: 20px;
    height: 20px;
    fill: rgb(212, 59, 81);
  }
`;

const StyledGuestCountContainer = styled(Div)`
  place-content: center flex-start;
  align-items: center;
  background-color: rgb(243, 243, 242);
  border-radius: 12px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 16px;
  height: 48px;
  overflow: visible;
  padding: 12px 8px;
  position: relative;
  width: min-content;
`;

const StyledCalendarTitleContainer = styled(Div)`
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

const StyledCalendarTitle = styled(Paragraph)`
  font-size: 14px;
  line-height: 20px;
  
`;

export default GuestSelector;