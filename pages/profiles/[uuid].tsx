import styled from "styled-components";

import {
  getAllProfilesUuid,
  getProfile,
  getSimilarProfiles,
  ProfileType,
} from "lib/profiles";

import {
  marginSection,
  paddingBottomLastSection,
} from "styles/utils";

import { Layout } from "components/Layout";

import { ThemeSection } from "components/common/ThemeSection";


import { BackButton } from "./BackButton";
import { ProfilePanel } from "./ProfilePanel";
import { SimilarPanel } from "./SimilarPanel";

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

const ProfileLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  ${marginSection}
  margin-top: 0;
  ${paddingBottomLastSection}
`;

type ProfileProps = {
  profile: ProfileType;
  similarProfiles: ProfileType[];
};

export default function Profile({ profile, similarProfiles }: ProfileProps) {
  return (
    <Layout>
      <BackButton />

      <ProfileLayout>
        <ProfilePanel profile={profile} />
        <SimilarPanel similarProfiles={similarProfiles} />
      </ProfileLayout>

      <ThemeSection themes={profile.themes.map((x) => x.name).slice(0, 6)} />
    </Layout>
  );
}
