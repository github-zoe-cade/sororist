import styled from "styled-components";

import { Button } from "components/basics/Button";

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;

  & > * {
    width: 100%;
  }
`;

export const HideOrDeleteButton = ({ hidden }) => (
  <>
    <ButtonContainer>
      <Button
        onClick={() => console.log("hide")}
        color="warning"
        disabled={hidden}
        title="Votre profil est déjà masqué"
      >
        Masquer mon profil
      </Button>

      <Button onClick={() => console.log("delete")} color="error">
        Supprimer mes données
      </Button>
    </ButtonContainer>
    <p>
      <small>
        En masquant votre profil, vous serez pas affiché·e dans le répertoire et
        nous ne vous demanderons plus si vous êtes à nouveau suggéré·e. Vous
        pouvez changer d'avis à tout moment.
        <br />
        <br />
        Si vous le souhaitez, vous pouvez supprimer totalement vos données. Dans
        ce cas, nous risquons de vous contacter à nouveau si une autre personne
        suggère votre profil.
      </small>
    </p>
  </>
);
