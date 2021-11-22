import styled from "styled-components";

const StyledLi = styled.li<{ active: boolean }>`
  & > a {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: ${({ active }) => active && "800"};
    color: ${({ theme }) => theme.colors.default2};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.alpha120};
    }
  }
`;

type NavLinkProps = {
  href: string;
  text: string;
};

export const NavLink = ({ href, text }: NavLinkProps) => {
  const currentPath = typeof window === "object" && window.location.pathname;
  const isCurrentPath = currentPath && !!currentPath.match(new RegExp(href))

  return (
    <StyledLi active={isCurrentPath} tabIndex={1}>
      <a href={href}>{text}</a>
    </StyledLi>
  );
};
