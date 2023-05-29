import styled from "styled-components";
import {Grouping, Path, SVG} from "../Typography/Typography";

const IconCactus = () => (
    <SVGContainer version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
                <StyledGrouping>
                </StyledGrouping>
                <StyledGrouping>
                    <StyledGrouping>
                        <StyledGrouping>
                        </StyledGrouping>
                        <StyledGrouping>
                        </StyledGrouping>
                        <StyledGrouping>
                        </StyledGrouping>
                        <StyledGrouping>
                        </StyledGrouping>
                        <StyledGrouping>
                        </StyledGrouping>
                    </StyledGrouping>
                </StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
                <StyledGrouping>
                </StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
                <StyledGrouping>
                    <StyledGrouping>
                        <StyledGrouping>
                        </StyledGrouping>
                        <StyledGrouping>
                            <StyledGrouping>
                            </StyledGrouping>
                            <StyledGrouping>
                                <StyledGrouping>
                                </StyledGrouping>
                                <StyledGrouping>
                                </StyledGrouping>
                            </StyledGrouping>
                        </StyledGrouping>
                    </StyledGrouping>
                </StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
            </StyledGrouping>
            <StyledGrouping>
                <StyledGrouping>
                </StyledGrouping>
            </StyledGrouping>
        </StyledGrouping>
        <StyledGrouping>
        </StyledGrouping>
        <StyledGrouping>
            <StyledGrouping>
                <StyledPolygon
                    points="17.5,17.5
			6.5,17.5 6.5,6 9.5,2.5 14.5,2.5 17.5,6 		"/>
                <StyledPolygon
                    points="4,17.5
			20,17.5 18,23.5 6,23.5 		"/>
                <StyledPolyLine
                    points="
			5.625,22.375 8,20 10,22 12,20 14,22 16,20 18.375,22.375 		"/>

                <StyledLine x1="13.5" y1="15.5" x2="13.5" y2="10"/>

                <StyledLine x1="13.5" y1="8" x2="13.5" y2="7.5"/>

                <StyledLine x1="10.5" y1="9.5" x2="10.5" y2="13"/>

                <StyledLine x1="10.5" y1="15" x2="10.5" y2="15.5"/>

                <StyledLine x1="10.5" y1="7" x2="10.5" y2="7.5"/>

                <StyledLine x1="13.5" y1="6" x2="13.5" y2="5.5"/>

                <StyledLine x1="9.5" y1="2.5" x2="9.5" y2="0.5"/>

                <StyledLine x1="6.5" y1="8.5" x2="4.5" y2="8.5"/>

                <StyledLine x1="6.5" y1="11.5" x2="4.5" y2="11.5"/>

                <StyledLine x1="6.5" y1="14.5" x2="4.5" y2="14.5"/>

                <StyledLine x1="6.5" y1="6" x2="5" y2="5"/>

                <StyledLine x1="8.115" y1="4.115" x2="6.5" y2="2.5"/>

                <StyledLine x1="17.5" y1="8.5" x2="19.5" y2="8.5"/>

                <StyledLine x1="17.5" y1="11.5" x2="19.5" y2="11.5"/>

                <StyledLine x1="17.5" y1="14.5" x2="19.5" y2="14.5"/>

                <StyledLine x1="17.5" y1="6" x2="19" y2="5"/>

                <StyledLine x1="15.885" y1="4.115" x2="17.5" y2="2.5"/>

                <StyledLine x1="14.5" y1="2.5" x2="14.5" y2="0.5"/>
            </StyledGrouping>
        </StyledGrouping>
    </SVGContainer>

);

const StyledGrouping = styled(Grouping)``;

const SVGContainer = styled(SVG)``;

const StyledLine = styled.line`
  fill: none;
  stroke: #000000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
`;

const StyledPolygon = styled.polygon`
  fill: none;
  stroke: #000000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
`;

const StyledPolyLine = styled.polyline`
  fill: none;
  stroke: #000000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
`;

export default IconCactus;