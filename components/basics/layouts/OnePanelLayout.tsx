import styled from "styled-components";
import {
  cardStyle,
  cssQueries,
  marginSection,
  paddingBottomLastSection,
} from "styles/utils";

export const OnePanelLayout = styled.div`
  ${marginSection}
  ${cardStyle}
  ${paddingBottomLastSection}
  padding: 4rem;

  @media ${cssQueries.mobile} {
    padding: 2rem;
  }
`;
