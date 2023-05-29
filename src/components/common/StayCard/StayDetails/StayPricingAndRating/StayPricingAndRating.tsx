import styled from "styled-components";
import StayPricing from "./StayPricing/StayPricing";
import StayRating from "./StayRating/StayRating";
import {Div} from "../../../../Typography/Typography";

export type StayPricingAndRatingProps = {
    price?: string;
    priceType?: string;
    rating?: string;
}
const StayPricingAndRating = ({price, priceType, rating}: StayPricingAndRatingProps): JSX.Element => (
    <StyledStayPriceAndRating>
        <StayPricing price={price} priceType={priceType} />
        <StayRating rating={rating} />
    </StyledStayPriceAndRating>
);

const StyledStayPriceAndRating = styled(Div)`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  place-content: center space-between;
`;

export default StayPricingAndRating;