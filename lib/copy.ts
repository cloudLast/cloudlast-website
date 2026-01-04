export type Service = {
  title: string
  description: string
  deliverables: string[]
}

export type Copy = {
  hero: {
    eyebrow: string
    title: string
    description: string
    ctaPrimary: string
  }
  services: {
    title: string
    description: string
    items: Service[]
  }
  reliability?: {
    eyebrow: string
    title: string
    items: { title: string; description?: string }[]
  }
  contact?: {
    eyebrow: string
    title: string
    description: string
    email: string
    privacyBadge: string
  }
  companyData: {
    title: string
    eyebrow?: string
    items: { label: string; value: string }[]
  }
  footer?: {
    legal?: string[]
    links?: { href: string; label: string }[]
    contacts?: { href: string; label: string }[]
  }
}

export const copy: Record<'it' | 'en', Copy> = {
  it: {
    hero: {
      eyebrow: 'Società di prodotto',
      title: 'Think cloud. Build last.',
      description:
        'Siti web e applicazioni realizzati con attenzione a stabilità, sicurezza e costi chiari. Soluzioni tecniche proporzionate, pensate per durare.',
      ctaPrimary: 'Richiedi contatto',
    },

    services: {
      title: 'Cosa facciamo',
      description:
        'Progettiamo, sviluppiamo e gestiamo siti web e applicazioni per aziende e professionisti che cercano soluzioni affidabili, non complicazioni.',
      items: [
        {
          title: 'Progettazione',
          description:
            'Analizziamo il contesto e definiamo come deve funzionare il sito o l’app prima di iniziare lo sviluppo.',
          deliverables: [
            'Struttura tecnica',
            'Scelte progettuali',
            'Costi stimati',
          ],
        },
        {
          title: 'Sviluppo',
          description:
            'Sviluppiamo siti web e applicazioni in modo progressivo, con verifiche continue e codice manutenibile.',
          deliverables: [
            'Implementazione funzionale',
            'Test di base',
            'Automazioni essenziali',
          ],
        },
        {
          title: 'Manutenzione e gestione',
          description:
            'Ci occupiamo della gestione tecnica nel tempo: aggiornamenti, sicurezza e continuità del servizio.',
          deliverables: [
            'Backup e ripristino',
            'Aggiornamenti periodici',
            'Monitoraggio essenziale',
          ],
        },
      ],
    },

    reliability: {
      eyebrow: 'Affidabilità',
      title: 'Approccio tecnico',
      items: [
        {
          title: 'Scelte semplici e verificabili',
          description:
            'Preferiamo soluzioni comprensibili e documentate.',
        },
        {
          title: 'Ambienti separati',
          description:
            'Test e produzione sono distinti per ridurre errori e interruzioni.',
        },
        {
          title: 'Controllo e tracciabilità',
          description:
            'I sistemi sono osservabili e i problemi analizzabili.',
        },
        {
          title: 'Prevenzione prima dell’urgenza',
          description:
            'Backup e procedure di recupero sono previsti, non improvvisati.',
        },
      ],
    },

    contact: {
      eyebrow: 'Contatti',
      title: 'Parliamone',
      description:
        'Puoi scriverci per una richiesta o una valutazione iniziale. Rispondiamo entro 1–2 giorni lavorativi.',
      email: 'carlo.gennaro@cloudlast.io',
      privacyBadge:
        'I dati vengono usati solo per rispondere alla richiesta. Nessuna profilazione, nessuna cessione a terzi.',
    },

    companyData: {
      title: 'Dati societari',
      items: [
        { label: 'Ragione sociale', value: 'Cloudlast' },
        { label: 'P. IVA', value: '10943751213' },
        { label: 'Sede', value: 'Italia, Napoli' },
        { label: 'Email', value: 'info@cloudlast.it' },
      ],
    },

    footer: {
      legal: ['Cloudlast — siti web e applicazioni affidabili.'],
      links: [
        { href: '/privacy', label: 'Privacy' },
        { href: '/info', label: 'Informazioni tecniche' },
      ],
      contacts: [
        { href: 'mailto:info@cloudlast.it', label: 'info@cloudlast.it' },
        { href: 'https://wa.me/393204255705', label: 'WhatsApp' },
      ],
    },
  },

  en: {
    hero: {
      eyebrow: 'Product company',
      title: 'Think cloud. Build last.',
      description:
        'Websites and applications built with a focus on stability, security and clear costs. Proportionate technical solutions designed to last.',
      ctaPrimary: 'Request contact',
    },

    services: {
      title: 'What we do',
      description:
        'We design, build and operate websites and applications for companies and professionals who value reliability over complexity.',
      items: [
        {
          title: 'Design',
          description:
            'We analyse the context and define how the website or application should work before development starts.',
          deliverables: [
            'Technical structure',
            'Design decisions',
            'Cost estimates',
          ],
        },
        {
          title: 'Development',
          description:
            'We build websites and applications progressively, with continuous checks and maintainable code.',
          deliverables: [
            'Functional implementation',
            'Basic testing',
            'Essential automation',
          ],
        },
        {
          title: 'Maintenance and management',
          description:
            'We handle technical maintenance over time: updates, security and service continuity.',
          deliverables: [
            'Backup and restore',
            'Periodic updates',
            'Basic monitoring',
          ],
        },
      ],
    },

    reliability: {
      eyebrow: 'Reliability',
      title: 'Technical approach',
      items: [
        {
          title: 'Simple and verifiable choices',
          description:
            'We favour understandable and documented solutions.',
        },
        {
          title: 'Separate environments',
          description:
            'Testing and production are kept separate to reduce risk.',
        },
        {
          title: 'Control and traceability',
          description:
            'Systems are observable and issues can be analysed.',
        },
        {
          title: 'Prevention over urgency',
          description:
            'Backups and recovery procedures are planned in advance.',
        },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      description:
        'Get in touch for an initial request or evaluation. We reply within 1–2 business days.',
      email: 'carlo.gennaro@cloudlast.io',
      privacyBadge:
        'Data is used only to reply to your request. No profiling, no third-party sharing.',
    },

    companyData: {
      title: 'Company data',
      items: [
        { label: 'Company name', value: 'Cloudlast' },
        { label: 'VAT', value: '10943751213' },
        { label: 'HQ', value: 'Naples, Italy' },
        { label: 'Email', value: 'info@cloudlast.it' },
      ],
    },

    footer: {
      legal: ['Cloudlast — reliable websites and applications.'],
      links: [
        { href: '/privacy?lang=en', label: 'Privacy' },
        { href: '/info?lang=en', label: 'Technical information' },
      ],
      contacts: [
        { href: 'mailto:info@cloudlast.it', label: 'info@cloudlast.it' },
        { href: 'https://wa.me/393204255705', label: 'WhatsApp' },
      ],
    },
  },
}
