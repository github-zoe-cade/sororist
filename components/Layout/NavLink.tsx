import styled from "styled-components";

const StyledLi = styled.li<{ active: boolean }>`
  & > a {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: ${({ active }) => active && "800"};
    color: var(--default2);

    &:hover,
    &:focus {
      color: var(--alpha120);
    }
  }
`;

type NavLinkProps = {
  href: string;
  text: string;
  currentPath?: string;
};

export const NavLink = ({ href, text, currentPath }: NavLinkProps) => {
  return (
    <StyledLi active={currentPath === href} tabIndex={1}>
      <a href={href}>{text}</a>
    </StyledLi>
  );
};
