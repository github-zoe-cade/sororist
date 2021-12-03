import styled from "styled-components";
import { cssQueries } from "styles/utils";

import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;

  @media ${cssQueries.mobile} {
    margin: 0;
    height: 4rem;
  }
`;

const BrandName = styled.a`
  font-size: 1.6rem;
  font-family: "Abril Fatface";
  letter-spacing: 0.8px;
  text-decoration: none;
  padding: 1rem;
  color: var(--default2);
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

export const Navbar = ({ currentPath }) => (
  <NavbarContainer>
    <BrandName href="/">Sororist</BrandName>
    <DesktopMenu>
      <NavLinks currentPath={currentPath} />
    </DesktopMenu>
    <MobileMenu currentPath={currentPath} />
  </NavbarContainer>
);
