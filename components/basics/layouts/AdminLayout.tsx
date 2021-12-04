import styled from "styled-components";

import { cardStyle } from "styles/utils";
import { LinkAsButton } from "components/basics/LinkAsButton";
import { NavLink } from "components/Layout/NavLinks";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  height: 100%;
`;

const SideNav = styled.nav`
  background: var(--background2);
  border-right: 1px solid var(--default3);
  height: 100%;
  padding: 2rem;
  overflow: hidden;
`;

const Ul = styled.ul`
  list-style: none;
  margin-top: 3rem;
  padding: 0;

  & > * {
    margin-bottom: 1rem;
  }
`

const Main = styled.main`
  background: var(--background2);
  overflow: scroll;
`;

export const AdminLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <SideNav>
        <LinkAsButton href="/">Retour au site</LinkAsButton>
        <Ul>
          <NavLink href="/admin/profiles" text="Profils" />
          <NavLink href="/admin/themes" text="Thèmes" />
          <NavLink href="/admin/platforms" text="Plateformes" />
        </Ul>
      </SideNav>
      <Main>
        {children}
      </Main>
    </LayoutContainer>
  );
};
