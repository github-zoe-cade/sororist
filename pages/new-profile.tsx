import { useState } from "react";
import styled from "styled-components";

import { Layout } from "components/Layout";
import { TwoPanelsLayout } from "components/basics/layouts/TwoPanelsLayout";
import { Faq } from "components/NewProfile/Faq";
import { NewProfileForm } from "components/NewProfile/NewProfileForm";

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
