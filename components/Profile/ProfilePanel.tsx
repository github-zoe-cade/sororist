import styled from "styled-components";
import NbIcon from "public/icons/gender-nb.svg";
import FemaleIcon from "public/icons/gender-female.svg";
import MaleIcon from "public/icons/gender-male.svg";
import { ProfileType } from "lib/profiles";
import { cssQueries } from "styles/utils";

import { VoronoiDecoration } from "components/basics/VoronoiDecoration";
import { SocialLinks } from "components/common/SocialLinks";
import { ThemeTags } from "components/common/ThemeTags";

import { OtherLinkCard } from "./OtherLinkCard";

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
    margin-bottom: 3rem;

    @media ${cssQueries.mobile} {
      margin-bottom: 1rem;
    }
  }
`;

const StyledThemeTags = styled(ThemeTags)`
  @media ${cssQueries.mobile} {
    justify-content: center;
  }
`;

const StyledSocialLinks = styled(SocialLinks)`
  & svg {
    height: 1.6rem !important;
    width: 1.6rem !important;
  }
`;

const SectionTitle = styled.h4`
  margin: 3rem 0 2rem;
`;

const OtherLinksContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media ${cssQueries.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${cssQueries.large} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const genderIcons = {
  nonbinary: NbIcon,
  female: FemaleIcon,
  male: MaleIcon,
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
            {profile.gender && (
              <Icon aria-label={profile.gender} height="2rem" />
            )}
          </h3>

          <StyledThemeTags themes={profile.themes} />

          <StyledSocialLinks links={profile.links} />
        </Info>
      </PictureAndInfo>
      <div>
        <SectionTitle>Description</SectionTitle>
        {profile.description}
        <SectionTitle>Partenariat</SectionTitle>
        {profile.commercial}

        <SectionTitle>Ressources et liens</SectionTitle>
        <OtherLinksContainer>
          {profile.otherLinks.map((link, i) => (
            <OtherLinkCard key={i} link={link} />
          ))}
        </OtherLinksContainer>
      </div>
    </div>
  );
};
