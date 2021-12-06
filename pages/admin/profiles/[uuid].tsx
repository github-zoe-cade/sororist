import { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { EditProfileType, getProfileForEdit } from "lib/profiles";
import CheckIcon from "public/icons/check.svg";

import { Loading } from "components/basics/Loading";
import { SessionProvider } from "components/Admin/SessionProvider";
import { EditProfileForm } from "components/EditProfile/EditProfileForm";
import { Button } from "components/basics/Button";
import { BackButton } from "components/Profile/BackButton";

const AdminLayout = dynamic(
  () =>
    import("components/basics/layouts/AdminLayout").then(
      (mod) => mod.AdminLayout
    ),
  { ssr: false, loading: () => <Loading /> }
);

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)<{ copySuccess: boolean }>`
  background: none;
  text-align: right;
  color: var(--alpha100);
  cursor: ${({ copySuccess }) => (copySuccess ? "default" : "pointer")};
  fill: var(--alpha100);

  &:hover {
    background: none;
    color: var(--alpha120);
    fill: var(--alpha120);
  }

  @media (prefers-color-scheme: dark) {
    &:hover, &:focus {
      color: var(--alpha50);
      fill: var(--alpha50);
    }
  }
`;

export default function Profiles({ uuid }) {
  const [profile, setProfile] = useState<EditProfileType>();
  const [copySuccess, setCopySuccess] = useState(false);
  const fetchProfile = async () => {
    // call API
    const res = getProfileForEdit(uuid);
    setProfile(res);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return <Loading />;
  }

  const getProfileState = () => {
    if (profile.hidden) {
      return "masqué";
    } else if (profile.published) {
      return "publié";
    } else if (profile.contacted) {
      return "en attente";
    } else if (profile.notValidated) {
      return "à valider";
    } else {
      return "en état inconnu";
    }
  };

  const copy = () => {
    if (copySuccess) { return }
    navigator.clipboard.writeText(
      `sororist.tech/profiles/${profile.uuid}?token=${profile.token}`
    );
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };

  return (
    <SessionProvider>
      <AdminLayout>
        <div style={{ padding: "3rem" }}>
          <Header>
            <div>
              <BackButton fromPage="admin/profiles" />
            </div>
            <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
              Ce profil est actuellement {getProfileState()}
            </p>
            <StyledButton onClick={copy} copySuccess={copySuccess}>
              {copySuccess && <CheckIcon />}
              &nbsp; Copier le lien de modification
            </StyledButton>
          </Header>
          <EditProfileForm profile={profile} />
        </div>
      </AdminLayout>
    </SessionProvider>
  );
}
