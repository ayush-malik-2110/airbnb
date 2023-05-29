import styled from "styled-components";
import StayCard, {StayCardProps} from "../../../../common/StayCard/StayCard";
import SideNav from "../../../../common/SideNav/SideNav";
import {useContext} from "react";
import {AppContext} from "../../../../providers/AppProvider/AppContext";
import {Div} from "../../../../Typography/Typography";

export const Stays = (): JSX.Element => {
    const { appData = {} } = useContext(AppContext);
    const { staysList = [] } = appData;
    return (
        <StyledStaysContainer>
            <SideNav />
            <StyledStayContent>
                {staysList.map((stayData: StayCardProps) => (
                    <StayCard key={stayData.name} {...stayData} />
                ))}
            </StyledStayContent>
        </StyledStaysContainer>
    );
}

const StyledStayContent = styled(Div)`
  position: relative;
  display: grid;
  flex: 1 0 0;
  gap: 24px;
  grid-auto-rows: minmax(0px, 1fr);
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: repeat(2, minmax(0px, 1fr));
  height: 100%;
  justify-content: center;
  padding: 32px;
  width: 1px;
`;
const StyledStaysContainer = styled(Div)`
  width: 100%;
  display: flex;
  height: 845px;
`;

