import { OnePanelLayout } from "components/basics/layouts/OnePanelLayout";
import { LinkAsButton } from "components/basics/LinkAsButton";
import { Layout } from "components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <OnePanelLayout style={{ textAlign: "center" }}>
        <h3>Oups, il n'y a rien ici.</h3>
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <LinkAsButton href="/" text="Retour à l'accueil" />
        </div>
      </OnePanelLayout>
    </Layout>
  );
}
