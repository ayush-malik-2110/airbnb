import StyledHeartIcon from "../../../Icons/StyledHeartIcon";
import styled from "styled-components";
import {Div, Image} from "../../../Typography/Typography";

export type StayViewProps = {
    imageURL?: string;
}
const StayView = ({imageURL}: StayViewProps) => {
    return (
        <StyledStayImage>
            <StyledLikeIconContainer>
                <StyledHeartIcon/>
            </StyledLikeIconContainer>
            <StyledImage
                alt={"stay"}
                src={imageURL}
            />
        </StyledStayImage>
    );
};

const StyledImage = styled(Image)``;

const StyledLikeIconContainer = styled(Div)`
  height: 36px;
  width: 36px;
  position: absolute;
  right: 12px;
  top: 12px;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  border-radius: 100px;
  padding: 10px;
`;

const StyledStayImage = styled(Div)`
  height: 200px;
  background: gray;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  position: relative;

  img {
    pointer-events: none;
    user-select: none;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center center;
    object-fit: cover;
    image-rendering: auto;
  }
`;

export default StayView;