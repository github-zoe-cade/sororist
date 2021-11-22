import styled from "styled-components";
import { ProfileType } from "lib/profiles";

import { cardStyle, cssQueries } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { ProfileCard } from "components/ProfileCard";

const PanelContainer = styled.div`
  ${cardStyle}
  text-align: center;
  padding: 0 2rem 2rem;

  & > div {
    margin-top: 2rem;
  }

  @media ${cssQueries.mobile} {
    margin-top: 2rem;
    padding: 1rem 0;
  }
`;

const StyledProfileCard = styled(ProfileCard)`
  filter: none;
  border: 1px solid lightgray;

  @media ${cssQueries.mobile} {
    margin: 1rem auto;
  }
`

type SimilarPanel = {
  similarProfiles: ProfileType[];
};

export const SimilarPanel = ({ similarProfiles }: SimilarPanel) => (
  <PanelContainer>
    <h4>Profils similaires</h4>
    {similarProfiles.map((profile: ProfileType, index: number) => (
      <StyledProfileCard key={index} profile={profile} />
    ))}
    <LinkAsButton href="/search" text="Voir plus" />
  </PanelContainer>
);
