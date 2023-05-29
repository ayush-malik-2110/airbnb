import styled, {css} from "styled-components";
import {Div, Paragraph} from "../../../../Typography/Typography";

export type NavButtonProps = {
    title?: string;
    isActive?: boolean;
}

const NavButton = ({ title, isActive }: NavButtonProps): JSX.Element  => {
    return (
        <TopNavButtonContainer>
            <TopNavButtonContent
                isActive={isActive}
            >
                <TopNavButtonText>{title}</TopNavButtonText>
            </TopNavButtonContent>
        </TopNavButtonContainer>
    );
}

export default NavButton;

const TopNavButtonText = styled(Paragraph)`
    font-size: 16px;
  font-weight: 400;
  color: #717171;
`;
const TopNavButtonContainer = styled(Div)`
  height: 100%;
  position: relative;
  display: contents;
`;

const TopNavButtonContent = styled(Div)<NavButtonProps>(
    ({ isActive }) => css`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      position: relative;
      &:after {
        width: 100%;
        border-width: ${isActive ? '0 0 3px 0' : 0};
        border-color: rgb(255, 56, 92);
        border-style: solid;
        content: "";
        height: 100%;
        position: absolute;
        box-sizing: border-box;
        left: 0;
        top: 0;
        border-radius: inherit;
        pointer-events: none;
      }
    `);

