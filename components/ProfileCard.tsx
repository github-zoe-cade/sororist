import styled from "styled-components";
import { ProfileType } from "../lib/profiles";
import { cardStyle } from "../styles/utils";

import { LinkAsIcon } from "./basics/LinkAsIcon";
import { platformIcons } from "./basics/plateformIcons";
import { ProfilePicture } from "./ProfileCard/ProfilePicture";
import { ThemeTags } from "./ProfileCard/ThemeTags";

type ProfileCardProps = {
  profile: ProfileType;
};

const ProfileCardContainer = styled.div`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 230px;
  width: 300px;
  position: relative;
`;

const CardLink = styled.a`
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: 1;
`;

const LinksContainer = styled.div`
  text-align: right;
  font-size: 1.3rem;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const IdentityContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ClickableCard = ({ href, children }) => (
  <ProfileCardContainer
    tabIndex="0"
    role="button"
    aria-pressed="false"
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        document.querySelector('.card-link').click()
      }
    }}
  >
    <CardLink href={href} className="card-link"> </CardLink>
    {children}
  </ProfileCardContainer>
);

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <ClickableCard href={`/profiles/${profile.uuid}`}>
      <LinksContainer>
        {profile.links.map(({ platform, link }, index) => {
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
      <IdentityContainer>
        <ProfilePicture pictureUrl={profile.pictureUrl} />
        <p>{profile.name}</p>
      </IdentityContainer>

      <ThemeTags themes={profile.themes} />
    </ClickableCard>
  );
};
