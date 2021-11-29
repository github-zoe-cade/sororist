import { useState } from "react";
import styled from "styled-components";
import { TwoPanelsLayout } from "components/basics/TwoPanelsLayout";
import { Layout } from "components/Layout";
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
