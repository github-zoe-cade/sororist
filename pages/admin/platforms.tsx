import { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { getPlatformsForAdmin } from "lib/platforms";
import { cssQueries } from "styles/utils";

import { Loading } from "components/basics/Loading";
import { SessionProvider } from "components/Admin/SessionProvider";
import { Card } from "components/Admin/Card";

const Headers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15rem);
  width: 35rem;
  padding-left: 2rem;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  gap: 0.5rem;

  @media ${cssQueries.mobile} {
    display: none;
  }
`;

const AdminLayout = dynamic(
  () =>
    import("components/basics/layouts/AdminLayout").then(
      (mod) => mod.AdminLayout
    ),
  { ssr: false, loading: () => <Loading /> }
);

export default function Platforms() {
  const [platforms, setPlatforms] = useState([]);
  const fetchPlatforms = () => getPlatformsForAdmin();
  // Move to context
  useEffect(() => {
    setPlatforms(fetchPlatforms());
  }, []);

  const savePlatform = (values) => {
    // post to api
  };

  return (
    <SessionProvider>
      <AdminLayout>
        <div style={{ padding: "2rem" }}>
          <h3>Plateformes</h3>
          <Headers>
            <p>Description</p>
            <p>Valeur</p>
            <p>Crée le</p>
          </Headers>
          {platforms.map((platform) => (
            <Card
              key={platform.uuid}
              item={platform}
              setItems={setPlatforms}
              saveItem={savePlatform}
            />
          ))}
        </div>
      </AdminLayout>
    </SessionProvider>
  );
}
