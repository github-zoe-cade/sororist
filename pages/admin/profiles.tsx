import dynamic from "next/dynamic";

import { SessionProvider } from "components/Admin/SessionProvider";
import { Loading } from "components/basics/Loading";
import { ProfileList } from "components/Admin/ProfileList";

const AdminLayout = dynamic(
  () => import("components/basics/layouts/AdminLayout").then((mod) => mod.AdminLayout),
  { ssr: false, loading: () => <Loading /> }
);

export default function Profiles() {
  return (
    <SessionProvider>
      <AdminLayout>
        <ProfileList />
      </AdminLayout>
    </SessionProvider>
  );
}
