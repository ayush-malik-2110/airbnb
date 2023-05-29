import styled from "styled-components";
import {Grouping, Path, SVG} from "../Typography/Typography";

const IconDoor = () => {
    return (
        <SVGContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <StyledGrouping>
                <StyledGrouping>
                    <StyledPath d="M94.789,0v512h322.422V0H94.789z M386.794,481.583H125.206V30.417h261.588V481.583z"/>
                </StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
                <StyledGrouping>
                    <StyledPath d="M271.209,50.695h-30.417h-95.307v95.307v30.417v95.307h95.307h30.417h95.307V176.42v-30.417V50.695H271.209z
                    M240.791,241.309h-64.89v-64.89h64.89V241.309z M240.791,146.002h-64.89v-64.89h64.89V146.002z M336.099,241.309h-64.89v-64.89
                    h64.89V241.309z M336.099,146.002h-64.89v-64.89h64.89V146.002z"/>
                </StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
                <StyledGrouping>
                    <rect x="145.485" y="292.005" width="62.264" height="30.417"/>
                </StyledGrouping>
            </StyledGrouping>
        </SVGContainer>
    );
}

const StyledGrouping = styled(Grouping)``;

const StyledPath = styled(Path)``;

const SVGContainer = styled(SVG)``;
export default IconDoor;