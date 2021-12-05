import dynamic from "next/dynamic";
import { SessionProvider } from "components/Admin/SessionProvider";
import { Loading } from "components/basics/Loading";
import { getThemesForAdmin } from "lib/themes";
import { useEffect, useState } from "react";

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

  return (
    <SessionProvider>
      <AdminLayout>
        <div style={{ padding: "2rem" }}>
          <h4>Themes</h4>
          {themes.map(({ name }) => (
            <div>{name}</div>
          ))}
        </div>
      </AdminLayout>
    </SessionProvider>
  );
}
