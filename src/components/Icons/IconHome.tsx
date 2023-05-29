import styled from "styled-components";
import {Path, SVG} from "../Typography/Typography";

const IconHome = () => (
    (<SVGContainer viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <StyledPath
            d="M5.77778 10.2222V18C5.77778 19.1046 6.67321 20 7.77778 20H12M5.77778 10.2222L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.5 9.5M5.77778 10.2222L4 12M18.2222 10.2222V18C18.2222 19.1046 17.3268 20 16.2222 20H12M18.2222 10.2222L20 12M18.2222 10.2222L17.5 9.5M17.5 9.5V6M12 20V15"
            stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SVGContainer>)
);

const StyledPath = styled(Path)``;

const SVGContainer = styled(SVG)``;

export default IconHome;