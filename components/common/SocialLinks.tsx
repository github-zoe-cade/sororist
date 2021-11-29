import styled from "styled-components";
import { LinkAsIcon } from "components/basics/LinkAsIcon";
import { PlatformIcon } from "components/basics/PlateformIcon";

// Allow to use StyledIcon inside LinksContainer for selector specificity
const StyledIcon = styled(PlatformIcon)``;

const LinksContainer = styled.div`
  font-size: 1.3rem;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }

  ${StyledIcon} {
    fill: ${({ theme }) => theme.colors.alpha100};
    filter: none;
    background: none;
    position: relative;
    z-index: 10;

    &:hover {
      fill: ${({ theme }) => theme.colors.alpha120};
    }
  }
`;

type SocialLinks = {
  links: Array<{
    platform: string;
    url: string;
  }>;
  className?: string;
};

export const SocialLinks = ({ links, className }: SocialLinks) => (
  <LinksContainer className={className}>
    {links.map(({ platform, url }, index) => {
      return (
        <a href={url} key={index} target="_blank">
          <StyledIcon platform={platform} />
        </a>
      );
    })}
  </LinksContainer>
);
