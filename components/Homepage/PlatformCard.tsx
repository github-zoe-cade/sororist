import styled from "styled-components";
import { cssQueries } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";
import { RectangleCard } from "components/basics/RectangleCard";
import { PlatformIcon } from "components/basics/PlateformIcon";
import { bounceOnHover } from "styles/animations";

const PlatformCardContainer = styled(RectangleCard)<{ row: number }>`
  ${bounceOnHover}

  @media ${cssQueries.desktop} {
    margin-left: ${({ row }) => (row + 1) * 1.5}rem;
    width: 70%;
  }
`;

const PlatformName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  & > :first-child {
    margin-right: 0.5rem;
  }
`;

type PlatformCard = {
  platform: string;
  index: number;
};

export const PlatformCard = ({ platform, index }: PlatformCard) => {
  return (
    <PlatformCardContainer row={index} className="platform-card">
      <PlatformName>
        <PlatformIcon platform={platform.toLowerCase()} />
        {platform}
      </PlatformName>
      <LinkAsButton href={`/search?platform=${platform}`} text="Découvrir" />
    </PlatformCardContainer>
  );
};
