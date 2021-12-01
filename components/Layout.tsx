import styled from "styled-components";

import { cssQueries } from "styles/utils";
import { NavLink } from "./Layout/NavLink";
import React from "react";

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

const BrandName = styled.a`
  font-size: 1.6rem;
  font-family: "Abril Fatface";
  letter-spacing: .8px;
  text-decoration: none;
  padding: 1rem;
  color: var(--default2);
`

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
  background: url('/images/circuit-board.svg');
  background-color: var(--background4);
  padding: 2rem;
  color: var(--default4);

  & > ul {
    list-style: none;
  }

  & li {
    margin-bottom: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--background1);
    color: var(--default2);
  }
`;

type Layout = {
  currentPath?: string,
  children: React.ReactNode,
}

export const Layout = ({ currentPath, children }: Layout) => (
  <LayoutContainer>
    <Navbar>
      <BrandName href="/">A cool name</BrandName>
      <DesktopMenu>
        <NavLink href="/search" text="Explorer" currentPath={currentPath} />
        <NavLink href="/new-profile" text="Suggérer un profil" currentPath={currentPath} />
        <NavLink href="/about" text="A propos" currentPath= {currentPath} />
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
)
