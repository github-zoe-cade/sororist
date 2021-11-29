import styled from "styled-components";

const FaqContainer = styled.div`
  & > h4:first-child {
    margin-top: 0;
  }
`

export const Faq = () => (
  <FaqContainer>
    <h4>Comment ça marche ?</h4>
    <p>
      Nous demandons systématique l'accord des personnes concernées pour faire
      apparaître leurs infos. Elles peuvent modifier ou retirer leur profil à
      tout instant sur simple demande.
    </p>

    <h4>Qui peut figurer ici ?</h4>
    <p>Toute personne de genre féminin ou non binaire.</p>

    <h4>Qui peut suggérer un profil ?</h4>
    <p>
      Tout le monde ! On ose pas forcément demander à être répertorié·e, parfois
      c'est grâce à une suggestion qu'on se sent légitime.
    </p>
  </FaqContainer>
);
