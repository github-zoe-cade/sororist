import styled from "styled-components";
import { ProfileType } from "lib/profiles";
import { cardStyle } from "styles/utils";

import { ProfilePicture } from "./common/ProfilePicture";
import { ThemeTags } from "./common/ThemeTags";
import { SocialLinks } from "./common/SocialLinks"

type ProfileCardProps = {
  profile: ProfileType;
  className?: string;
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

const StyledSocialLinks = styled(SocialLinks)`
  text-align: right;
`

const CardLink = styled.a`
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: 1;
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

const ClickableCard = ({ href, className, children }) => (
  <ProfileCardContainer
    className={className}
    tabIndex={0}
    role="button"
    aria-pressed="false"
    onKeyDown={(e) => {
      if (e.key === "Enter" && typeof document !== undefined) {
        (document.querySelector('.card-link') as HTMLLinkElement).click()
      }
    }}
  >
    <CardLink href={href} className="card-link"> </CardLink>
    {children}
  </ProfileCardContainer>
);

export const ProfileCard = ({ profile, className }: ProfileCardProps) => {
  return (
    <ClickableCard href={`/profiles/${profile.uuid}`} className={className}>
      <StyledSocialLinks links={profile.links} />
      <IdentityContainer>
        <ProfilePicture pictureUrl={profile.pictureUrl} />
        <p>{profile.name}</p>
      </IdentityContainer>

      <ThemeTags themes={profile.themes} displayedNumber={3} />
    </ClickableCard>
  );
};
