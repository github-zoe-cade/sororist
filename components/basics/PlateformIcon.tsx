import styled, { withTheme } from "styled-components";
import CodepenIcon from "public/icons/codepen.svg"
import GithubIcon from "public/icons/github.svg"
import InstagramIcon from "public/icons/instagram.svg"
import LinkIcon from "public/icons/link.svg"
import TiktokIcon from "public/icons/tiktok.svg"
import TwitchIcon from "public/icons/twitch.svg"
import TwitterIcon from "public/icons/twitter.svg"
import YoutubeIcon from "public/icons/youtube.svg"


const platformIcons = {
  codepen: CodepenIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  medium: LinkIcon,
  other: LinkIcon,
  tiktok: TiktokIcon,
  twitch: TwitchIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
};

const IconContainer = styled.span<{ platform: string }>`
  & > svg {
    fill: ${({ platform, theme }) => theme.brands.colors[platform]};
    filter: ${({ platform, theme }) => theme.brands.dropShadow[platform]};
    background: ${({ platform, theme }) => theme.brands.background[platform]};
    border-radius: 25%;
    padding: 1px;
  }
`;

export const PlatformIcon = withTheme(({ platform, className }) => {
  const Icon = platformIcons[platform];

  return (
    <IconContainer platform={platform}>
      <Icon aria-label={platform} className={className} />
    </IconContainer>
  );
});
