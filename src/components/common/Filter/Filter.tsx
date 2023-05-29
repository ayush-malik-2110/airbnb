import styled from "styled-components";
import NumberFilterInput from "../NumberFilterInput/NumberFilterInput";
import PriceFilter from "../PriceFilter/PriceFilter";
import PlaceFilter from "../PlaceFilter/PlaceFilter";
import {Div, Paragraph} from "../../Typography/Typography";

const Filter = () => {
    return <StyledFilterContainer>
        <StyledFilterHeader>
            <StyledFilterTitleContainer>
                <StyledFilterTitle>
                    Filters
                </StyledFilterTitle>
            </StyledFilterTitleContainer>
            <StyledFilterHeaderActions>
                <StyledFilterClearAllTitle>Clear All</StyledFilterClearAllTitle>
            </StyledFilterHeaderActions>
        </StyledFilterHeader>
        <StyledSeparator/>
        <PriceFilter/>
        <StyledSeparator/>
        <PlaceFilter />
    </StyledFilterContainer>
}



const StyledFilterTitleContainer = styled(Div)`
    width: 164px;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

const StyledFilterClearAllTitle = styled(Paragraph)`
    font-size: 14px;
    line-height: 20px;
  text-align: right;
  color: rgb(198, 47, 101);
`;

const StyledFilterTitle = styled(Paragraph)`
  font-weight: 600;
  font-size: 18px;
  color: rgb(17, 17, 17);
  line-height: 24px;
`;

const StyledFilterHeaderActions = styled(Div)`
    width: 164px;
`;

const StyledSeparator = styled(Div)`
  background-color: rgba(17, 17, 17, 0.1);
  height: 1px;
  position: relative;
  width: 100%;
  flex: 0 0 auto;
`;


const StyledFilterHeader = styled(Div)`
    display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  gap: 24px;
  align-items: center;
`;

const StyledFilterContainer = styled(Div)`
  z-index: 2;
  width: 100%;
  padding: 24px 24px 120px;
  gap: 24px;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  min-width: 400px;
`;
export default Filter;