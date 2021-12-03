import dynamic from "next/dynamic";

import { Layout } from "components/Layout";
import { Loading } from "components/basics/Loading";
import { TwoPanelsLayout } from "components/basics/TwoPanelsLayout";

import { Faq } from "components/EditProfile/Faq";

const DynamicProfilePanel = dynamic(
  () => import("components/EditProfile/ProfilePanel"),
  { ssr: false, loading: () => <Loading /> }
);

export default function EditProfile() {
  return (
    <Layout>
      <TwoPanelsLayout>
        <DynamicProfilePanel />

        <Faq />
      </TwoPanelsLayout>
    </Layout>
  );
}
