import styled from "styled-components";
import Image from "next/image";

import { LinkAsButton } from "../basics/LinkAsButton";
import { cssQueries } from "../../styles/utils";

const HeaderContainer = styled.header`
  margin: ${({ theme }) => `4rem ${theme.spacing.mainHorizontal}`};

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

const ImageContainer = styled.div`
  margin: "auto";

  @media ${cssQueries.mobile} {
    margin-top: 2rem;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <div>
      <h1>Découvrez les femmes de la tech</h1>
      <Subtitle>
        Ces femmes et personnes non binaires sont créateur·ices d'idées et
        d'opinions sur la tech. Blabla à trouver
      </Subtitle>
      <LinkAsButton href="/search" text="Explorer" />
    </div>
    <ImageContainer>
      <Image
        src="/images/header-picture.png"
        alt=""
        width={1000}
        height={670}
      />
    </ImageContainer>
  </HeaderContainer>
);
