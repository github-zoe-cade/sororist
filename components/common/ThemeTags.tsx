import styled from "styled-components";
import { random } from "lib/helpers";
import { buttonRadius } from "styles/utils";

const ThemesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const ThemeTag = styled.span`
  background-color: ${({ theme }) => theme.colors.beta100};
  color: ${({ theme }) => theme.colors.default4};
  padding: 0.3rem 0.4rem;
  font-size: 0.8rem;
  ${buttonRadius};
`;

const MoreThemesTag = styled(ThemeTag)`
  border-radius: 50%;
  width: 0.7rem;
`;

type ThemeTags = {
  themes: Array<{ uuid: number; name: string }>;
  displayedNumber?: number
};

export const ThemeTags = ({ themes, displayedNumber = themes.length }: ThemeTags) => {
  const displayedThemes = random(themes, displayedNumber);
  const hiddenThemesNumber = themes.length - displayedNumber;

  return (
    <ThemesContainer>
      {displayedThemes.map(({ name }: {name: string}, index: number) => (
        <ThemeTag key={index}>{name}</ThemeTag>
      ))}
      {hiddenThemesNumber > 0 && (
        <MoreThemesTag>{hiddenThemesNumber}</MoreThemesTag>
      )}
    </ThemesContainer>
  );
};
