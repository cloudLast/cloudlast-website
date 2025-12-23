import React from 'react'

export const copy = {
  it: {
    hero: {
      eyebrow: 'Think cloud. Build last.',
      title: 'Cloud e AI progettati per durare',
      description:
        'Progetto e realizzo soluzioni cloud moderne che integrano intelligenza artificiale in modo concreto, sostenibile e responsabile.',
      ctaPrimary: 'Contattami',
      ctaSecondary: 'Scopri come lavoriamo',
    },

    services: {
      eyebrow: 'Servizi',
      title: 'Dall’infrastruttura all’intelligenza applicata',
      description:
        'Supporto continuo su piattaforme cloud, sistemi intelligenti e processi di prodotto.',
      items: [
        {
          title: 'Cloud & Platform Engineering',
          description:
            'Progettazione di piattaforme cloud su AWS, infrastruttura as code e ambienti pensati per crescere nel tempo.',
        },
        {
          title: 'AI & sistemi intelligenti',
          description:
            'Integrazione di sistemi AI con attenzione a governance, osservabilità e sostenibilità.',
        },
        {
          title: 'Affidabilità, costi e coaching',
          description:
            'Supporto su stabilità del prodotto, ottimizzazione dei costi e processi di lavoro.',
        },
      ],
    },

    about: {
      eyebrow: 'Chi sono',
      title: 'Ingegneria cloud e AI, con le persone al centro',
      description: (
        <>
          <span className="brand">Cloudlast</span> è una realtà founder-led, sotto la guida tecnica di{' '}
          <a
            href="https://www.linkedin.com/in/carlo-gennaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-200 hover:text-sky-400 hover:underline transition"
          >
            Carlo Gennaro
          </a>
          , che lavora all’intersezione tra cloud engineering e intelligenza artificiale applicata.
        </>
      ),
    },

    contact: {
      eyebrow: 'Contatti',
      title: 'Parliamo del tuo prossimo progetto',
      description:
        'Se stai esplorando il cloud o l’AI e vuoi capire da dove partire, possiamo parlarne.',
      cta: 'Scrivimi',
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
        (<>
          © 2025 <span className="brand">Cloudlast</span>. Tutti i diritti riservati.
        </>),
        'P. IVA, Prima sede operativa e Iscrizione alla camera di commercio in arrivo.',
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
        'Scrivici liberamente: anche se non sai da dove partire, ti aiutiamo noi.',
    },
  },
}
