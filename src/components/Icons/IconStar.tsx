import styled from "styled-components";
import {Path, SVG} from "../Typography/Typography";

const IconStar = () => (
    <SVGContainer viewBox="0 0 32 32" version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
        <StyledPath
            d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z">
        </StyledPath>
    </SVGContainer>
);

const StyledPath = styled(Path)``;

const SVGContainer = styled(SVG)``;

export default IconStar;