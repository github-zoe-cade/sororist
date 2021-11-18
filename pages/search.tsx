import { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "next/router";
import Link from "next/link";

import { LinkAsButton } from "../components/basics/LinkAsButton";
import { Layout } from "../components/Layout";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileCardsContainer } from "../components/ProfileCard/ProfileCardsContainer";
import { Filters } from "../components/Search/Filters";
import { getMatchingProfiles } from "../lib/profiles";
import {
  cardStyle,
  paddingSection,
  paddingBottomLastSection,
} from "../styles/utils";

const Title = styled.h2`
  padding: 2rem ${({ theme }) => theme.spacings.mainHorizontal};
`;

const ResultsSection = styled.div`
  text-align: center;
  ${paddingSection}
  ${paddingBottomLastSection}
`;

const NoResults = styled.div`
  margin-top: 5rem;
  ${cardStyle}
  ${paddingSection}
`;

const Search = ({ router }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    // Send filters to API
    const res = getMatchingProfiles(router.query);
    setResults(res);
  }, [router]);

  return (
    <Layout>
      <Title>Explorez les profils d'expert·e·s</Title>
      <Filters router={router} />

      <ResultsSection>
        {results.length > 0 && (
          <>
            <ProfileCardsContainer>
              {results.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
              ))}
            </ProfileCardsContainer>
            <LinkAsButton text="Voir plus" href="/search" />
          </>
        )}

        {results.length === 0 && (
          <NoResults>
            <h2>Pas de résultat 😭</h2>
            <LinkAsButton text="Enlever les filtres" href="/search" />
          </NoResults>
        )}
      </ResultsSection>
    </Layout>
  );
};

export default withRouter(Search);
