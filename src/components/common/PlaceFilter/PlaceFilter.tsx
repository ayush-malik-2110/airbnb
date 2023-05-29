import styled from "styled-components";
import CheckboxInput from "../CheckBoxInput/CheckboxInput";
import {Div, Paragraph} from "../../Typography/Typography";


const PlaceFilter = () => {
    return (
        <StyledPlaceFilter>
            <StyledPlaceTopContainer>
                <StyledPlaceTitleContainer>
                    <StyledPriceRangeTitle>
                        Type of place
                    </StyledPriceRangeTitle>
                </StyledPlaceTitleContainer>
            </StyledPlaceTopContainer>
            <StyledPlaceBottomContainer>
                <StyledPlaceOptionContainer>
                    <CheckboxInput/>
                    <StyledOptionLabelContainer>
                        <StyledPlaceOptionTitleContainer>
                            <StyledPlaceTitleContainer>
                                <StyledPlaceOptionTitle>
                                    Entire Place
                                </StyledPlaceOptionTitle>
                            </StyledPlaceTitleContainer>
                        </StyledPlaceOptionTitleContainer>
                        <StyledPlaceOptionDescriptionContainer>
                            <StyledPlaceOptionDescription>
                                A place all to your self
                            </StyledPlaceOptionDescription>
                        </StyledPlaceOptionDescriptionContainer>
                    </StyledOptionLabelContainer>
                </StyledPlaceOptionContainer>
                <StyledPlaceOptionContainer>
                    <CheckboxInput/>
                    <StyledOptionLabelContainer>
                        <StyledPlaceOptionTitleContainer>
                            <StyledPlaceTitleContainer>
                                <StyledPlaceOptionTitle>
                                    Entire Place
                                </StyledPlaceOptionTitle>
                            </StyledPlaceTitleContainer>
                        </StyledPlaceOptionTitleContainer>
                        <StyledPlaceOptionDescriptionContainer>
                            <StyledPlaceOptionDescription>
                                A place all to your self
                            </StyledPlaceOptionDescription>
                        </StyledPlaceOptionDescriptionContainer>
                    </StyledOptionLabelContainer>
                </StyledPlaceOptionContainer>
            </StyledPlaceBottomContainer>
        </StyledPlaceFilter>
    );
}


const StyledOptionLabelContainer = styled(Div)``;

const StyledPlaceOptionContainer = styled(Div)`
  display: flex;
  width: 100%;
  gap: 12px;
  margin: 24px 0;
`;


const StyledPlaceOptionTitleContainer = styled(Div)`
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;
const StyledPlaceOptionTitle = styled(Paragraph)`
  color: rgb(17, 17, 17);
  line-height: 20px;
  font-size: 16px;
`;

const StyledPlaceOptionDescriptionContainer = styled(Div)`
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;
const StyledPlaceOptionDescription = styled(Paragraph)`
  color: rgb(113, 113, 113);
  font-size: 14px;
  line-height: 20px;
`;

const StyledPlaceBottomContainer = styled(Div)``;
const StyledPlaceTopContainer = styled(Div)`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;
const StyledPlaceTitleContainer = styled(Div)`
  width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const StyledPriceRangeTitle = styled(Paragraph)`
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: rgb(17, 17, 17);
  font-size: 18px;
  line-height: 24px;
`;


const StyledPlaceFilter = styled(Div)``;

export default PlaceFilter;