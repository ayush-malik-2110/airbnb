import styled from "styled-components";
import {Div, Image} from "../../Typography/Typography";

const ImageGallery = () => {
    return (
        <StyledImageGallery />
    );
}

const StyledImageGallery = styled(Div)`
  display: flex;
  pointer-events: none;
  user-select: none;
  width: 100%;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;
`;

export default ImageGallery;