import styled from "styled-components";
import { useRouter } from "next/router";
import { isEmpty, toArray } from "lib/helpers";
import { EditProfileType, getProfileForEdit } from "lib/profiles";

import { EditProfileForm } from "./EditProfileForm";

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
  const res = { code: 200, data: { profile: getProfileForEdit(toArray(uuid)[0]) } };
  if (res.code !== 200) {
    console.log("in res");
    router.push(`/profiles/${uuid}`);
  }

  const { profile }: {profile: EditProfileType} = res.data;

  return (
    <div>
      <Title>Editer votre profil</Title>
      {profile.notValidated && (
        <Subtitle>
          Quelqu'un vous trouve formidable et pense que vous devriez être sur ce
          répertoire !
        </Subtitle>
      )}
      <p>
        Remplissez votre profil et publiez-le pour apparaître sur SUPER NOM.
        Vous pouvez refuser d'être publié·e et changer d'avis plus tard en
        faisant la demande <a href="/contact">ici</a> ou supprimer
        définitivement vos données.
      </p>

      <EditProfileForm profile={profile} />
    </div>
  );
}
