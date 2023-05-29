import styled from "styled-components";

import {Div, H1} from "../../../../../Typography/Typography";

export type StayTitleProps = {
    name?: string;
}
const StayTitle = ({ name }: StayTitleProps) : JSX.Element => (
    <StyledStayNameContainer>
        <StyledStayName>
            {name}
        </StyledStayName>
    </StyledStayNameContainer>
);

const StyledStayNameContainer = styled(Div)`
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const StyledStayName = styled(H1)`
  font-weight: 500;
  color: rgb(17, 17, 17);
  font-size: 18px;
  line-height: 24px;
`;
export default StayTitle;