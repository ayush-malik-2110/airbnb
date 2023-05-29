import styled from 'styled-components';
import ImageGallery from "../../ImageGallery/ImageGallery";
import {Div} from "../../../Typography/Typography";
const StayProfile = () => {
    return (
        <StyledStayProfileContainer>
            <ImageGallery />
        </StyledStayProfileContainer>
    );
}

const StyledStayProfileContainer = styled(Div)`
  z-index: 2;
  width: 100%;
  padding: 24px 24px 120px;
  gap: 24px;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  min-width: 1000px;
`;
export default StayProfile;