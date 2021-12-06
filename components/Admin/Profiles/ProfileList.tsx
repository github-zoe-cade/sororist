import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { getMatchingProfilesForEdit } from "lib/profiles";

import { Button } from "components/basics/Button";
import { LinkAsButton } from "components/basics/LinkAsButton";
import { Loading } from "components/basics/Loading";
import { Card } from "./Card";

const Filters = dynamic(
  () => import("components/Admin/Profiles/Filters").then((mod) => mod.Filters),
  { loading: () => <Loading /> }
);

const NoResults = styled.div`
 text-align: center;
`;

export const ProfileList = () => {
  // Do this with context or else
  const [results, setResults] = useState([]);
  const [offset, setOffset] = useState(20);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    // Send filters to API
    const res = getMatchingProfilesForEdit(router.query);
    setResults(res);
  }, [router]);

  const fetchNextResults = () => {
    // const res = fetchNextMatchingProfiles(router.query, offset)
    // setResults(res)
    setOffset((prevState) => prevState + 20);
  };

  const getProfileState = (profile) => {
    if (profile.hidden) {
      return "hidden";
    } else if (profile.published) {
      return "published";
    } else if (profile.contacted) {
      return "contacted";
    } else if (profile.notValidated) {
      return "notValidated";
    } else {
      return "unknown";
    }
  };

  return (
    <div>
      <Filters />
      <div style={{padding: "2rem"}}>
      {results.length > 0 && (
          <>
            <div>
              {results.map((profile, index) => (
                <Card key={index} profile={profile} state={getProfileState(profile)} />
              ))}
            </div>
            <Button onClick={fetchNextResults}>Voir plus</Button>
          </>
        )}

        {results.length === 0 && (
          <NoResults>
            <h3>Pas de résultat 😭</h3>
            <LinkAsButton text="Enlever les filtres" href="/admin/profiles" />
          </NoResults>
        )}
      </div>
    </div>
  );
};
