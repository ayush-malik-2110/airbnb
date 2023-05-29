import styled from "styled-components";
import StayDescription from "./StayDescription/StayDescription";
import StayPricingAndRating from "./StayPricingAndRating/StayPricingAndRating";
import {Div} from "../../../Typography/Typography";

export type StayDetailsProps = {
    name?: string;
    location?: string;
    rating?: string;
    price?: string;
    priceType?: string;
}
const StayDetails = (props: StayDetailsProps) => {
    const { name, location, price, priceType, rating } = props;
    return (
        <StyledStayDetails>
            <StayDescription name={name} location={location}/>
            <StayPricingAndRating price={price} rating={rating} priceType={priceType} />
        </StyledStayDetails>
    )
};

const StyledStayDetails = styled(Div)`
  height: 180px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  place-content: flex-start space-between;
`;

export default StayDetails;