import { useEffect, useState } from "react";
import styled from "styled-components";
import { Router, withRouter } from "next/router";

import { getMatchingProfiles } from "lib/profiles";
import {
  cardStyle,
  paddingSection,
  paddingElement,
  paddingBottomLastSection,
} from "styles/utils";

import { ProfileCard } from "components/ProfileCard";
import { Button } from "components/basics/Button";
import { LinkAsButton } from "components/basics/LinkAsButton";
import { Layout } from "components/Layout";
import { ProfileCardsContainer } from "components/common/ProfileCardsContainer";

import { Filters } from "components/Search/Filters";

const Title = styled.h3`
  ${paddingElement}
`;

const ResultsSection = styled.div`
  text-align: center;
  ${paddingSection}
  ${paddingBottomLastSection}
`;

const NoResults = styled.div`
  ${cardStyle}
  ${paddingSection}
`;

const Search = ({ router }: { router: Router }) => {
  const [results, setResults] = useState([]);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    if (!router.isReady) return;
    // Send filters to API
    const res = getMatchingProfiles(router.query);
    setResults(res);
  }, [router]);

  const fetchNextResults = () => {
    // const res = fetchNextMatchingProfiles(router.query, offset)
    // setResults(res)
    setOffset((prevState) => prevState + 20);
  };

  return (
    <Layout currentPath="/search">
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
            <Button onClick={fetchNextResults}>Voir plus</Button>
          </>
        )}

        {results.length === 0 && (
          <NoResults>
            <h3>Pas de résultat 😭</h3>
            <LinkAsButton text="Enlever les filtres" href="/search" />
          </NoResults>
        )}
      </ResultsSection>
    </Layout>
  );
};

export default withRouter(Search);
