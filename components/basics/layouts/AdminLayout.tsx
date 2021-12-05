import { useState } from "react";
import styled from "styled-components";
import CaretUp from "public/icons/caret-up.svg"
import CaretDown from "public/icons/caret-down.svg"
import { cssQueries } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { NavLink } from "components/Layout/NavLinks";

const LayoutContainer = styled.div`
  display: grid;
  height: 100%;

  @media ${cssQueries.desktop} {
    grid-template-columns: 20% 1fr;
  }
`;

const OpenSideNav = styled.div`
  @media ${cssQueries.desktop} {
    display: none;
  }

  background: var(--background2);
  border-bottom: 1px solid var(--default3);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;

  & > svg {
    fill: var(--alpha100);
    height: 1.6rem;
  }
`;

const SideNav = styled.nav<{ open: boolean }>`
  background: var(--background2);
  border-right: 1px solid var(--default3);
  height: 100%;
  padding: 2rem;
  overflow: hidden;

  @media ${cssQueries.mobile} {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin-top: 3rem;
  padding: 0;

  & > * {
    margin-bottom: 1rem;
  }
`;

const Main = styled.main`
  background: var(--background2);
  overflow: scroll;
`;

export const AdminLayout = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <LayoutContainer>
      <OpenSideNav
        role="button"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        onKeyDown={(e) => e.key === "Enter" && setMobileNavOpen(!mobileNavOpen)}
        tabIndex={0}
      >
        Navigation
        {mobileNavOpen ? (
          <CaretUp aria-label="Fermer" />
        ) : (
          <CaretDown aria-label="Ouvrir" />
        )}
      </OpenSideNav>

      <SideNav open={mobileNavOpen}>
        <LinkAsButton href="/">Retour au site</LinkAsButton>
        <Ul>
          <NavLink href="/admin/themes" text="Thèmes" />
          <NavLink href="/admin/platforms" text="Plateformes" />
          <NavLink href="/admin/profiles" text="Profils" />
          <ul>
            <NavLink href="/admin/profiles?state=new" text="À valider" />
            <NavLink href="/admin/profiles?state=waiting" text="En attente" />
            <NavLink href="/admin/profiles?state=displayed" text="Publiés" />
            <NavLink href="/admin/profiles?state=hidden" text="Masqués" />
          </ul>
        </Ul>
      </SideNav>
      <Main>{children}</Main>
    </LayoutContainer>
  );
};
