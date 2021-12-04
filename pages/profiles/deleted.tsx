import { OnePanelLayout } from "components/basics/layouts/OnePanelLayout";
import { LinkAsButton } from "components/basics/LinkAsButton";
import { Layout } from "components/Layout";

export default function Deleted() {
  return (
    <Layout>
      <OnePanelLayout>
        <h3>Vos données ont bien été supprimées.</h3>
        <p>
          Suite à votre demande, toutes vos données personnelles ont été
          supprimées de notre registre.
          <br />
          <br />
          Si vous changez d'avis, vous pouvez soumettre à nouveau votre profil
          sur la page <a href="/new-profile">Suggérer un profil</a>.
        </p>

        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <LinkAsButton href="/" text="Retour à l'accueil" />
        </div>
      </OnePanelLayout>
    </Layout>
  );
}
