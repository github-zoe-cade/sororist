import styled from "styled-components";
import Link from "next/link";
import { backgroundTransition, buttonRadius } from "../../styles/utils";

const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.default5};
  padding: 0.7rem 1rem;
  text-decoration: none;
  line-height: 1.5;
  font-weight: 700;
  display: inline-block;
  ${buttonRadius};
  ${backgroundTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1};
  }
`;

export const LinkAsButton = ({ href, text }: {href: string, text: string}) => (
  <Link href={href} passHref>
    <StyledLink>{text}</StyledLink>
  </Link>
);
