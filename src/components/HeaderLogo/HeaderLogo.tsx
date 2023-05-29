import styled from 'styled-components';
import {AirbnbLogoIcon} from "../Icons/AirbnbLogoIcon";
import {Div} from "../Typography/Typography";

export type HeaderLogoProps = {
	show?: boolean;
	height?: string;
	width?: string;
};
export const HeaderLogo = ({ show = true, height, width }: HeaderLogoProps): JSX.Element =>
	show ? (
		<HeaderLogoContainer>
			<StyledAirbnbLogoIconContainer>
				<AirbnbLogoIcon />
			</StyledAirbnbLogoIconContainer>
		</HeaderLogoContainer>
	) : (
		<></>
	);

const HeaderLogoContainer = styled(Div)``;

const StyledAirbnbLogoIconContainer = styled(Div)`
    height: 100%;
  width: 100%;
`;
