import styled from "styled-components";

const FaqContainer = styled.div`
  & > h4:first-child {
    margin-top: 0;
  }
`;

export const Faq = () => (
  <FaqContainer>
    <h4>Où suis-je ?</h4>
    <p>
      SUPER NOM est un répertoire qui met en avant les femmes et les personnes
      non binaires de la tech. Nous voulons donner plus de visibilité à ces
      personnes pour qu'on puisse les découvrir sur les réseaux ou les inviter
      dans des conférences, podcasts, etc.
    </p>

    <h4>Qui vous a suggéré ?</h4>
    <p>
      Les suggestions sont anonymes, nous filtrons les demandes manuellement.
    </p>

    <h4>À quoi vont servir mes données ?</h4>
    <p>
      Uniquement à être affichées sur ce site ! Aucune autre utilisation n'en
      sera fait, comme l'indiquent nos{" "}
      <a href="/terms-of-services">Mentions Légales</a>
    </p>

    <h4>Et si je change d'avis ?</h4>
    <p>
      Vous pouvez à tout moment éditer, masquer ou supprimer vos données sur
      simple demande en suivant <a href="/contact">ce lien</a>
    </p>
  </FaqContainer>
);
