import styled from "styled-components";

import { cssQueries, marginSection } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { VoronoiDecoration } from "components/basics/VoronoiDecoration";
import { bounceOnHover, slideDown } from "styles/animations";

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

const TextContainer = styled.div`
  position: relative;
  height: fit-content;
  padding: 2rem 0 0 3rem;

  @media ${cssQueries.large} {
    padding: 10rem 7rem 7rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 3rem;
`;

const DarkThemeBackground = styled.div`
  position: absolute;
  @media (prefers-color-scheme: dark) {
    background-color: var(--background1);
    inset: 0;
    height: calc(100% + 2rem);
    opacity: 0.5;
    z-index: -1;

    @media ${cssQueries.mobile} {
      top: -5rem;
      height: calc(100% + 7rem);
    }
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

const ExploreButton = styled(LinkAsButton)`
  ${bounceOnHover};
`;

const StyledVoronoiDecoration = styled(VoronoiDecoration)`
  ${slideDown}
`;

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <TextContainer>
          <h1>Découvrez les femmes de la tech</h1>
          <Subtitle>
            Ces femmes et personnes non binaires sont créateur·ices d'idées et
            d'opinions sur la tech. Suivez-les sur vos réseaux sociaux favoris
            et donnez-leurs la parole !
          </Subtitle>
          <ExploreButton href="/search" text="Explorer" />
          <DarkThemeBackground />
        </TextContainer>

        <StyledVoronoiDecoration
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
