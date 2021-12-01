import styled from "styled-components";
import { ProfileType } from "lib/profiles";

import { cssQueries } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { ProfileCard } from "components/ProfileCard";

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

const StyledProfileCard = styled(ProfileCard)`
  filter: none;
  border: 1px solid lightgray;
  box-sizing: border-box;
`;

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
