import React from 'react'

export const copy = {
  it: {
    hero: {
      eyebrow: 'Think cloud. Build last.',
      title: 'Cloud e AI progettati per durare',
      description:
        'Progetto e realizzo soluzioni cloud moderne che integrano intelligenza artificiale in modo concreto, sostenibile e responsabile.',
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
      title: 'Dall’infrastruttura all’intelligenza applicata',
      description:
        'Supporto continuo su piattaforme cloud, sistemi intelligenti e processi di prodotto, dall’idea alla messa in produzione.',
      items: [
        {
          title: 'Cloud & Platform Engineering',
          description:
            'Progettazione di piattaforme cloud su AWS, infrastruttura as code e ambienti pensati per crescere in modo sicuro e controllato.',
          deliverables: [
            'Landing zone sicura e multi-account',
            'Pipeline CI/CD con IaC',
            'Observability by design',
          ],
          learnMoreHref: '#cloud-platform',
          cta: 'Scopri',
        },
        {
          title: 'AI & sistemi intelligenti',
          description:
            'Integrazione di sistemi AI con attenzione a governance, osservabilità e sostenibilità operativa.',
          deliverables: [
            'Prototipi LLM e agent',
            'Guardrail e monitoring AI',
            'Integrazione nei processi di delivery',
          ],
          learnMoreHref: '#ai-sistemi',
          cta: 'Scopri',
        },
        {
          title: 'Affidabilità, costi e coaching',
          description:
            'Supporto su stabilità del prodotto, ottimizzazione dei costi e maturità dei processi di lavoro.',
          deliverables: [
            'Well-Architected review',
            'Piani di riduzione costi',
            'Coaching a team e leadership',
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
          <span className="brand">Cloudlast</span> è una realtà founder-led,
          guidata tecnicamente da{' '}
          <a
            href="https://www.linkedin.com/in/carlo-gennaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-200 hover:text-sky-400 hover:underline transition"
          >
            Carlo Gennaro
          </a>
          . Lavoriamo all’intersezione tra cloud engineering e intelligenza
          artificiale applicata, con un approccio pragmatico, responsabile e
          orientato al lungo periodo.
        </>
      ),
    },

contact: {
  eyebrow: 'Contatti',
  title: 'Parliamo del tuo prossimo progetto',
  description:
    'Se stai valutando cloud o AI e vuoi capire da dove partire, possiamo organizzare una breve call per allineare obiettivi e priorità.',
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
      'Le call avvengono su Microsoft Teams e vengono concordate via email dopo il primo contatto, in base alle disponibilità.',
    secondary:
      'Per comunicazioni rapide o informali, puoi scriverci direttamente su WhatsApp.',
  },
},
    results: {
      eyebrow: 'Risultati',
      title: 'Impatto misurabile, progetti che crescono',
      description:
        'Numeri e traguardi concreti raggiunti con i clienti: piattaforme più resilienti, stabili e con costi sotto controllo.',
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
            'Delivery continuo su AWS con pipeline IaC e ambienti isolati.',
          detail: 'L’automazione come alleato',
        },
        {
          client: 'E-commerce',
          metric: '-27% costi cloud',
          outcome: 'Ottimizzazione dell’infrastruttura e del lifecycle software.',
          detail:
            'Alert e dashboard di spesa integrate nei flussi operativi.',
        },
        {
          client: 'Scaleup AI',
          metric: '99.95% uptime servizi AI',
          outcome:
            'Architettura osservabile con SLO e circuit breaker per i modelli.',
          detail:
            'Failover multi-AZ e caching dei prompt per ridurre le latenze.',
        },
        {
          client: 'Banca digitale',
          metric: 'ISO-ready in 6 settimane',
          outcome:
            'Hardening cloud, logging centralizzato e playbook di risposta.',
          detail:
            'Policy as code, onboarding sicuro e audit trail completo.',
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
