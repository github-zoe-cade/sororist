import styled from "styled-components";
import { cardStyle, cssQueries } from "styles/utils";

import { SocialLinks } from "components/common/SocialLinks";
import { ProfilePicture } from "components/common/ProfilePicture";

const PanelContainer = styled.div`
  text-align: center;
  padding-top: 1rem !important;

  & > * {
    margin: 2rem 1rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  @media ${cssQueries.mobile} {
    padding: 1rem 0 !important;
  }
`;

const AuthorCard = styled.div`
  ${cardStyle}
  filter: none;
  border: 1px solid var(--default3);
  box-sizing: border-box;
  padding: 1rem;
  min-height: 230px;
  text-align: left;

  &:hover {
    transform: none;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #2c273a;
  }
`;

const StyledSocialLinks = styled(SocialLinks)`
  text-align: right;
`;

export const IdentityContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;

  @media ${cssQueries.mobile} {
    grid-template-columns: 30% 1fr;
    align-items: center;
  }
`;

const Name = styled.p`
  text-overflow: ellipsis;
  overflow-x: hidden;
`;

const tix = {
  name: "Tixlegeek",
  pictureUrl: "https://pbs.twimg.com/profile_images/1230263162462752770/5EELtk8p_400x400.jpg",
  links: [
    { platform: "twitter", url: "https://twitter.com/tixlegeek" },
    { platform: "twitch", url: "twitch.tv/downdusky" },
    { platform: "github", url: "github.com/tixlegeek" },
  ],
  bio: "Cool cool cool",
};

const zoe = {
  name: "Zoé Cadé (Downdusky)",
  pictureUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/70d53c2d-2c73-43d0-b961-53c96786b0d7-profile_image-300x300.png",
  links: [
    { platform: "twitter", url: "https://twitter.com/downdusky" },
    { platform: "twitch", url: "twitch.tv/downdusky" },
    { platform: "github", url: "github.com/zoeKD" },
  ],
  bio: "Développeuse web et streameuse sur Twitch",
};

export const AuthorPanel = () => (
  <PanelContainer>
    <h4>Qui est derrière ce site ?</h4>

    <AuthorCard>
      <StyledSocialLinks links={tix.links} />
      <IdentityContainer>
        <ProfilePicture pictureUrl={tix.pictureUrl} />
        <Name>{tix.name}</Name>
      </IdentityContainer>
      {tix.bio}
    </AuthorCard>

    <AuthorCard>
      <StyledSocialLinks links={zoe.links} />
      <IdentityContainer>
        <ProfilePicture pictureUrl={zoe.pictureUrl} />
        <Name>{zoe.name}</Name>
      </IdentityContainer>
      {zoe.bio}
    </AuthorCard>
  </PanelContainer>
);
