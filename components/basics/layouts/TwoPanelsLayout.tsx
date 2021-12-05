import styled from "styled-components";
import {
  cardStyle,
  cssQueries,
  marginSection,
  paddingBottomLastSection,
} from "styles/utils";

export const TwoPanelsLayout = styled.div`
  margin: 1rem .5rem;
  ${paddingBottomLastSection}

  @media ${cssQueries.desktop} {
    ${marginSection}
    margin-top: 2rem;
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

    @media ${cssQueries.large} {
      padding: 12%;
    }
  }

  & > div:nth-child(2) {
    padding: 4rem 2rem;
    height: fit-content;

    @media ${cssQueries.mobile} {
      margin-top: 2rem;
    }
  }
`;
