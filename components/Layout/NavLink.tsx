import styled from "styled-components";
import Link from "next/link";

const StyledLi = styled.li<{ active: boolean }>`
  & > a {
    text-decoration: none;
    font-weight: ${({ active }) => active && "800"};
  }
`;

type NavLinkProps = {
  href: string;
  text: string;
  currentPath: string;
};

export const NavLink = ({ href, text, currentPath }: NavLinkProps) => (
  <StyledLi active={currentPath === href}>
    <Link href={href}>{text}</Link>
  </StyledLi>
);
