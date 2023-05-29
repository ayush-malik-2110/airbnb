import GridViewIcon from "../../Icons/GridViewIcon";
import ListViewIcon from "../../Icons/ListViewIcon";
import styled from "styled-components";
import {Div} from "../../Typography/Typography";

const ToggleGridView = () => (
    <StyledHeaderLeftContainer>
        <StyledGridViewContainer>
            <StyledGridViewIconContainer>
                <GridViewIcon />
            </StyledGridViewIconContainer>
        </StyledGridViewContainer>
        <StyledListViewContainer>
            <StyledListViewIconContainer>
                <ListViewIcon />
            </StyledListViewIconContainer>
        </StyledListViewContainer>
    </StyledHeaderLeftContainer>
);

const StyledListViewIconContainer = styled(Div)`
  image-rendering: pixelated;
  aspect-ratio: inherit;
  svg {
    fill: rgb(0, 0, 0);
    height: 28px;
    display: block;
  }
`;
const StyledListViewContainer = styled(Div)`
  place-content: center;
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 10px;
  height: 48px;
  overflow: visible;
  padding: 0px;
  position: relative;
  width: 48px;
`;

const StyledGridViewIconContainer = styled(Div)`
  flex: 0 0 auto;
  height: 20px;
  position: relative;
  width: 20px;
  image-rendering: pixelated;
  flex-shrink: 0;
  fill: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  svg {
    fill: white;
    height: 22px;
  }
`;
const StyledGridViewContainer = styled(Div)`
  place-content: center;
  align-items: center;
  background-color: rgb(17, 17, 17);
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 10px;
  height: 48px;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 48px;
`;

const  StyledHeaderLeftContainer = styled(Div)`
  place-content: center flex-start;
  align-items: center;
  background-color: rgb(243, 243, 242);
  border-radius: 12px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 0;
  height: 48px;
  overflow: visible;
  padding: 0;
  position: relative;
  width: min-content;
`;

export default ToggleGridView