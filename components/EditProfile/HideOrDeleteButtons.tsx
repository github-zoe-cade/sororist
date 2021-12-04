import styled from "styled-components";
import { cssQueries } from "styles/utils";

import { Button } from "components/basics/Button";
import { useRouter } from "next/router";

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;

  @media ${cssQueries.mobile} {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }
`;

export const HideOrDeleteButton = ({ hidden }) => {
  const router = useRouter()

  const hideProfile = () => {
    // Post to api to submit values + hide profil
    const { token, uuid } = router.query;
    router.push(`/profiles/${uuid}/edit?token=${token}`)
  }

  const deleteProfile = () => {
    const confirm = window.confirm("Êtes-vous sûr·e ? Cette action est définitive.")
    if (confirm) {
      // Post to api
      router.push("/profiles/deleted")
    }
  }
  return (
  <>
    <ButtonContainer>
      <Button
        onClick={hideProfile}
        color="warning"
        disabled={hidden}
        title="Votre profil est déjà masqué"
      >
        Masquer mon profil
      </Button>

      <Button onClick={deleteProfile} color="error">
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
)};
