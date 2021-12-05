import dynamic from "next/dynamic";
import { SessionProvider } from "components/Admin/SessionProvider";
import { Loading } from "components/basics/Loading";

const AdminLayout = dynamic(
  () => import("components/basics/layouts/AdminLayout").then((mod) => mod.AdminLayout),
  { ssr: false, loading: () => <Loading /> }
);

export default function Platforms() {
  return (
    <SessionProvider>
      <AdminLayout>Platforms</AdminLayout>
    </SessionProvider>
  );
}
