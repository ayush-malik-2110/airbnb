import styled from "styled-components";
import { useState } from "react";

import HeaderFilterSelector from "./HeaderFilterSelector/HeaderFilterSelector";
import ToggleGridView from "../../../../../common/ToggleGridView/ToggleGridView";
import Filter from "../../../../../common/Filter/Filter";
import Modal from "../../../../../common/Modal/Modal";
import FilterButton from "../../../../../common/FilterButton/FilterButton";
import {Div} from "../../../../../Typography/Typography";

const StaysHeader = () => {
    const [showModal, setShowModal] = useState(false);

    const renderFilterModal = () => {
        return (
            <Modal
                top={'144px'}
                width={showModal ? '400px' : '0'}
                onCloseModal={() => setShowModal(false)}
                showModel={showModal}
            >
                <Filter/>
            </Modal>
        );
    }
    return (
        <StyledStaysHeaderContainer>
            <StyledStaysHeaderContent>
                <ToggleGridView/>
                <HeaderFilterSelector/>
                <FilterButton onClick={() => {
                    setShowModal(!showModal);
                }}/>
            </StyledStaysHeaderContent>
            {renderFilterModal()}
        </StyledStaysHeaderContainer>
    );
}

const StyledStaysHeaderContent = styled(Div)`
  border-bottom-width: 1px;
  border-color: rgba(17, 17, 17, 0.1);
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-top-width: 0;
  place-content: center space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  height: 72px;
  overflow: visible;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  width: 100%;
  will-change: transform;
`;

const StyledStaysHeaderContainer = styled(Div)`
  background: gray;
  width: 100%;
`;
export default StaysHeader;