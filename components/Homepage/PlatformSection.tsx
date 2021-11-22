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
  background-color: ${({ theme }) => theme.colors.background4};
  color: ${({ theme }) => theme.colors.default4};

  & > div {
    z-index: 1;
  }

  @media ${cssQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

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
      {/* <Image src="/images/texture.jpeg" layout="fill" objectFit="cover" /> */}
      <WordingContainer>
        <div>
          <h2>
            Trouvez des personnes inspirantes à suivre et à inviter en
            conférences
          </h2>
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
