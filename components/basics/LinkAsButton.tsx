import styled from "styled-components";
import Link from "next/link";
import { buttonStyle } from "styles/utils";

const StyledLink = styled.a`
  ${buttonStyle};
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
