import styled from "styled-components";
import { inputStyle } from "styles/forms";

import { PlatformIcon } from "components/basics/PlateformIcon";

const Input = styled.input`
  ${inputStyle};
`;

const UrlField = styled.div`
  display: flex;
  align-items: center;
  row-gap: 1rem;

  & svg {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;

const placeholders = {
  github: "github.com/angie_neer",
  instagram: "instagram.com/angie_dev",
  tiktok: "twitch.tv/@angiedev",
  twitch: "twitch.tv/AngieNeer",
  twitter: "twitter.com/AngieDev",
  youtube: "youtube.com/channel/BVxLoDO8BHzh0khYCA70jrOw",
};

const regex = {
  github: /^(?:https:\/\/)?(?:www.)?github.com\//,
  instagram: "instagram.com/angie_dev",
  tiktok: "twitch.tv/@angiedev",
  twitch: "twitch.tv/AngieNeer",
  twitter: /^(?:https:\/\/)?(?:www.)?twitter.com\//,
  youtube: "youtube.com/channel/BVxLoDO8BHzh0khYCA70jrOw",
};

export const LinkList = ({ setFieldValue, links, ...field }) => (
  <>
    <span>Précisez au moins un lien</span>
    {links.map(({ platform, url }) => (
      <UrlField key={platform}>
        <PlatformIcon platform={platform} />
        <Input
          {...field}
          placeholder={placeholders[platform]}
          value={url}
          onChange={(e) => {
            const newLinks = links.map((link) =>
              link.platform === platform
                ? { ...link, url: e.target.value }
                : link
            );
            setFieldValue(field.name, newLinks);
          }}
        />
      </UrlField>
    ))}
  </>
);
