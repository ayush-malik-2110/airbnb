import styled from "styled-components";
import {Path, SVG} from "../Typography/Typography";

const ArrowDownIcon = () => {
    return (
        <SVGContainer viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg">
            <StyledPath d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"/>
        </SVGContainer>
    );
}

const StyledPath = styled(Path)``;

const SVGContainer = styled(SVG)``;
export default ArrowDownIcon;