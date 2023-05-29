import styled from "styled-components";

import StayView from "./StayView/StayView";
import StayDetails from "./StayDetails/StayDetails";
import Modal from "../Modal/Modal";
import {useState} from "react";
import StayProfile from './StayProfile/StayProfile';
import {Div} from "../../Typography/Typography";

export type StayCardProps = {
    name?: string;
    location?: string;
    price?: string;
    priceType?: string;
    rating?: string;
    imgURL: string;
}
const StayCard = (props: StayCardProps) => {
    const [showModal, setShowModal] = useState(false);
    const renderStayDetails = () => {
        return (
            <Modal
                top={'0px'}
                width={showModal ? '1000px' : '0'}
                onCloseModal={() => setShowModal(false)}
                showModel={showModal}
            >
                <StayProfile />
            </Modal>
        );
    }
    return (
        <StyledStay onClick={() => setShowModal(true)}>
            <StayView imageURL={props.imgURL} />
            <StayDetails {...props} />
        </StyledStay>
    )
}


const StyledStay = styled(Div)`
  width: 100%;
  border-bottom-width: 1px;
  border-color: rgba(17, 17, 17, 0.1);
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  border-radius: 20px;
  box-shadow: none;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) -2px 1px 10px 5px;
    cursor: pointer;
  }
`;

export default StayCard;