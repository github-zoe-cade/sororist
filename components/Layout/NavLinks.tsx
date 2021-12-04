import styled from "styled-components";

const StyledLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: ${({ active }) => active && "800"};
  color: var(--default2);
`;

type NavLinkProps = {
  href: string;
  text: string;
  currentPath?: string;
};

export const NavLink = ({ href, text, currentPath }: NavLinkProps) => {
  return (
    <li>
      <StyledLink href={href} active={currentPath === href}>
        {text}
      </StyledLink>
    </li>
  );
};

export const NavLinks = ({ currentPath }) => (
  <>
    <NavLink href="/search" text="Explorer" currentPath={currentPath} />
    <NavLink
      href="/new-profile"
      text="Suggérer un profil"
      currentPath={currentPath}
    />
    <NavLink href="/about" text="À propos" currentPath={currentPath} />
  </>
);
