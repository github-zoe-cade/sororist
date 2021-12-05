import { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { getThemesForAdmin } from "lib/themes";
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
  gap: .5rem;

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

export default function Themes() {
  const [themes, setThemes] = useState([]);
  const fetchThemes = () => getThemesForAdmin();
  // Move to context
  useEffect(() => {
    setThemes(fetchThemes());
  }, []);

  const saveTheme = (values) => {
    // post to api
  }

  return (
    <SessionProvider>
      <AdminLayout>
        <div style={{ padding: "2rem" }}>
          <h3>Thèmes</h3>
          <Headers>
            <p>Description</p>
            <p>Valeur</p>
            <p>Crée le</p>
          </Headers>
          {themes.map((theme) => (
            <Card key={theme.uuid} item={theme} setItems={setThemes} saveItem={saveTheme} />
          ))}
        </div>
      </AdminLayout>
    </SessionProvider>
  );
}
