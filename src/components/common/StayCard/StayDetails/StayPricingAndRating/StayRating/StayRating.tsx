import styled from "styled-components";
import IconStar from "../../../../../Icons/IconStar";
import {Div, Span} from "../../../../../Typography/Typography";

export type StayRatingProps = {
    rating?: string;
}
const StayRating = ({ rating }: StayRatingProps): JSX.Element => (
    <StyledRatingContainer>
        <StyledRatingIcon>
            <IconStar />
        </StyledRatingIcon>
        <StyledRating>{rating}</StyledRating>
    </StyledRatingContainer>
)

const StyledRatingContainer = styled(Div)`
  display: flex;
  gap: 8px;
`;

const StyledRatingIcon = styled(Span)`
  height: 16px;
  fill: rgb(0, 0, 0);
  svg {
    width: 16px;
    height: 16px;
  }
`;

const StyledRating = styled(Span)`
  color: rgb(17, 17, 17);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;
export default StayRating;