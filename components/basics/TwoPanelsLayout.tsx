import styled from "styled-components";
import {
  cardStyle,
  cssQueries,
  marginSection,
  paddingBottomLastSection,
} from "styles/utils";

export const TwoPanelsLayout = styled.div`
  ${marginSection}
  margin-top: 2rem;
  ${paddingBottomLastSection}

  @media ${cssQueries.desktop} {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 2rem;
  }

  & > div {
    ${cardStyle}
    padding: 4rem;

    @media ${cssQueries.mobile} {
      padding: 2rem;
    }
  }

  & > div:nth-child(2) {
    padding: 4rem 2rem;

    @media ${cssQueries.mobile} {
      margin-top: 2rem;
    }
  }
`;
