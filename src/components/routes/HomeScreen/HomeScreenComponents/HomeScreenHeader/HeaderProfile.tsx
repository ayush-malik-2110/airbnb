import styled from "styled-components";
import {Div, Image} from "../../../../Typography/Typography";

const HeaderProfile = () => {
    return (
        <StyledHeaderProfileContainer>
            <StyledHeaderProfileContent>
            <StyledProfileImageContainer
                src="https://framerusercontent.com/images/RkV86hKSZ17yNsuZKWylbt86ZiI.png"
                alt="" sizes="40px"
            />
        </StyledHeaderProfileContent>
    </StyledHeaderProfileContainer>
    );
}

const StyledProfileImageContainer = styled(Image)`
  pointer-events: none;
  user-select: none;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-position: center center;
  object-fit: fill;
  image-rendering: auto;
`;
const StyledHeaderProfileContent = styled(Div)`
  position: absolute;
  pointer-events: none;
  user-select: none;
  border-radius: inherit;
  inset: 0;
  display: contents;
`;

const StyledHeaderProfileContainer = styled(Div)`
  border-radius: 100%;
  opacity: 1;
  aspect-ratio: 1 / 1;
  flex: 0 0 auto;
  height: 40px;
  position: relative;
  width: 40px;
`;

export default HeaderProfile;