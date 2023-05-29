import styled from "styled-components";

import {Div, Paragraph} from "../../../../../Typography/Typography";


export type StayLocationProps = {
    location?: string;
};
const StayLocation = ({location}: StayLocationProps) : JSX.Element=> (
    <StyledStayLocationContainer>
        <StyledStayLocation>
            {location}
        </StyledStayLocation>
    </StyledStayLocationContainer>
)

const StyledStayLocationContainer = styled(Div)`
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const StyledStayLocation = styled(Paragraph)`
  font-weight: 400;
  color: #717171;
  line-height: 20px;
`;
export default StayLocation;