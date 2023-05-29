import styled from "styled-components";
import {Path, SVG} from "../Typography/Typography";

const MinusIcon = () => {
    return (
        <SVGContainer viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <StyledPath fillRule="evenodd" clipRule="evenodd"
                        d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"/>
        </SVGContainer>
    );
}

const SVGContainer = styled(SVG)``;

const StyledPath = styled(Path)``;

export default MinusIcon;
