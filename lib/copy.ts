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
      description: 'Stabile, sobrio, verificabile. Soluzioni tecniche proporzionate al contesto e sostenibili nel tempo.',
      ctaPrimary: 'Richiedi contatto',
    },
    services: {
      title: 'Servizi',
      description: 'Progettazione, sviluppo e gestione di piattaforme e servizi con priorità a stabilità, sicurezza e costi chiari.',
      items: [
        {
          title: 'Progettazione tecnica',
          description: 'Scelte comprensibili, documentate e verificabili.',
          deliverables: ['Architettura', 'Piani di capacità', 'Costi previsti'],
        },
        {
          title: 'Sviluppo prodotto',
          description: 'Iterazioni rapide, test e osservabilità.',
          deliverables: ['Backlog operativo', 'CI/CD', 'Metriche'],
        },
        {
          title: 'Gestione operativa',
          description: 'Ambienti separati, backup e aggiornamenti continui.',
          deliverables: ['Runbook', 'Backup e restore', 'Report mensili'],
        },
      ],
    },
    reliability: {
      eyebrow: 'Affidabilità prima del resto',
      title: 'Responsabilità operativa',
      items: [
        { title: 'Least privilege' },
        { title: 'Ambienti separati' },
        { title: 'Logging verificabile' },
        { title: 'Rollback testati' },
      ],
    },
    contact: {
      eyebrow: 'Parliamone',
      title: 'Contatti',
      description: 'Scegli il canale che preferisci. Rispondiamo senza impegno entro 24h.',
      email: 'carlo.gennaro@cloudlast.io',
      privacyBadge: 'Nessuna newsletter o remarketing. Solo conversazioni reali.',
    },
    companyData: {
      title: 'Dati societari',
      items: [
        { label: 'Ragione sociale', value: 'Cloudlast' },
        { label: 'P.IVA', value: '10943751213' },
        { label: 'Sede', value: 'Italia, Napoli' },
        { label: 'Email', value: 'info@cloudlast.it' },
      ],
    },
    footer: {
      legal: [
        'Cloudlast — piattaforme e servizi affidabili.',
      ],
      links: [
        { href: '/privacy', label: 'Privacy' },
        { href: '/info', label: 'Info tecniche' },
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
      description: 'Stable, sober, verifiable. Proportionate technical choices that last over time.',
      ctaPrimary: 'Request contact',
    },
    services: {
      title: 'Services',
      description: 'Design, build and operate platforms with focus on stability, security and clear costs.',
      items: [
        {
          title: 'Technical design',
          description: 'Understandable, documented and verifiable choices.',
          deliverables: ['Architecture', 'Capacity plans', 'Cost forecast'],
        },
        {
          title: 'Product development',
          description: 'Fast iterations, tests and observability.',
          deliverables: ['Operational backlog', 'CI/CD', 'Metrics'],
        },
        {
          title: 'Operations',
          description: 'Separate environments, backups and continuous updates.',
          deliverables: ['Runbook', 'Backup and restore', 'Monthly reports'],
        },
      ],
    },
    reliability: {
      eyebrow: 'Reliability first',
      title: 'Operational responsibility',
      items: [
        { title: 'Least privilege' },
        { title: 'Separate environments' },
        { title: 'Verifiable logging' },
        { title: 'Tested rollbacks' },
      ],
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Contact',
      description: 'Choose your preferred channel. We reply within 24h.',
      email: 'carlo.gennaro@cloudlast.io',
      privacyBadge: 'No newsletters or remarketing. Only real conversations.',
    },
    companyData: {
      title: 'Company data',
      items: [
        { label: 'Company name', value: 'Cloudlast' },
        { label: 'VAT', value: '10943751213' },
        { label: 'HQ', value: 'Naples,Italy' },
        { label: 'Email', value: 'info@cloudlast.it' },
      ],
    },
    footer: {
      legal: [
        'Cloudlast — reliable platforms and services.',
      ],
      links: [
        { href: '/privacy?lang=en', label: 'Privacy' },
        { href: '/info?lang=en', label: 'Technical info' },
      ],
      contacts: [
        { href: 'mailto:info@cloudlast.it', label: 'info@cloudlast.it' },
        { href: 'https://wa.me/393204255705', label: 'WhatsApp' },
      ],
    },
  },
}

