import styled from "styled-components";
import Link from "next/link";
import { backgroundTransition, buttonRadius } from "styles/utils";

const StyledLink = styled.a`
  background-color: var(--alpha100);
  color: var(--default4);
  padding: 0.7rem 1rem;
  text-decoration: none;
  line-height: 1.5;
  font-weight: 700;
  display: inline-block;
  ${buttonRadius};
  ${backgroundTransition};

  &:hover {
    background-color: var(--alpha120);
  }

  /* @media (prefers-color-scheme: dark) {
    color: var(--default1);

    &:hover, &:focus {
      color: var(--default1)
    }
  } */
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

type LinkProps = { href: string, text?: string, children?: React.ReactNode };
type LinkWithText = LinkProps & { text: string };
type LinkWithChildren = LinkProps & { children: React.ReactNode };

type LinkAsButtonProps = LinkWithText | LinkWithChildren;

export const LinkAsButton = ({ href, text, children }: LinkAsButtonProps) => (
  <Link href={href} passHref>
    <StyledLink>
      {text}
      {children && <Container>{children}</Container>}
    </StyledLink>
  </Link>
);
