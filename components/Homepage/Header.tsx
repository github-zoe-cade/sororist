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

  @media ${cssQueries.mobile} {
    margin: 0;
  }

  @media ${cssQueries.large} {
    margin: 4rem 12%;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.4;
  margin-bottom: 3rem;
`;

const TextContainer = styled.div`
  position: relative;
  height: fit-content;
  padding: 3rem 0 0 3rem;

  @media ${cssQueries.large} {
    padding: 10rem 7rem 7rem;
  }
`;

const DarkThemeBackground = styled.div`
  position: absolute;
  @media (prefers-color-scheme: dark) {
    background-color: var(--background1);
    inset: 0;
    height: calc(100% + 2rem);
    opacity: 0.5;
    z-index: -1;

    @media ${cssQueries.desktop} {
      width: 200%;
      padding-bottom: 2rem;
      height: 100%;
    }

    @media ${cssQueries.large} {
      margin-top: 3rem;
      padding-bottom: 0;
      height: 100%;
    }
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <TextContainer>
          <h1>Découvrez les femmes de la tech</h1>
          <Subtitle>
            Ces femmes et personnes non binaires sont créateur·ices d'idées et
            d'opinions sur la tech. Blabla à trouver
          </Subtitle>
          <LinkAsButton href="/search" text="Explorer" />
          <DarkThemeBackground />
        </TextContainer>

        <VoronoiDecoration
          image="/images/cover.jpg"
          height={500}
          width={600}
          pictureHeight={260}
          pictureWidth={400}
        />
      </HeaderContainer>
    </>
  );
};
