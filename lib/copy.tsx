import React from 'react'

export const copy = {
  it: {
    hero: {
      eyebrow: 'CloudLast S.r.l.',
      title: 'Prodotti software verticali e affidabili',
      description:
        'CloudLast è una società di prodotto. Progettiamo e sviluppiamo internamente soluzioni digitali per settori specifici, con un approccio ingegneristico orientato a stabilità, sicurezza e continuità operativa.',
      ctaPrimary: 'Contattaci',
      ctaSecondary: 'Scopri i prodotti',
    },

    services: {
      eyebrow: 'Cosa facciamo',
      title: 'Sviluppiamo software proprietario con metodo',
      description:
        'Operiamo con processi chiari e una struttura tecnica dedicata. Ogni prodotto è seguito nel tempo, con attenzione alla qualità e alla protezione dei dati.',
      items: [
        {
          title: 'Prodotti proprietari',
          description:
            'Progettiamo e manteniamo piattaforme software di nostra proprietà, con roadmap definite internamente e cura del ciclo di vita.',
          deliverables: [
            'Roadmap di prodotto e manutenzione continuativa',
            'Aggiornamenti e gestione controllata delle release di aggiornamento',
            'Assistenza strutturata per i clienti',
          ],
          learnMoreHref: '#prodotti',
          cta: 'Dettagli',
        },
        {
          title: 'Soluzioni verticali',
          description:
            'Costruiamo software per esigenze specifiche di settore, con funzionalità concrete e un linguaggio vicino agli operatori.',
          deliverables: [
            'Analisi dei flussi operativi reali',
            'Interfacce essenziali e orientate al lavoro quotidiano',
            'Adozione graduale e formazione mirata',
          ],
          learnMoreHref: '#prodotti',
          cta: 'Dettagli',
        },
        {
          title: 'Approccio ingegneristico',
          description:
            'Sviluppo interno, documentazione, test e controllo delle dipendenze garantiscono prodotti stabili e affidabili nel tempo.',
          deliverables: [
            'Qualità del codice e verifiche tecniche regolari',
            'Sicurezza applicativa e gestione responsabile dei dati',
            'Monitoraggio e continuità operativa',
          ],
          learnMoreHref: '#affidabilita',
          cta: 'Approfondisci',
        },
      ],
    },

    about: {
      eyebrow: 'Chi siamo',
      title: 'Una società di prodotto con sviluppo interno',
      description:
        'CloudLast opera come S.r.l. italiana con focus su prodotti software proprietari. Il team cura internamente analisi, sviluppo e gestione operativa, con una struttura orientata a qualità, stabilità e sicurezza.',
    },

    products: {
      eyebrow: 'Prodotti',
      title: 'Software proprietario CloudLast',
      description:
        'Ogni prodotto nasce da esigenze concrete di settore e viene gestito direttamente dal team CloudLast.',
      items: [
        {
          name: 'CloudBarber',
          summary:
            'Gestionale per saloni e beauty. Agenda, clienti, servizi e operatività quotidiana in un’unica piattaforma.',
          status: 'Uscita Gennaio 2026 · accesso e onboarding guidato su invito',
          cta: 'Richiedi informazioni',
        },
      ],
    },

    reliability: {
      eyebrow: 'Affidabilità e sicurezza',
      title: 'Una base solida per l’operatività quotidiana',
      items: [
        {
          title: 'Infrastrutture affidabili',
          description:
            'Servizi ospitati su piattaforme stabili, con monitoraggio continuo e procedure di gestione chiare.',
        },
        {
          title: 'GDPR e privacy',
          description:
            'Trattiamo i dati con attenzione e rispetto delle normative, con processi pensati per la tutela dei clienti.',
        },
        {
          title: 'Continuità operativa e backup',
          description:
            'Backup regolari e controlli di continuità per garantire operatività anche in caso di imprevisti.',
        },
      ],
    },

    contact: {
      eyebrow: 'Contatti',
      title: 'Richiedi informazioni',
      description:
        'Per dettagli sui prodotti CloudLast o per una valutazione preliminare, puoi contattarci tramite il form o via email.',
      privacyBadge: 'Gestione conforme al GDPR',
      form: {
        nameLabel: 'Nome e cognome',
        emailLabel: 'Email',
        messageLabel: 'Messaggio',
        primaryCta: 'Invia richiesta',
      },
      email: 'info@cloudlast.it',
      pec: 'cloudlast@pec.it',
    },

    companyData: {
      eyebrow: 'Dati societari',
      title: 'Informazioni legali e societarie',
      items: [
        {
          label: 'Ragione sociale',
          value: 'CloudLast S.r.l.',
        },
        {
          label: 'Sede legale',
          value: 'Napoli (NA), Viale Maria Bakunin 12',
        }, {
          label: 'Sede Operativa',
          value: 'Presto disponibile',
        },
        {
          label: 'Codice Fiscale / Partita IVA',
          value: '10943575233',
        },
        {
          label: 'Registro delle Imprese',
          value: 'Napoli',
        },
        {
          label: 'PEC',
          value: 'cloudlast@pec.it',
        },
        {
          label: 'Legale rappresentante',
          value: 'Carlo Gennaro',
        },
        {
          label: 'Oggetto sociale (sintesi)',
          value:
            'Sviluppo e gestione di prodotti software proprietari e servizi digitali correlati.',
        },
      ],
    },

    footer: {
      brand: 'Cloudlast',
      legal: [
        <>
          © 2025 <span className="brand">Cloudlast</span>. Tutti i diritti
          riservati.
        </>,
        'CloudLast S.r.l. · Dati societari e informazioni legali disponibili nella sezione dedicata.',
        'Codice etico e policy interne disponibili su richiesta.',
      ],
      links: [
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Cookie Policy',
          href: '/cookie',
        },
        {
          label: 'Codice etico (PDF)',
          href: '/ethics.pdf',
        },
        {
          label: 'Termini di servizio',
          href: '/termini',
        },
        {
          label: 'Dati societari',
          href: '#dati-societari',
        },
      ],
      contacts: [
        {
          label: 'Email: info@cloudlast.it',
          href: 'mailto:info@cloudlast.it',
        },
        {
          label: 'PEC: cloudlast@pec.it',
          href: 'mailto:cloudlast@pec.it',
        },
      ],
    },
  },
  en: {
    hero: {
      eyebrow: 'CloudLast S.r.l.',
      title: 'Reliable, vertical software products',
      description:
        'CloudLast is a product company. We design and build in‑house digital solutions for specific industries, with an engineering approach focused on stability, security and operational continuity.',
      ctaPrimary: 'Contact us',
      ctaSecondary: 'See products',
    },

    services: {
      eyebrow: 'What we do',
      title: 'We build proprietary software with method',
      description:
        'Clear processes and a dedicated technical structure. Each product is maintained over time, with attention to quality and data protection.',
      items: [
        {
          title: 'Proprietary products',
          description:
            'We design and maintain our own software platforms with in‑house roadmaps and lifecycle care.',
          deliverables: [
            'Product roadmap e ongoing maintenance',
            'Controlled updates and release management',
            'Structured support for customers',
          ],
          learnMoreHref: '#prodotti',
          cta: 'Details',
        },
        {
          title: 'Vertical solutions',
          description:
            'Software tailored to specific sectors, with concrete features and an operator‑friendly language.',
          deliverables: [
            'Analysis of real operational workflows',
            'Essential, work‑oriented interfaces',
            'Gradual adoption and focused training',
          ],
          learnMoreHref: '#prodotti',
          cta: 'Details',
        },
        {
          title: 'Engineering approach',
          description:
            'In‑house development, documentation, tests and dependency control ensure stable, reliable products over time.',
          deliverables: [
            'Code quality and regular technical checks',
            'Application security and responsible data handling',
            'Monitoring and operational continuity',
          ],
          learnMoreHref: '#affidabilita',
          cta: 'Learn more',
        },
      ],
    },

    about: {
      eyebrow: 'About us',
      title: 'A product company with in‑house development',
      description:
        'CloudLast operates as an Italian limited company focused on proprietary software products. The team handles analysis, development and operations internally, oriented to quality, stability and security.',
    },

    products: {
      eyebrow: 'Products',
      title: 'CloudLast proprietary software',
      description:
        'Each product stems from concrete industry needs and is managed directly by the CloudLast team.',
      items: [
        {
          name: 'CloudBarber',
          summary:
            'Management for salons and beauty. Schedule, clients, services and daily operations in a single platform.',
          status: 'Release January 2026 · guided access and onboarding by invitation',
          cta: 'Request information',
        },
      ],
    },

    reliability: {
      eyebrow: 'Reliability and security',
      title: 'A solid base for daily operations',
      items: [
        {
          title: 'Reliable infrastructure',
          description:
            'Services hosted on stable platforms, with continuous monitoring and clear procedures.',
        },
        {
          title: 'GDPR and privacy',
          description:
            'We handle data carefully and in compliance with regulations, with processes designed to protect customers.',
        },
        {
          title: 'Business continuity and backups',
          description:
            'Regular backups and continuity checks to ensure operations even in case of incidents.',
        },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Request information',
      description:
        'For details on CloudLast products or a preliminary assessment, contact us via form or email.',
      privacyBadge: 'GDPR‑compliant handling',
      form: {
        nameLabel: 'Full name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        primaryCta: 'Send request',
      },
      email: 'info@cloudlast.it',
      pec: 'cloudlast@pec.it',
    },

    companyData: {
      eyebrow: 'Company data',
      title: 'Legal and company information',
      items: [
        { label: 'Company name', value: 'CloudLast S.r.l.' },
        { label: 'Registered office', value: 'Naples (NA), Viale Maria Bakunin 12' },
        { label: 'Operating office', value: '—' },
        { label: 'Tax ID / VAT', value: '10943575233' },
        { label: 'Companies Register', value: 'Naples' },
        { label: 'PEC', value: 'cloudlast@pec.it' },
        { label: 'Legal representative', value: 'Carlo Gennaro' },
        { label: 'Corporate purpose (summary)', value: 'Development and management of proprietary software products and related digital services.' },
      ],
    },

    footer: {
      brand: 'Cloudlast',
      legal: [
        <>© 2025 <span className="brand">Cloudlast</span>. All rights reserved.</>,
        'CloudLast S.r.l. · Company and legal information available in the dedicated section.',
        'Code of ethics and internal policies available upon request.',
      ],
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookie' },
        { label: 'Code of Ethics (PDF)', href: '/ethics.pdf' },
        { label: 'Terms of service', href: '/termini' },
        { label: 'Company data', href: '#dati-societari' },
      ],
      contacts: [
        { label: 'Email: info@cloudlast.it', href: 'mailto:info@cloudlast.it' },
        { label: 'PEC: cloudlast@pec.it', href: 'mailto:cloudlast@pec.it' },
      ],
    },
  },
}
