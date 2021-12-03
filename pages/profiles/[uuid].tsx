import {
  getAllProfilesUuid,
  getProfile,
  getSimilarProfiles,
  ProfileType,
} from "lib/profiles";

import { Layout } from "components/Layout";
import { ThemeSection } from "components/common/ThemeSection";


import { BackButton } from "components/Profile/BackButton";
import { ProfilePanel } from "components/Profile/ProfilePanel";
import { SimilarPanel } from "components/Profile/SimilarPanel";
import { TwoPanelsLayout } from "components/basics/layouts/TwoPanelsLayout";

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
      <BackButton />

      <TwoPanelsLayout>
        <ProfilePanel profile={profile} />
        <SimilarPanel similarProfiles={similarProfiles} />
      </TwoPanelsLayout>

      <ThemeSection themes={profile.themes.map((x) => x.name).slice(0, 6)} />
    </Layout>
  );
}
