import styled from "styled-components";
import NumberFilterInput from "../NumberFilterInput/NumberFilterInput";
import {Div, Paragraph} from "../../Typography/Typography";

const PriceFilter = () => {
    return (
        <StyledPriceFilterContainer>
            <StyledPriceTopContainer>
                <StyledPriceTitleContainer>
                    <StyledPriceRangeTitle>
                        Price Range
                    </StyledPriceRangeTitle>
                </StyledPriceTitleContainer>
                <StyledPriceDescriptionContainer>
                    <StyledPriceDescription>
                        The average nightly price is $133
                    </StyledPriceDescription>
                </StyledPriceDescriptionContainer>
            </StyledPriceTopContainer>
            <StyledPriceBottomContainer>
                <NumberFilterInput title={'Min Price'} value={'$0'}/>
                <NumberFilterInput title={'Max Price'} value={'$500'}/>
            </StyledPriceBottomContainer>
        </StyledPriceFilterContainer>
    );
}

export default PriceFilter;

const StyledPriceBottomContainer = styled(Div)`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  gap: 12px;
`;

const StyledPriceTopContainer = styled(Div)`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;
const StyledPriceTitleContainer = styled(Div)`
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;
const StyledPriceRangeTitle = styled(Paragraph)`
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: rgb(17, 17, 17);
  font-size: 18px;
  line-height: 24px;
`;


const StyledPriceDescriptionContainer = styled(Div)`
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const StyledPriceDescription = styled(Paragraph)`
  color: rgb(113, 113, 113);
  font-size: 14px;
  line-height: 20px;
`;


const StyledPriceFilterContainer = styled(Div)`
  display: flex;
  gap: 16px;
  position: relative;
  flex-flow: column nowrap;
  overflow: visible;
`;