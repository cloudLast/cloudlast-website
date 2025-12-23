import React from 'react'

export const copy = {
  it: {
    hero: {
      eyebrow: 'Think cloud. Build last.',
      title: 'Cloud e AI solidi, pronti per crescere',
      description:
        'Cloudlast realizza siti web, e-commerce e app mobile ospitati in cloud: soluzioni digitali accessibili via internet, non servizi di archiviazione personale. Ci occupiamo noi degli aspetti tecnici, senza installazioni complesse per il cliente, e integriamo l’AI solo dove porta valore misurabile.',
      ctaPrimary: 'Contattami',
      ctaSecondary: 'Guarda casi',
      highlights: [
        { label: 'Anni di esperienza', value: '6+' },
        { label: 'Certificazioni cloud', value: '3' },
        { label: 'Progetti IT complessi gestiti end-to-end', value: '30+' },
        {
          label:
            'Pubblicazioni su Apple Store e Google Play per visibilità globale',
          value: '2+',
        },
      ],
      founder: {
        name: 'Carlo Gennaro',
        role: 'Founder & Cloud / AI Engineer',
        linkedin: 'https://www.linkedin.com/in/carlo-gennaro/',
        initials: 'CG',
      },
    },

    services: {
      eyebrow: 'Servizi',
      title: 'Soluzioni digitali gestite nel tempo',
      description:
        'Progettiamo e seguiamo siti web, e-commerce e app mobile in cloud. Per noi “cloud” significa servizi online affidabili e raggiungibili ovunque, che non richiedono server o configurazioni a carico del cliente e che manteniamo stabili nel tempo.',
      items: [
        {
          title: 'Cloud e piattaforme digitali',
          description:
            'Piattaforme su AWS pensate per ospitare servizi online, con ambienti separati e procedure di rilascio curate da Cloudlast.',
          deliverables: [
            'Architettura cloud affidabile e monitorata',
            'Ambienti di test e produzione controllati',
            'Procedure di rilascio e sicurezza documentate',
          ],
          learnMoreHref: '#cloud-platform',
          cta: 'Scopri',
        },
        {
          title: 'AI applicata ai servizi digitali',
          description:
            'Integriamo AI in modo responsabile per migliorare prodotti e processi, con controlli chiari su sicurezza e affidabilità.',
          deliverables: [
            'Assistenti e raccomandazioni guidate dai dati',
            'Controlli e monitoraggio per un uso sicuro dell’AI',
            'Inserimento nei flussi digitali esistenti',
          ],
          learnMoreHref: '#ai-sistemi',
          cta: 'Scopri',
        },
        {
          title: 'Affidabilità operativa e supporto continuo',
          description:
            'Gestione nel tempo di stabilità, costi e processi, per mantenere online i servizi e accompagnare i team.',
          deliverables: [
            'Verifiche architetturali e piani di resilienza',
            'Ottimizzazione dei costi e della capacità',
            'Affiancamento a team e leadership di prodotto',
          ],
          learnMoreHref: '#affidabilita',
          cta: 'Parla con noi',
        },
      ],
    },

    about: {
      eyebrow: 'Chi siamo',
      title: 'Ingegneria cloud e AI, con le persone al centro',
      description: (
        <>
          <span className="brand">Cloudlast</span> è una realtà founder-led guidata tecnicamente da{' '}
          <a
            href="https://www.linkedin.com/in/carlo-gennaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-200 hover:text-sky-400 hover:underline transition"
          >
            Carlo Gennaro
          </a>
          . Lavoriamo su soluzioni cloud intese come servizi digitali accessibili via internet e gestiti da noi, non come archivi personali. Uniamo cloud engineering e AI applicata con metodo, documentazione e attenzione alle persone che poi useranno e governeranno le piattaforme.
        </>
      ),
    },

    contact: {
      eyebrow: 'Contatti',
      title: 'Parliamo del tuo prossimo progetto',
      description:
        'Se stai valutando come portare online un servizio o rinnovare una piattaforma esistente, possiamo organizzare una breve call per allineare obiettivi e priorità.',
      promise: 'Risposta entro 24h',
      privacyBadge: 'Privacy by design · GDPR-ready',
      form: {
        nameLabel: 'Nome e cognome',
        emailLabel: 'Email di lavoro',
        roleLabel: 'Ruolo',
        projectLabel: 'Tema o contesto del progetto',
        primaryCta: 'Richiedi contatto',
        secondaryCta: 'Scrivi su WhatsApp',
      },
      email: 'info@cloudlast.it',
      whatsapp:
        'https://wa.me/393204255705?text=Ciao%20Cloudlast%2C%20vorrei%20parlare%20di%20un%20progetto',
      booking: {
        title: 'Call su Microsoft Teams',
        description:
          'Le call avvengono su Microsoft Teams: nessuna installazione richiesta, link fornito subito dopo il primo contatto.',
        secondary:
          'Per comunicazioni rapide o informali, puoi scriverci direttamente su WhatsApp.',
      },
    },
    results: {
      eyebrow: 'Risultati',
      title: 'Risultati misurabili, servizi sempre online',
      description:
        'Esempi di traguardi raggiunti con clienti che ci hanno affidato le proprie piattaforme digitali in cloud, con attenzione a stabilità e costi.',
      badges: [
        { label: 'Google Developer Program' },
        { label: 'Apple Developer Program' },
        {
          label:
            'Startup innovativa regolarmente iscritta al Registro delle Imprese',
        },
      ],
      items: [
        {
          client: 'SaaS B2B',
          metric: '+38% velocità di rilascio',
          outcome:
            'Rilasci frequenti su AWS con ambienti separati e controllati.',
          detail: 'Automazione documentata e condivisa',
        },
        {
          client: 'E-commerce',
          metric: '-27% costi cloud',
          outcome: 'Ottimizzazione dell’infrastruttura e del lifecycle software.',
          detail:
            'Monitoraggio dei costi integrato nei processi di gestione.',
        },
        {
          client: 'Scaleup AI',
          metric: '99.95% uptime servizi AI',
          outcome:
            'Architettura osservabile con obiettivi di servizio chiari.',
          detail:
            'Ridondanza geografica e protezione dalle interruzioni',
        },
        {
          client: 'Banca digitale',
          metric: 'ISO-ready in 6 settimane',
          outcome:
            'Piattaforma rafforzata con logging centralizzato e procedure chiare.',
          detail:
            'Controlli documentati e tracciabilità completa',
        },
      ],
    },

    footer: {
      brand: 'Cloudlast',
      ctas: [
        {
          label: 'Prenota una call',
          href: '#contatti',
        },
        {
          label: 'Scrivici',
          href: 'mailto:info@cloudlast.it',
        },
      ],
      legal: [
        <>
          © 2025 <span className="brand">Cloudlast</span>. Tutti i diritti
          riservati.
        </>,
        'P. IVA, sede operativa e iscrizione alla Camera di Commercio in fase di completamento.',
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
      ],
      contacts: [
        {
          label: 'WhatsApp',
          href: 'https://wa.me/393204255705',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/cloudlast',
        },
        {
          label: 'Email',
          href: 'mailto:info@cloudlast.it',
        },
      ],
      note:
        'Preferisci partire in modo informale? Un messaggio va benissimo, anche solo per orientarti.',
    },
  },
}
