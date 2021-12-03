import { OnePanelLayout } from "components/basics/layouts/OnePanelLayout";
import { Layout } from "components/Layout";

export default function Contact() {
  return (
    <Layout>
      <OnePanelLayout>
        <h3>Nous contacter</h3>
        <h4>Gestion des données personnelles</h4>
        <p>
          Pour accepter au formulaire de modification des données, demander leur
          retrait ou leur suppression, merci d'envoyer un email à
          contact[@]sororist.tech en précisant l'adresse de votre profil ou à
          défaut des informations nous permettant de vous identifier. <br />
          Les demandes concernant la gestion des données personnelles seront
          traitées dans un délai raisonnable à compter de la réception de
          l'email.
        </p>
        <h4>Autres demandes</h4>
        <p>
          Une idée, une coquille ou un bug sur le site ?
          <br />
          Vous pouvez nous contacter par email à contact[@]sororist.tech.
        </p>
      </OnePanelLayout>
    </Layout>
  );
}
