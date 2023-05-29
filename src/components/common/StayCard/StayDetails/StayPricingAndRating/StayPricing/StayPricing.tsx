import styled from "styled-components";
import {Div, Paragraph} from "../../../../../Typography/Typography";

export type StayPricingProps = {
    price?: string;
    priceType?: string;
}
const StayPricing = ({price, priceType}: StayPricingProps) => (
    <StyledPriceContainer>
    <StyledPrice>
        {price}
    </StyledPrice>
    <StyledDay>
        {priceType}
    </StyledDay>
</StyledPriceContainer>)

const StyledDay = styled(Paragraph)`
  color: #717171;
  line-height: 20px;
  font-size: 14px;
`;

const StyledPriceContainer = styled(Div)`
  height: 20px;
  display: flex;
  gap: 0;
`;

const StyledPrice = styled(Paragraph)`
  font-weight: 600;
  color: rgb(17, 17, 17)
`;
export default StayPricing;