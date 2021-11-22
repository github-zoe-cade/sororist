import styled from "styled-components";
import { ProfileType } from "lib/profiles";

import { cardStyle } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { ProfileCardsContainer } from "components/common/ProfileCardsContainer";
import { ProfileCard } from "components/ProfileCard";

const PanelContainer = styled.div`
  ${cardStyle}
  text-align: center;
  padding: 0 2rem 2rem;

  & > * {
    margin-top: 2rem;
  }
`;

const StyledProfileCard = styled(ProfileCard)`
  filter: none;
  border: 1px solid lightgray;
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
