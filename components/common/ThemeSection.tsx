import styled from "styled-components";
import { paddingSection } from "styles/utils";

import { LinkAsButton } from "components/basics/LinkAsButton";

const ThemeSectionContainer = styled.div`
  ${paddingSection}
  background-color: ${({ theme }) => theme.colors.background3};
  color: ${({ theme }) => theme.colors.default3};
  text-align: center;
`;

const Intertitle = styled.p`
  /* text-transform: uppercase; */
  margin: 0;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .5rem;
`;

export const ThemeSection = ({ themes }: { themes: string[]} ) => (
  <ThemeSectionContainer>
    <Intertitle>Chercher des profils d'expert·e·s par domaine</Intertitle>
    <LabelContainer>
      {themes.map((theme: string, index: number) => (
        <LinkAsButton
          href={`/search?themes=${theme}`}
          text={theme}
          key={index}
        />
      ))}
    </LabelContainer>
  </ThemeSectionContainer>
);
