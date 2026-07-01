import React from 'react';
import LegalLayout, { LegalSection } from '../components/layout/LegalLayout';
import { useLanguage } from '../contexts/LanguageContext';

// Legal identification data (source: annuaire-entreprises.data.gouv.fr — SIREN 988 303 715).
const company = {
  name: 'ALYON AI',
  form: 'SAS (société par actions simplifiée)',
  capital: '500 €',
  address: '101 chemin des Tourterelles, 01280 Prévessin-Moëns, France',
  siren: '988 303 715',
  siret: '988 303 715 00011',
  rcs: 'Bourg-en-Bresse 988 303 715',
  vat: 'FR39 988 303 715',
  ape: '6201Z – Programmation informatique',
  email: 'contact@alyon.ai',
};

const Row = ({ label, value }) => (
  <li style={{ padding: '4px 0' }}>
    <strong style={{ color: '#000', fontWeight: 600 }}>{label} :</strong> {value}
  </li>
);

const MentionsLegalesPage = () => {
  const { lang } = useLanguage();
  const fr = lang === 'fr';

  const listStyle = { listStyle: 'none', padding: 0, margin: 0 };

  return (
    <LegalLayout
      title={fr ? 'Mentions légales' : 'Legal Notice'}
      lastUpdated={fr ? '1er juillet 2026' : 'July 1, 2026'}
    >
      <LegalSection heading={fr ? 'Éditeur du site' : 'Site publisher'}>
        <ul style={listStyle}>
          <Row label={fr ? 'Dénomination sociale' : 'Company name'} value={company.name} />
          <Row label={fr ? 'Forme juridique' : 'Legal form'} value={company.form} />
          <Row label={fr ? 'Capital social' : 'Share capital'} value={company.capital} />
          <Row label={fr ? 'Siège social' : 'Registered office'} value={company.address} />
          <Row label="SIREN" value={company.siren} />
          <Row label="SIRET" value={company.siret} />
          <Row label={fr ? 'RCS' : 'Trade register (RCS)'} value={company.rcs} />
          <Row label={fr ? 'N° TVA intracommunautaire' : 'VAT number'} value={company.vat} />
          <Row label={fr ? 'Code APE' : 'APE/NAF code'} value={company.ape} />
          <Row
            label={fr ? 'Contact' : 'Contact'}
            value={<a href={`mailto:${company.email}`} style={{ color: '#000' }}>{company.email}</a>}
          />
        </ul>
      </LegalSection>

      <LegalSection heading={fr ? 'Directeur de la publication' : 'Publication director'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Le directeur de la publication est le représentant légal de la société ALYON AI."
            : 'The publication director is the legal representative of ALYON AI.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Hébergement' : 'Hosting'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — "
            : 'This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA — '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
            vercel.com
          </a>.
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Propriété intellectuelle' : 'Intellectual property'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "L'ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques, marques) est la propriété exclusive d'ALYON AI, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans l'autorisation écrite préalable d'ALYON AI est interdite."
            : 'All content on this site (text, images, logos, graphic elements, trademarks) is the exclusive property of ALYON AI unless otherwise stated. Any reproduction, representation, modification or use, in whole or in part, without the prior written consent of ALYON AI is prohibited.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Responsabilité' : 'Liability'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "ALYON AI s'efforce d'assurer l'exactitude des informations diffusées sur ce site mais ne saurait être tenue responsable des erreurs, omissions ou des conséquences liées à leur utilisation. Les liens vers des sites tiers n'engagent pas la responsabilité d'ALYON AI quant à leur contenu."
            : 'ALYON AI strives to ensure the accuracy of the information provided on this site but cannot be held liable for errors, omissions or the consequences of their use. Links to third-party sites do not engage ALYON AI\'s responsibility regarding their content.'}
        </p>
      </LegalSection>

      <LegalSection heading={fr ? 'Données personnelles' : 'Personal data'}>
        <p style={{ margin: 0 }}>
          {fr
            ? "Les modalités de collecte et de traitement des données personnelles sont détaillées dans notre "
            : 'The terms of collection and processing of personal data are detailed in our '}
          <a href="/politique-de-confidentialite" style={{ color: '#000' }}>
            {fr ? 'politique de confidentialité' : 'privacy policy'}
          </a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default MentionsLegalesPage;
