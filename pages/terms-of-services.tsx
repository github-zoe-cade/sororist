import { OnePanelLayout } from "components/basics/layouts/OnePanelLayout";
import { Layout } from "components/Layout";

export default function TermsOfServices() {
  return (
    <Layout>
      <OnePanelLayout>
        <h3>Mentions légales</h3>
        <h4>Protections des données</h4>
        <p>
          Les données recueillis sur ce site sont affichées uniquement après
          consentement exprès des personnes concernées. Les données sont
          conservées jusqu'à demande de suppression pour les profils approuvés
          et pour une durée de 6 mois pour les profils en attente d'approbation.
          Aucun autre usage (démarchage, revente, etc.) ne sera fait des données
          collectées.
        </p>
        <p>
          Les informations recueillies sur ce site sont enregistrées dans un
          fichier informatisé par les éditeurs de Sororist pour maintenir le
          registre du site sur la base du consentement exprès pour l'affichage
          et la suggestion anonyme en l'attente du consentement ou jusqu'à la
          fin de la période de conservation des données.
        </p>
        <p>
          Vous pouvez accéder aux données vous concernant, les rectifier,
          demander leur effacement ou exercer votre droit à la limitation du
          traitement de vos données. Vous pouvez retirer à tout moment votre
          consentement au traitement de vos données. Dans l'attente d'un
          processus automatisé, les demandes se font par email à
          contact[@]sororist.tech et seront traitées dans un délai raisonnable.
        </p>
        <p>
          Consultez le site cnil.fr pour plus d’informations sur vos droits.
          Pour exercer ces droits ou pour toute question sur le traitement de
          vos données dans ce dispositif, vous pouvez contacter les éditeurs de
          Sororist : contact[@]sororist.tech.
          <br />
          Si vous estimez, après nous avoir contactés, que vos droits «
          Informatique et Libertés » ne sont pas respectés, vous pouvez adresser
          une réclamation à la CNIL.
        </p>
        <h4>Editeur</h4>
        <p>Le site sororist.tech est édité par Tixlegeek et Downdusky.</p>
        <p>
          L'équipe de Sororist peut être contactée via contact[@]sororist.tech.
        </p>
        <h4>Hébergement</h4>
        <p>
          Ce site est hébergé par la société OVH domiciliée 140, quai du Sartel
          – 59100 Roubaix | FRANCE.
        </p>
      </OnePanelLayout>
    </Layout>
  );
}
