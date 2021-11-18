import styled from "styled-components";
import { random } from "../../lib/helpers";
import { buttonRadius } from "../../styles/utils";

const ThemesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .2rem;
`;

const ThemeTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.default5};
  padding: 0.3rem 0.4rem;
  font-size: 0.8rem;
  ${buttonRadius};
`;

const MoreThemesTag = styled(ThemeTag)`
  border-radius: 50%;
  width: 0.7rem;
`;

export const ThemeTags = ({
  themes,
}: {
  themes: Array<{ uuid: number; name: string }>;
}) => {
  const displayedNumber = 4;
  const displayedThemes = random(themes, displayedNumber);
  const hiddenThemesNumber = themes.length - displayedNumber;

  return (
    <ThemesContainer>
      {displayedThemes.map(({ name }, index) => (
        <ThemeTag key={index}>{name}</ThemeTag>
      ))}
      {hiddenThemesNumber > 0 && (
        <MoreThemesTag>{hiddenThemesNumber}</MoreThemesTag>
      )}
    </ThemesContainer>
  );
};
