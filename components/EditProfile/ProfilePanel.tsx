import styled from "styled-components";
import { useRouter } from "next/router";
import { isEmpty, toArray } from "lib/helpers";
import { EditProfileType, getProfileForEdit } from "lib/profiles";
import { cssQueries } from "styles/utils";

import { EditProfileForm } from "./EditProfileForm";
import { FaArrowDown } from "react-icons/fa";

const LearnMore = styled.a`
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  font-weight: 600;

  @media ${cssQueries.desktop} {
    display: none;
  }
`;

const Title = styled.h3`
  margin-top: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
`;

export default function ProfilPanel() {
  const router = useRouter();
  if (!router.isReady) {
    return <div>Loading</div>;
  }

  const { token, uuid } = router.query;

  if (isEmpty(token)) {
    console.log("isEmpty");
    router.push(`/profiles/${uuid}`);
  }

  // Call api
  const res = {
    code: 200,
    data: { profile: getProfileForEdit(toArray(uuid)[0]) },
  };
  if (res.code !== 200) {
    console.log("in res");
    router.push(`/profiles/${uuid}`);
  }

  const { profile }: { profile: EditProfileType } = res.data;

  return (
    <div>
      <a id="profil"></a>
      <Title>Editer votre profil</Title>
      {profile.notValidated && (
        <>
          <Subtitle>
            Quelqu'un vous trouve formidable et pense que vous devriez être sur
            ce répertoire !
          </Subtitle>
          <p>
            Remplissez votre profil et publiez-le pour apparaître sur SUPER NOM.
            Vous pouvez refuser d'être publié·e et changer d'avis plus tard en
            faisant la demande <a href="/contact">ici</a> ou supprimer
            définitivement vos données.
          </p>
          <LearnMore href="#faq">
            En savoir plus &nbsp;
            <FaArrowDown aria-label="bas de la page" />
          </LearnMore>
        </>
      )}
      {profile.published && (
        <Subtitle>
          Votre profil est actuellement{" "}
          <span style={{ color: "var(--success120)" }}>publié</span>.
        </Subtitle>
      )}
      {profile.hidden && (
        <Subtitle>
          Votre profil est actuellement{" "}
          <span style={{ color: "var(--warning120)" }}>masqué</span>.
        </Subtitle>
      )}
      <EditProfileForm profile={profile} />
    </div>
  );
}
