import React from "react";

import styled, {css} from "styled-components";
import {Div, Paragraph} from "../../../Typography/Typography";

export type SideNavLinkProps = {
    isActive?: boolean;
    title: string;
    icon: React.FunctionComponent;
};

const SideNavLink = ({ isActive, title = '', icon = () => <></> }: SideNavLinkProps) => (
    <StyledNavLink isActive={isActive}>
        <StyledNavLinkIconContainer>
            {icon({})}
        </StyledNavLinkIconContainer>
        <StyledSideNabAnimationWrapper>
            <StyledNavLinkTitleContainer>
                <StyledNavLinkTitle>
                    {title}
                </StyledNavLinkTitle>
            </StyledNavLinkTitleContainer>
        </StyledSideNabAnimationWrapper>
    </StyledNavLink>
);

const StyledNavLink = styled(Div)<{isActive?: boolean}>(
    ({ isActive }) => css`
      border-width: ${isActive ? '0 3px 0 0' : 0};
      width: 100%;
      border-style: solid;
      border-color: rgb(255, 56, 92);
      display: flex;
      align-items: center;
      height: 48px;
    `);

export const StyledSideNabAnimationWrapper = styled(Div)`
  //width: 0;
  overflow: hidden;
  display: none;
  animation: moveIn .5s ease-out;
    @keyframes moveIn {
      0% {
        width: 0;
      }
      100% {
        width: 100px;
      }
`;

const StyledNavLinkTitle = styled(Paragraph)`
  line-height: 20px;
  font-size: 12px;
`;

export const StyledNavLinkTitleContainer = styled(Div)`
  min-width: 100px;
`;

export const StyledNavLinkIconContainer = styled(Div)`
  padding: 8px 25px;

  svg {
    display: block;
    height: 20px;
  }
`;

export default SideNavLink;