import styled from "styled-components";
import {
  BsGenderAmbiguous,
  BsGenderFemale,
  BsGenderMale,
} from "react-icons/bs";
import { ProfileType } from "lib/profiles";

import { cardStyle, cssQueries } from "styles/utils";

import { VoronoiDecoration } from "components/basics/VoronoiDecoration";
import { SocialLinks } from "components/common/SocialLinks";
import { ThemeTags } from "components/common/ThemeTags";

const PictureAndInfo = styled.div`
  @media ${cssQueries.mobile} {
    text-align: center;
    margin: -1rem;
  }

  @media ${cssQueries.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: -3rem;
  }
`;

const Info = styled.div`
  margin: 1rem;

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const StyledThemeTags = styled(ThemeTags)`
  @media ${cssQueries.mobile} {
    justify-content: center;
  }
`;

const OtherLinkCard = styled.div`
  ${cardStyle}
  height: 100px;
  width: 120px;
  padding: 2rem;
`;

const genderIcons = {
  nonbinary: BsGenderAmbiguous,
  female: BsGenderFemale,
  male: BsGenderMale,
};

export const ProfilePanel = ({ profile }: { profile: ProfileType }) => {
  const Icon = profile.gender && genderIcons[profile.gender];

  return (
    <div>
      <PictureAndInfo>
        <VoronoiDecoration
          image={profile.pictureUrl}
          height={500}
          width={500}
          pictureHeight={300}
          pictureWidth={300}
          pictureShape="circle"
        />
        <Info>
          <h3>
            {profile.name}
            &nbsp;
            {profile.gender && <Icon aria-label={profile.gender} />}
          </h3>

          <StyledThemeTags themes={profile.themes} />

          <SocialLinks links={profile.links} />
        </Info>
      </PictureAndInfo>
      <div>
        <h4 style={{ marginTop: "3rem" }}>Description</h4>
        {profile.description}
        <h4 style={{ marginTop: "3rem" }}>Partenariat</h4>
        {profile.commercial}

        <h4 style={{ marginTop: "3rem" }}>Ressources et liens</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {profile.links.map(({ platform }, i) => (
            <OtherLinkCard key={i}>{platform}</OtherLinkCard>
          ))}
        </div>
      </div>
    </div>
  );
};
