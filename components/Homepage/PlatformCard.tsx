import styled from "styled-components";
import { cssQueries } from "../../styles/utils";

import { LinkAsButton } from "../basics/LinkAsButton";
import { RectangleCard } from "../basics/RectangleCard";
import { platformIcons } from "../basics/plateformIcons";

const PlatformCardContainer = styled(RectangleCard)<{ row: number }>`
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

export const PlatformCard = ({
  platform,
  index,
}: {
  platform: string;
  index: number;
}) => {
  const Icon = platformIcons[platform.toLowerCase()];

  return (
    <PlatformCardContainer row={index}>
      <PlatformName>
        <Icon />
        {platform}
      </PlatformName>
      <LinkAsButton href={`/search?platform=${platform}`} text="Découvrir" />
    </PlatformCardContainer>
  );
};
