import styled from "styled-components";
import {
  BsGenderAmbiguous,
  BsGenderFemale,
  BsGenderMale,
} from "react-icons/bs";
import { ProfileType } from "lib/profiles";

import { cardStyle } from "styles/utils";

import { ProfilePicture } from "components/common/ProfilePicture";
import { SocialLinks } from "components/common/SocialLinks";
import { ThemeTags } from "components/common/ThemeTags";

const ProfileContainer = styled.div`
  ${cardStyle}
  padding: 4rem;
`;

const PictureAndInfo = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 2rem;
`;

const Info = styled.div`
  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const genderIcons = {
  nonbinary: BsGenderAmbiguous,
  female: BsGenderFemale,
  male: BsGenderMale,
};

export const ProfilePanel = ({ profile }: { profile: ProfileType }) => {
  const Icon = profile.sex && genderIcons[profile.sex];

  return (
    <ProfileContainer>
      <PictureAndInfo>
        <ProfilePicture pictureUrl={profile.pictureUrl} />
        <Info>
          <h3>
            {profile.name}
            &nbsp;
            {profile.sex && <Icon alt={profile.sex} />}
          </h3>

          <ThemeTags themes={profile.themes} />

          <SocialLinks links={profile.links} />
        </Info>
      </PictureAndInfo>
      <div>
        <h4 style={{marginTop: "3rem"}}>Description</h4>
        {profile.description}
        <h4 style={{marginTop: "3rem"}}>Partenariat</h4>
        {profile.commercial}

        <h4 style={{marginTop: "3rem"}}>Ressources et liens</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {profile.links.map(({ platform }) => (
            <div style={{ height: "100px", width: "120px", background: "lavenderblush", padding: "2rem" }}>
              {platform}
              </div>
          ))}
        </div>
      </div>
    </ProfileContainer>
  );
};
