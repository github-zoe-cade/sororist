import { useEffect, useState } from "react";
import { Filters } from "components/Search/Filters";
import { getMatchingProfilesForEdit } from "lib/profiles";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledFilters = styled(Filters)`
  border: none;
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

  return (
    <div>
      <StyledFilters router={router} />
      <div style={{padding: "2rem"}}>
        {results.map((profile, i) => (
          <div key={i}>{profile.name}</div>
        ))}
      </div>
    </div>
  );
};
