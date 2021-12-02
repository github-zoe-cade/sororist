import styled from "styled-components";
import { cssQueries } from "styles/utils";

const FooterContainer = styled.footer`
  background: url("/images/circuit-board.svg");
  background-color: var(--background4);
  padding: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: var(--background1);
  }
`;

const StyledUl = styled.ul`
  list-style: none;

  @media ${cssQueries.mobile} {
    padding: 0;
  }

  & > li {
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--default4);

  @media (prefers-color-scheme: dark) {
    color: var(--default2);
  }
`;

export const FooterLinks = () => (
  <>
    <li>
      <FooterLink href="/terms-of-services">Mentions légales</FooterLink>
    </li>
    <li>
      <FooterLink href="/contact">Supprimer/modifier mon profil</FooterLink>
    </li>
    <li>
      <FooterLink href="/contact">Nous contacter</FooterLink>
    </li>
  </>
);

export const Footer = () => (
  <FooterContainer>
    <StyledUl>
      <FooterLinks></FooterLinks>
    </StyledUl>
  </FooterContainer>
);
