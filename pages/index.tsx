import styled from "styled-components";
import Head from "next/head";
import { getLatestProfiles, ProfileType } from "../lib/profiles";

import { Layout } from "../components/Layout";
import { LinkAsButton } from "../components/basics/LinkAsButton";

import { Header } from "../components/Homepage/Header";
import { ThemeSection } from "../components/Homepage/ThemeSection";
import { PlatformSection } from "../components/Homepage/PlatformSection";
import { ProfileCard } from "../components/ProfileCard";


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
  ]

  return {
    props: {
      themes: mostPopularThemes,
      platforms: ["Twitch", "Youtube", "Twitter"],
      latestProfiles,
    },
  };
}

const LatestSection = styled.div`
  text-align: center;
  padding: ${({ theme }) => `3rem ${theme.spacing.mainHorizontal}`};
`;
const ProfileCardsContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

export default function Home({ themes, platforms, latestProfiles }) {
  return (
    <>
      <Head>
        <title>Who's who</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <Header />
        <ThemeSection themes={themes} />
        <PlatformSection platforms={platforms} />

        <LatestSection>
          <h3>Derniers profils ajoutés</h3>
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
