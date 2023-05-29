import styled from "styled-components";
import StayTitle from "./StayTitle/StayTitle";
import StayLocation from "./StayLocation/StayLocation";
import {Div} from "../../../../Typography/Typography";

export type StayDescriptionProps = {
    name?: string;
    location?: string;
}
const StayDescription = ({name, location}: StayDescriptionProps): JSX.Element => (
    <StyledStayDescription>
        <StayTitle name={name} />
        <StayLocation location={location} />
    </StyledStayDescription>
);


const StyledStayDescription = styled(Div)`
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
  gap: 8px;
  padding: 0;
  position: relative;
  width: 100%;
`;

export default StayDescription;