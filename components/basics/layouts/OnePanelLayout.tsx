import styled from "styled-components";
import {
  cardStyle,
  cssQueries,
} from "styles/utils";

export const OnePanelLayout = styled.div`
  margin: 4rem 20% 7rem;
  ${cardStyle}
  padding: 4rem;

  & > h3 {
    margin: 0 0 4rem;
  }

  & > h4 {
    color: var(--default1);
  }

  & > p {
    line-height: 1.3rem;
  }

  & > * {
    margin-bottom: 2rem;
  }

  @media ${cssQueries.mobile} {
    padding: 2rem;
    margin: 2rem 1rem 4rem;
  }

  @media ${cssQueries.large} {
    padding: 6rem 10%;
  }
`;
