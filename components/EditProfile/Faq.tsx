import { LinkAsButton } from "components/basics/LinkAsButton";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { cssQueries } from "styles/utils";

const FaqContainer = styled.div`
  & > h4:first-child {
    margin-top: 0;
  }
`;

const BackToProfile = styled.div`
  text-align: center;
  padding-top: 2rem;

  @media ${cssQueries.desktop} {
    display: none;
  }
`;

export const Faq = () => (
  <FaqContainer>
    <a id="faq"></a>
    <h4>Où suis-je ?</h4>
    <p>
      <span style={{ color: "var(--default1)" }}>Sororist</span> est un
      répertoire qui met en avant les femmes et les personnes non binaires de la
      tech. Nous voulons donner plus de visibilité à ces personnes pour qu'on
      puisse les découvrir sur les réseaux ou les inviter dans des conférences,
      podcasts, etc.
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
    <BackToProfile>
      <LinkAsButton href="#profil">
        Remplir mon profil &nbsp; <FaArrowUp aria-label="haut de la page" />
      </LinkAsButton>
    </BackToProfile>
  </FaqContainer>
);
