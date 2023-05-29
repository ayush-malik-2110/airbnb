import FilterIcon from "../../Icons/FilterIcon";
import styled from "styled-components";
import {Div} from "../../Typography/Typography";

export type FilterButtonProps = {
    onClick?: () => void;
};
const FilterButton = ({ onClick }: FilterButtonProps) => (
    <StyledFilterButtonContainer onClick={onClick}>
        <StyledFilterIconContainer>
            <FilterIcon />
        </StyledFilterIconContainer>
    </StyledFilterButtonContainer>
);

const StyledFilterIconContainer = styled(Div)`
  background-color: rgb(243, 243, 242);
  border-radius: 8px;
  height: 100%;
  width: 100%;
  opacity: 1;
  place-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  overflow: visible;
  padding: 0;
  position: relative;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledFilterButtonContainer = styled(Div)`
  flex: 0 0 auto;
  height: 48px;
  position: relative;
  width: 48px;
`;

export default FilterButton;