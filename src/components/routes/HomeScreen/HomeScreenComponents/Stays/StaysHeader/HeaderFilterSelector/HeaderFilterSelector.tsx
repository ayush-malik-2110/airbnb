import styled from "styled-components";

import LocationDropdown from "../../../../../../common/LoctionDropdown/LocationDropdown";
import DatePicker from "../../../../../../common/DatePicker/DatePicker";
import GuestSelector from "../../../../../../common/GuestSelector/GuestSelector";
import {Div} from "../../../../../../Typography/Typography";


const HeaderFilterSelector = () => {
    return (
        <StaysHeaderCenterContainer >
            <LocationDropdown />
            <DatePicker />
            <GuestSelector />
        </StaysHeaderCenterContainer>
    )
}

const StaysHeaderCenterContainer = styled(Div)`
  place-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 12px;
  height: min-content;
  overflow: visible;
  padding: 0;
  position: relative;
  width: min-content;
`;
export default HeaderFilterSelector;

