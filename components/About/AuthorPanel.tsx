import styled from "styled-components";
import { cardStyle, cssQueries } from "styles/utils";

const PanelContainer = styled.div`
  text-align: center;
  padding-top: 1rem !important;

  & > * {
    margin: 1rem;
  }

  @media ${cssQueries.mobile} {
    padding: 1rem 0 !important;
  }
`;

const AuthorCard = styled.div`
  ${cardStyle}
  filter: none;
  border: 1px solid var(--default3);
  box-sizing: border-box;

  &:hover {
    transform: none;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #2c273a;
  }
`;

export const AuthorPanel = () => (
  <PanelContainer>
    <h4>Qui est derrière ce site ?</h4>
    <AuthorCard>Tixlegeek, blabla de Tix</AuthorCard>
    <AuthorCard>
      Zoé Cadé (Downdusky), développeuse web et streameuse sur Twitch.tv
    </AuthorCard>
  </PanelContainer>
);
