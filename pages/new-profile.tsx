import styled from "styled-components";
import dynamic from "next/dynamic";

import { Layout } from "components/Layout";
import { TwoPanelsLayout } from "components/basics/layouts/TwoPanelsLayout";
import { Faq } from "components/NewProfile/Faq";
import { Loading } from "components/basics/Loading";

const NewProfileForm = dynamic(() =>
  import("components/NewProfile/NewProfileForm").then(
    (mod) => mod.NewProfileForm
  ),
  { loading: () => <Loading />}
);

const Title = styled.h3`
  margin-top: 0;
`;

export default function NewProfile() {
  return (
    <Layout currentPath="/new-profile">
      <TwoPanelsLayout>
        <div>
          <Title>Suggérer un profil</Title>
          <p>
            Une personne incroyable manque à ce répertoire ? Propose son profil
            et nous lui demanderons son accord pour l'ajouter sur le site.
          </p>

          <NewProfileForm />
        </div>

        <Faq />
      </TwoPanelsLayout>
    </Layout>
  );
}
