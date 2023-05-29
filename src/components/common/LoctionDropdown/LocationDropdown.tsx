import ArrowDownIcon from "../../Icons/ArrowDownIcon";
import styled from "styled-components";
import {Div, Paragraph} from "../../Typography/Typography";

const LocationDropdown = () => {
    return (
        <StyledLocationSelector>
            <StyledLocationSelectorTitleContainer>
                <StyledLocationSelectorTitle>
                    Anywhere
                </StyledLocationSelectorTitle>
            </StyledLocationSelectorTitleContainer>
            <StyledLocationSelectorArrowIcon>
                <ArrowDownIcon />
            </StyledLocationSelectorArrowIcon>
        </StyledLocationSelector>
    )
}

const StyledLocationSelectorArrowIcon = styled(Div)`
  flex-shrink: 0;
  position: relative;
  aspect-ratio: inherit;
  svg {
    height: 20px;
    width: 20px;
    fill: #717171;
  }
`;

const StyledLocationSelectorTitle = styled(Paragraph)`
  font-size: 14px;
  line-height: 20px;
`;

const StyledLocationSelectorTitleContainer = styled(Div)`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: none;
  flex: 0 0 auto;
  height: auto;
  position: relative;
  white-space: pre-wrap;
  width: 188px;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const StyledLocationSelector = styled(Div)`
  place-content: center flex-start;
  align-items: center;
  background-color: rgb(243, 243, 242);
  border-radius: 12px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 0px;
  height: 48px;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  width: 240px;
`;
export default LocationDropdown;