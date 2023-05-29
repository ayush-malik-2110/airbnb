import {useContext} from "react";
import styled from "styled-components";

import Header from "../../../../common/Header/Header";
import {AirbnbLogoIcon} from "../../../../Icons/AirbnbLogoIcon";
import HeaderProfile from "./HeaderProfile";
import {Div} from "../../../../Typography/Typography";
import {AppContext} from "../../../../providers/AppProvider/AppContext";
import NavButton from "./NavButton";

const HomeScreenRouteHeader = () => {
    const { appData } = useContext(AppContext);
    const { activeTopNav = '', topNavList = [] } = appData;
    return (
        <Header>
            <StyledHeaderContent>
                <StyledLogoWrapper>
                    <AirbnbLogoIcon/>
                </StyledLogoWrapper>
                <StyledHeaderNavigationContainer>
                    {
                        topNavList.map(({title}: {title: string}) => (
                            <NavButton
                                key={`nav-${title}`}
                                isActive={activeTopNav === title}
                                title={title}
                            />
                        ))
                    }
                </StyledHeaderNavigationContainer>
                <HeaderProfile/>
            </StyledHeaderContent>
        </Header>
    );
}

export default HomeScreenRouteHeader;


const StyledHeaderNavigationContainer = styled(Div)`
  place-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 40px;
  height: 72px;
  overflow: visible;
  padding: 0;
  position: relative;
  width: min-content;
`;

const StyledLogoWrapper = styled(Div)`
  image-rendering: pixelated;
  background-size: 100% 100%;
  opacity: 1;
  flex: 0 0 auto;
  height: 32px;
  position: relative;
  width: 102px;
`;

const StyledHeaderContent = styled(Div)`
  background-color: rgb(255, 255, 255);
  width: 100%;
  opacity: 1;
  place-content: center space-between;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 72px;
  overflow: visible;
  padding: 16px 32px;
  position: relative;

  path {
    fill: rgb(212, 59, 81);
  }
`;