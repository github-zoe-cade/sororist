import styled from "styled-components";
import Head from "next/head";
import { getLatestProfiles, ProfileType } from "lib/profiles";

import { paddingSection, paddingBottomLastSection } from "styles/utils";

import { ProfileCard } from "components/ProfileCard";
import { LinkAsButton } from "components/basics/LinkAsButton";
import { Layout } from "components/Layout";
import { ProfileCardsContainer } from "components/common/ProfileCardsContainer";

import { Header } from "components/Homepage/Header";
import { ThemeSection } from "components/common/ThemeSection";
import { PlatformSection } from "components/Homepage/PlatformSection";

export async function getStaticProps() {
  // do some API fetching
  const latestProfiles = getLatestProfiles();
  const mostPopularThemes = [
    "Développement",
    "Data",
    "Cybersécurité",
    "Electronique",
    "DevOps",
    "Acccessibilité",
  ];

  return {
    props: {
      themes: mostPopularThemes,
      platforms: ["Tiktok", "Youtube", "Twitter"],
      latestProfiles,
    },
  };
}

const LatestSection = styled.div`
  text-align: center;
  ${paddingSection}
  ${paddingBottomLastSection}
`;

type HomeProps = {
  themes: string[];
  platforms: string[];
  latestProfiles: ProfileType[];
};

export default function Home({ themes, platforms, latestProfiles }: HomeProps) {
  return (
    <>
      <Head>
        <title>Sororist</title>
      </Head>
      <Layout>
        <Header />
        <ThemeSection themes={themes} />
        <PlatformSection platforms={platforms} />

        <LatestSection>
          <h3 style={{color: "var(--default2)"}}>Derniers profils ajoutés</h3>
          <ProfileCardsContainer>
            {latestProfiles.map((profile: ProfileType, index: number) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </ProfileCardsContainer>
          <LinkAsButton href="/search" text="Découvrir tous les profils" />
        </LatestSection>
      </Layout>
    </>
  );
}
