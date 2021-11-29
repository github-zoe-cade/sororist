import styled from "styled-components";

import { cssQueries, marginSection } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { VoronoiDecoration } from "components/basics/VoronoiDecoration";

const HeaderContainer = styled.header`
  ${marginSection}

  @media ${cssQueries.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.4;
  margin-bottom: 3rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h1>Découvrez les femmes de la tech</h1>
        <Subtitle>
          Ces femmes et personnes non binaires sont créateur·ices d'idées et
          d'opinions sur la tech. Blabla à trouver
        </Subtitle>
        <LinkAsButton href="/search" text="Explorer" />
      </div>

      <VoronoiDecoration
        image="/images/cover.jpg"
        height={500}
        width={600}
        pictureHeight={260}
        pictureWidth={400}
      />
    </HeaderContainer>
  );
};
