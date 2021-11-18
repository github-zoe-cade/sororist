import styled from "styled-components";
import { useRouter } from "next/router";

import { cssQueries } from "../styles/utils";
import { NavLink } from "./Layout/NavLink";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`

const DesktopMenu = styled.ul`
  display: flex;
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
`

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navbar>
        <h3>A cool name</h3>
        <DesktopMenu>
          <NavLink
            href="/search"
            currentPath={router.pathname}
            text="Explorer"
          />
          <NavLink
            href="/new-profile"
            currentPath={router.pathname}
            text="Suggérer un profil"
          />
          <NavLink
            href="/about"
            currentPath={router.pathname}
            text="A propos"
          />
        </DesktopMenu>
        <MobileMenu>TODO</MobileMenu>
      </Navbar>
      <main>{children}</main>
      <Footer>
        <ul>
          <li>Mentions légales</li>
          <li>Protection des données</li>
          <li>Supprimer/modifier mon profil</li>
          <li>Nous contacter</li>
        </ul>
      </Footer>
    </>
  );
};
