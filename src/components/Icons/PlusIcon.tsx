import styled from "styled-components";
import {Path, SVG} from "../Typography/Typography";

const PlusIcon = () => {
    return (
        <SVGContainer fill="#000000" width="800px" height="800px" viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg">
            <StyledPath d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z"/>
        </SVGContainer>
    );
}

const SVGContainer = styled(SVG)``;

const StyledPath = styled(Path)``;
export default PlusIcon;