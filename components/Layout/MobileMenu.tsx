import { useState } from "react";
import styled from "styled-components";
import { cssQueries } from "styles/utils";
import CloseIcon from "public/icons/close.svg";
import MenuIcon from "public/icons/menu.svg";

import { Modal } from "components/basics/Modal";
import { NavLinks } from "./NavLinks";
import { FooterLinks } from "./Footer";

const MobileMenuTrigger = styled.button<{
  onClick: (e) => void;
  ariaExpanded: string;
}>`
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--default2);
  padding-right: 1rem;
  display: flex;
  align-items: center;

  @media ${cssQueries.desktop} {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;

  & > :first-child {
    flex-grow: 1;
    padding-top: 5rem;
  }

  & > :first-child > li {
    margin-top: 2rem;

    & > a {
      font-size: 1.1rem;
    }
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 2rem;
  padding-bottom: 4rem;
  margin: 0;

  & > li {
    margin-top: 1rem;
  }
`;

export const MobileMenu = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <MobileMenuTrigger
        type="button"
        aria-haspopup="menu"
        ariaExpanded={isMenuOpen.toString()}
        onClick={isMenuOpen ? closeMenu : openMenu}
        title="Menu"
      >
        {isMenuOpen ? (
          <CloseIcon aria-describedby="Fermer le menu" />
        ) : (
          <MenuIcon aria-describedby="Ouvrir le menu" />
        )}
      </MobileMenuTrigger>

      <Modal
        isOpen={isMenuOpen}
        onRequestClose={closeMenu}
        style={{ overlay: { top: "4rem" } }}
      >
        <Content>
          <StyledUl>
            <NavLinks currentPath={currentPath} />
          </StyledUl>
          <StyledUl style={{ background: "var(--background1)" }}>
            <FooterLinks />
          </StyledUl>
        </Content>
      </Modal>
    </>
  );
};
