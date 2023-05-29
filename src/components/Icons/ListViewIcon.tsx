import styled from "styled-components";
import {Grouping, Path, SVG} from "../Typography/Typography";

const ListViewIcon = () => {
    return (
        <SVGContainer viewBox="0 -3 21 21" xmlns="http://www.w3.org/2000/svg">
            <StyledGrouping stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <StyledGrouping transform="translate(-179.000000, -322.000000)" fill="#000000">
                    <StyledGrouping transform="translate(56.000000, 160.000000)">
                        <StyledPath
                            d="M124.575,174 C123.7056,174 123,174.672 123,175.5 C123,176.328 123.7056,177 124.575,177 C125.4444,177 126.15,176.328 126.15,175.5 C126.15,174.672 125.4444,174 124.575,174 L124.575,174 Z M128.25,177 L144,177 L144,175 L128.25,175 L128.25,177 Z M124.575,168 C123.7056,168 123,168.672 123,169.5 C123,170.328 123.7056,171 124.575,171 C125.4444,171 126.15,170.328 126.15,169.5 C126.15,168.672 125.4444,168 124.575,168 L124.575,168 Z M128.25,171 L144,171 L144,169 L128.25,169 L128.25,171 Z M124.575,162 C123.7056,162 123,162.672 123,163.5 C123,164.328 123.7056,165 124.575,165 C125.4444,165 126.15,164.328 126.15,163.5 C126.15,162.672 125.4444,162 124.575,162 L124.575,162 Z M128.25,165 L144,165 L144,163 L128.25,163 L128.25,165 Z">
                        </StyledPath>
                    </StyledGrouping>
                </StyledGrouping>
            </StyledGrouping>
        </SVGContainer>
    );
}

const StyledGrouping = styled(Grouping)``;

const StyledPath = styled(Path)``;

const SVGContainer = styled(SVG)``;

export default ListViewIcon;