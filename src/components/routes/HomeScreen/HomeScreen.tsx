
import styled from 'styled-components';

import {Stays} from "./HomeScreenComponents/Stays/Stays";
import StaysHeader from "./HomeScreenComponents/Stays/StaysHeader/StaysHeader";
import HomeScreenRouteHeader from "./HomeScreenComponents/HomeScreenHeader/HomeScreenRouteHeader";
import {Div} from "../../Typography/Typography";

export const HomeScreen = (): JSX.Element => {
    return (
        <HomeScreenWrapperContainer>
            <HomeScreenRouteHeader />
            <StaysHeader />
            <Stays />
        </HomeScreenWrapperContainer>
    );
};

const HomeScreenWrapperContainer = styled(Div)`
  width: 100%;
  height: 100%;
`;