import dynamic from "next/dynamic";

import { Layout } from "components/Layout";
import { Loading } from "components/basics/Loading";
import { TwoPanelsLayout } from "components/basics/TwoPanelsLayout";

import { Faq } from "components/EditProfile/Faq";

const DynamicProfilPanel = dynamic(
  () => import("components/EditProfile/ProfilPanel"),
  { ssr: false, loading: () => <Loading /> }
);

export default function EditProfile() {
  return (
    <Layout>
      <TwoPanelsLayout>
        <DynamicProfilPanel />

        <Faq />
      </TwoPanelsLayout>
    </Layout>
  );
}
