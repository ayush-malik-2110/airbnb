import styled from "styled-components";

import SideNavLink, {
    StyledNavLinkIconContainer,
    StyledSideNabAnimationWrapper
} from "./SideNavLink/SideNavLink";
import Icons from '../../Icons';
import {useContext} from "react";
import {AppContext} from "../../providers/AppProvider/AppContext";
import {Div} from "../../Typography/Typography";

export type SideNaveProps = {
    title: string;
    icon: string;
}
const SideNav = () => {
    const { appData = {} } = useContext(AppContext);
    const { sideNav = [], activeSideNav } = appData;
    return (
        <StyledSideNavContainer>
            <StyledSideNavContent>
                {sideNav.map(({title, icon}: SideNaveProps) => (
                    <SideNavLink key={title} isActive={title === activeSideNav} title={title} icon={Icons[icon]}/>
                ))}
            </StyledSideNavContent>
        </StyledSideNavContainer>
    );
}

const StyledSideNavContent = styled(Div)`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 16px 0;
  &:hover ${StyledSideNabAnimationWrapper} {
    display: block;
  }
`;

const StyledSideNavContainer = styled(Div)`
  height: 100%;
  border-bottom-width: 0;
  border-color: rgba(17, 17, 17, 0.1);
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 0;
  margin: 2px;

  &:hover ${StyledNavLinkIconContainer} {
    display: block;
    padding: 8px 10px 8px 32px;
  }
`;
export default SideNav;