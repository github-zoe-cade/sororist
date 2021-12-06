import {
  getAllProfilesUuid,
  getProfile,
  getSimilarProfiles,
  ProfileType,
} from "lib/profiles";

import { Layout } from "components/Layout";
import { ThemeSection } from "components/common/ThemeSection";


import styled from "styled-components";
import { cssQueries, marginElement } from "styles/utils";

import { BackButton } from "components/Profile/BackButton";
import { ProfilePanel } from "components/Profile/ProfilePanel";
import { SimilarPanel } from "components/Profile/SimilarPanel";
import { TwoPanelsLayout } from "components/basics/layouts/TwoPanelsLayout";

const StyledBackButton = styled(BackButton)`
  ${marginElement}

  @media ${cssQueries.large} {
    margin-top: 1rem;
  }
`

export const getStaticProps = async ({ params }) => {
  const profile = getProfile(params.uuid);
  const similarProfiles = getSimilarProfiles(params.uuid);
  return {
    props: {
      profile,
      similarProfiles,
    },
    revalidate: 7200,
  };
};

export const getStaticPaths = async () => {
  const uuids = getAllProfilesUuid();
  const paths = uuids.map((uuid) => ({ params: { uuid } }));

  return { paths, fallback: "blocking" };
};

type ProfileProps = {
  profile: ProfileType;
  similarProfiles: ProfileType[];
};

export default function Profile({ profile, similarProfiles }: ProfileProps) {
  return (
    <Layout>
      <StyledBackButton fromPage="search" />

      <TwoPanelsLayout>
        <ProfilePanel profile={profile} />
        <SimilarPanel similarProfiles={similarProfiles} />
      </TwoPanelsLayout>

      <ThemeSection themes={profile.themes.map((x) => x.name).slice(0, 6)} />
    </Layout>
  );
}
