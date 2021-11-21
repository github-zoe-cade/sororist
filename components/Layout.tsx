import styled from "styled-components";
import Link from "next/link";

import { cssQueries } from "styles/utils";
import { NavLink } from "./Layout/NavLink";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

const DesktopMenu = styled.ul`
  display: flex;
  align-items: start;
  gap: 1rem;
  list-style: none;

  @media ${cssQueries.mobile} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  @media ${cssQueries.desktop} {
    display: none;
  }
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background5};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.default5};

  & > ul {
    list-style: none;
  }

  & li {
    margin-bottom: 1rem;
  }
`;

export const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar>
      <Link href="/" passHref>
        <h4>A cool name</h4>
      </Link>
      <DesktopMenu>
        <NavLink href="/search" text="Explorer" />
        <NavLink href="/new-profile" text="Suggérer un profil" />
        <NavLink href="/about" text="A propos" />
      </DesktopMenu>
      <MobileMenu>TODO</MobileMenu>
    </Navbar>
    <Main>{children}</Main>
    <Footer>
      <ul>
        <li>Mentions légales</li>
        <li>Protection des données</li>
        <li>Supprimer/modifier mon profil</li>
        <li>Nous contacter</li>
      </ul>
    </Footer>
  </LayoutContainer>
);
