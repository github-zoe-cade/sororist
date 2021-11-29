import { useContext } from "react";
import styled, { ThemeContext, withTheme } from "styled-components";
import {
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaLink,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";

const platformIcons = {
  codepen: FaCodepen,
  github: FaGithub,
  instagram: FaInstagram,
  medium: FaLink,
  other: FaLink,
  tiktok: FaTiktok,
  twitch: FaTwitch,
  twitter: FaTwitter,
  youtube: FaYoutube,
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
      <Icon alt={platform} className={className} />
    </IconContainer>
  );
});
