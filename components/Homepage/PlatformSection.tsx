import styled from "styled-components";

import { cssQueries, paddingSection } from "styles/utils";
import { PlatformCard } from "./PlatformCard";


const PlatformSectionContainer = styled.section`
  position: relative;
`;

const WordingContainer = styled.div`
  display: grid;
  ${paddingSection}
  background-image: url('/images/circuit-board.svg');
  background-color: var(--background4);
  color: var(--default4);

  & > div {
    z-index: 1;
  }

  @media ${cssQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }


  /* @media (prefers-color-scheme: dark) {
    background-color: var(--background1);
    color: var(--default2);
  } */
`;

const Title = styled.h2`
  color: var(--default4);

  /* @media (prefers-color-scheme: dark) {
    color: var(--default1);
  } */
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
`;

const CardContainer = styled.div`
  margin: auto 0;

  & > :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const PlatformSection = ({ platforms }: { platforms: string[] }) => {
  return (
    <PlatformSectionContainer>
      <WordingContainer>
        <div>
          <Title>
            Trouvez des personnes inspirantes à suivre et à inviter en
            conférences
          </Title>
          <Subtitle>
            Ecoutez et lisez les opinions de celleux qui font la tech, via vos
            plateformes de prédilection. Likez, relayez, donnez la lumière à ces
            profiles !
          </Subtitle>
        </div>
        <CardContainer>
          {platforms.map((platform: string, index: number) => (
            <PlatformCard key={index} platform={platform} index={index} />
          ))}
        </CardContainer>
      </WordingContainer>
    </PlatformSectionContainer>
  );
};
