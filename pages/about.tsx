import styled from "styled-components";

import { Layout } from "components/Layout";
import { TwoPanelsLayout } from "components/basics/layouts/TwoPanelsLayout";
import { AuthorPanel } from "components/About/AuthorPanel";

const Text = styled.div`
  & > p {
    padding-bottom: 1rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
`;

export default function About() {
  return (
    <Layout currentPath="/about">
      <TwoPanelsLayout>
        <Text>
          <h3>À propos de Sororist</h3>
          <Subtitle>
            Sororist veut mettre en avant les profils de femmes et de personnes
            non-binaires qui évoluent dans le monde de la tech.
          </Subtitle>
          <p>
            Que ces personnes soient juniors ou seniors, travaillent dans la
            tech ou s'y intéressent dans leur temps libre, elles ont leur place
            ici. Nous voulons les mettre en lumière et aidez le plus grand monde
            à découvrir ces profils et à leur donner la parole.
          </p>
          <p>
            Le monde de la tech étant majoritairement masculin, nous devons tous
            redoubler d'efforts pour le rendre plus inclusif. Ça passe par
            reconnaître les expertises de tous·tes et donner un maximum de
            modèles féminins (et non binaires) pour les prochaines générations
            de la tech.
          </p>
          <p>
            Ce projet est non lucratif et open source. Les profils ne sont
            affichées qu'après accord et nous respectons la protections des
            données personnelles.
          </p>
        </Text>
        <AuthorPanel />
      </TwoPanelsLayout>
    </Layout>
  );
}
