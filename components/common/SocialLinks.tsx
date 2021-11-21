import styled from "styled-components";
import { LinkAsIcon } from "components/basics/LinkAsIcon";
import { platformIcons } from "components/basics/plateformIcons";

const LinksContainer = styled.div`
  font-size: 1.3rem;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

type SocialLinks = {
  links: Array<{
    platform: string;
    link: string;
  }>;
  className?: string;
};

export const SocialLinks = ({ links, className }: SocialLinks) => (
  <LinksContainer className={className}>
    {links.map(({ platform, link }, index) => {
      const Icon = platformIcons[platform];
      return (
        <LinkAsIcon
          key={index}
          href={link}
          Icon={Icon}
          alt={platform}
          target="_blank"
        />
      );
    })}
  </LinksContainer>
);
