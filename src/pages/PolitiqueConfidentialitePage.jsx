import React from 'react';
import LegalLayout, { LegalSection } from '../components/layout/LegalLayout';
import { useLanguage } from '../contexts/LanguageContext';

const EMAIL = 'contact@alyon.ai';

const PolitiqueConfidentialitePage = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const mail = (
    <a href={`mailto:${EMAIL}`} style={{ color: '#000' }}>
      {EMAIL}
    </a>
  );

  return (
    <LegalLayout
      title={fr ? 'Politique de confidentialité' : 'Privacy Policy'}
      lastUpdated={fr ? '1er juillet 2026' : 'July 1, 2026'}
    >
      <LegalSection>
        <p style={{ margin: 0 }}>
          {fr
            ? "La présente politique de confidentialité décrit la manière dont ALYON AI (SAS, SIREN 988 303 715, 101 chemin des Tourterelles, 01280 Prévessin-Moëns) collecte et traite vos données personnelles lorsque vous utilisez ce site, conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés."
            : 'This privacy policy describes how ALYON AI (SAS, SIREN 988 303 715, 101 chemin des Tourterelles, 01280 Prévessin-Moëns, France) collects and processes your personal data when you use this website, in accordance with the General Data Protection Regulation (GDPR).'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Responsable du traitement' : 'Data controller'}>
        <p style={{ margin: 0 }}>
          {fr
            ? 'Le responsable du traitement des données est la société ALYON AI. Pour toute question relative à vos données, vous pouvez nous contacter à l\'adresse '
            : 'The data controller is ALYON AI. For any question regarding your data, you can contact us at '}
          {mail}.
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Données collectées' : 'Data collected'}>
        <p style={{ marginTop: 0 }}>
          {fr
            ? 'Nous collectons uniquement les données que vous nous transmettez volontairement, notamment lorsque vous nous contactez :'
            : 'We only collect data that you voluntarily provide to us, in particular when you contact us:'}
        </p>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>{fr ? 'Votre nom et prénom' : 'Your first and last name'}</li>
          <li>{fr ? 'Votre adresse e-mail' : 'Your email address'}</li>
          <li>{fr ? 'Le contenu de votre message' : 'The content of your message'}</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          {fr
            ? "Des données de connexion (adresses IP, logs) sont par ailleurs collectées automatiquement par notre hébergeur pour assurer la sécurité du site."
            : 'Connection data (IP addresses, logs) is also automatically collected by our host to ensure the security of the site.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Finalités et base légale' : 'Purposes and legal basis'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Vos données sont utilisées uniquement pour répondre à vos demandes et assurer le suivi de nos échanges. La base légale de ce traitement est votre consentement ainsi que l'intérêt légitime d'ALYON AI à répondre à ses interlocuteurs. Aucune donnée n'est utilisée à des fins de prospection sans votre accord."
            : 'Your data is used solely to respond to your requests and follow up on our exchanges. The legal basis for this processing is your consent and ALYON AI\'s legitimate interest in responding to its contacts. No data is used for marketing purposes without your consent.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Durée de conservation' : 'Data retention'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées ou supprimées dans un délai maximal de trois ans à compter de notre dernier contact."
            : 'Your data is kept for the time necessary to process your request, then archived or deleted within a maximum of three years from our last contact.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Partage des données' : 'Data sharing'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Vos données ne sont ni vendues ni cédées à des tiers. Elles peuvent être traitées par nos prestataires techniques (hébergement, messagerie) uniquement dans la mesure nécessaire au fonctionnement du site et de nos communications, dans le respect du RGPD."
            : 'Your data is neither sold nor transferred to third parties. It may be processed by our technical providers (hosting, email) only to the extent necessary for the operation of the site and our communications, in compliance with the GDPR.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Cookies' : 'Cookies'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Ce site n'utilise pas de cookies publicitaires ni de traceurs à des fins marketing. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés."
            : 'This site does not use advertising cookies or marketing trackers. Only technical cookies strictly necessary for the proper functioning of the site may be used.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Vos droits' : 'Your rights'}>
        <p style={{ marginTop: 0 }}>
          {fr
            ? "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Vous pouvez exercer ces droits en nous écrivant à "
            : 'In accordance with the GDPR, you have the right to access, rectify, erase, restrict, object to and port your data. You can exercise these rights by writing to us at '}
          {mail}.
        </p>
        <p style={{ marginBottom: 0 }}>
          {fr
            ? "Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés."
            : 'You may also lodge a complaint with the CNIL (www.cnil.fr) if you believe your rights are not being respected.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Modifications' : 'Changes'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour figure en haut de cette page."
            : 'This privacy policy may be updated at any time. The date of the last update appears at the top of this page.'}
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default PolitiqueConfidentialitePage;
