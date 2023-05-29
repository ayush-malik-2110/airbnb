import styled, {css} from 'styled-components';
import {createPortal} from 'react-dom';
import {useCallback, useEffect} from "react";
import {Div} from "../../Typography/Typography";


export type ModalProps = {
    children?: JSX.Element;
    onCloseModal: () => void;
    top: string;
    width: string;
    showModel: boolean,
};

const Modal = ({children, top, width, onCloseModal, showModel}: ModalProps): JSX.Element => {

    const handleUserKeyPress = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseModal()
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
    }, [handleUserKeyPress]);

    return (
        <>
            {createPortal(
                <StyledModal top={top} width={width} showModal={showModel}>
                    {children}
                    {showModel && <StyledOverlay onClick={onCloseModal} />}
                </StyledModal>,
                document.body
            )}
        </>
    )
        ;
};

const StyledOverlay = styled(Div)`
  position: fixed;
  top:0;
  left: 0;  
  //background: black;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const StyledModal = styled(Div)<{top: string; width: string; showModal: boolean;}>(
    ({top, width, showModal}) => css`
  z-index: 4;
  position: fixed;
  top: ${top};
  width: ${width};
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.12) -8px 0px 40px 0px;
  background-color: rgb(255, 255, 255);
  right: 0;
  border-bottom-width: 0;
  border-color: rgba(17, 17, 17, 0.1);
  border-left-width: 1px;
  border-right-width: 0;
  border-style: solid;
  border-top-width: 0;
  transition: 0.25s;
  transition-timing-function: ease-out;
  //transform: translateY(0);
  opacity: 1;
  animation: ${showModal ? 'move-in .5s ease-out' : 'move-out .5s ease-out'};
  @keyframes move-out {
    from {
      width: ${width};
    }
    to {
      width: 0;
    }
  }
  @keyframes move-in {
    from {
      width: 0;
    }
    to {
      width: ${width};
    }
  }

`);

export default Modal;