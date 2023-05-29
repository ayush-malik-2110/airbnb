import styled, {css} from 'styled-components';
import {Div} from "../../Typography/Typography";

export type HeaderProps = {
    children?: JSX.Element;
};
const Header = ({children }: HeaderProps): JSX.Element => {
    return (
        <HeaderWrapperContainer>
            {children}
        </HeaderWrapperContainer>
    );
};
const HeaderWrapperContainer = styled(Div)`
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  width: 100%;
`;


export default Header;