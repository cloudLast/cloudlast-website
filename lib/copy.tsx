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
            'Aggiornamenti e gestione controllata delle release',
            'Assistenza strutturata per clienti selezionati',
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
          status: 'Rollout controllato · accesso su invito',
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
}
