import type { Dictionary } from './ar';

export const en: Dictionary = {
  meta: {
    title: 'Treasure Systems | We Turn Business Processes Into Systems',
    description:
      'Treasure Systems: we build AI and automation systems for e-commerce stores and marketing agencies in Algeria.',
  },
  nav: {
    services: 'Services',
    work: 'Work',
    process: 'Process',
    book: 'Book a session',
    toggle: 'AR',
    menu: 'Menu',
  },
  hero: {
    label: 'We Turn',
    line1: 'Business Processes',
    line2: 'Into Systems',
    description:
      'We build AI and automation systems for e-commerce stores and marketing agencies in Algeria. Any repetitive work can run on its own.',
    cta: 'Book a study session',
    scrollHint: 'Move your mouse or finger to scrub the scene',
  },
  about: {
    text: 'At Treasure Systems we turn the daily operations of your business into systems that run on their own. We start by understanding your work, surface the problems that cost you time and money, then build an AI and automation solution tailored to you. Instant replies, organized orders, leads that get followed up, and your data in one place.',
    founder: 'Elkenz Ayoub — Founder, AI Automation',
  },
  metrics: {
    items: [
      { prefix: '', value: '24/7', label: 'instant replies, non-stop' },
      { prefix: '', value: '5', label: 'steps from study to delivery' },
      { prefix: 'Up to', value: '80%', label: 'of repetitive work we take off your plate' },
    ],
  },
  services: {
    heading: 'Services',
    items: [
      {
        title: 'Chatbot for stores',
        tag: 'Order Wise',
        description:
          'Replies to your customers instantly, creates orders, organizes them in a CRM and alerts you.',
      },
      {
        title: 'Lead qualification & follow-up',
        tag: 'Lead Wise',
        description:
          'Scores every lead (hot, warm, cold), alerts your team on Telegram, and follows up with the rest.',
      },
      {
        title: 'AI agents',
        tag: 'AI Agents',
        description:
          'Email, voice and content agents built on n8n and connected to your tools.',
      },
      {
        title: 'Automation & data',
        tag: 'Automation',
        description:
          'We turn repetitive work into automated workflows, with your data in one place.',
      },
    ],
  },
  trust: {
    eyebrow: 'Why businesses choose us',
    heading: 'Built for operational clarity and measurable business value.',
    description:
      'We combine discovery, workflow design, and implementation into practical systems that reduce repetitive work, speed up decisions, and keep teams aligned.',
    bullets: ['Discovery-first scoping', 'Clean workflow design', 'Implementation and iterations'],
    cta: 'Start a discovery call',
    cards: [
      {
        title: 'AI-first design',
        description: 'We design systems around business goals, not generic automation templates.',
      },
      {
        title: 'Reliable integration',
        description: 'We connect the tools your teams already use without adding unnecessary complexity.',
      },
      {
        title: 'Operational clarity',
        description: 'Every workflow is structured so actions, alerts, and ownership remain clear.',
      },
    ],
  },
  projects: {
    heading: 'Our Work',
    footnote: 'Some details are shared during the session only to protect our clients’ privacy.',
    visit: 'Visit',
    inProgress: 'In progress',
    items: [
      {
        name: 'Lead Wise',
        type: 'Lead qualification',
        description: 'Scores leads and sends alerts to your team on Telegram.',
        tags: ['Lead qualification', 'Telegram'],
        link: 'https://instagram.com/leadwise15',
        inProgress: false,
      },
      {
        name: 'MedWear Chatbot',
        type: 'AI Chatbot',
        description: 'A smart chatbot for a clothing store that answers customers and helps them order.',
        tags: ['AI Chatbot', 'E-commerce'],
        link: 'https://instagram.com/med___wear',
        inProgress: false,
      },
      {
        name: 'Email AI Agent',
        type: 'n8n agent',
        description:
          'An agent for a car dealership manager: drafts replies in Gmail and sends them to Telegram for confirmation or edits.',
        tags: ['n8n', 'Gmail', 'Telegram'],
        link: '',
        inProgress: false,
      },
      {
        name: 'Voice Agent',
        type: 'Vapi + n8n',
        description: 'A voice agent that takes calls and books appointments in Google Calendar.',
        tags: ['Vapi', 'n8n', 'Google Calendar'],
        link: '',
        inProgress: false,
      },
      {
        name: 'Post Wise Autopilot',
        type: 'Content agent',
        description: 'A content agent that plans and drafts posts automatically.',
        tags: ['Content', 'Automation'],
        link: '',
        inProgress: true,
      },
    ],
  },
  process: {
    heading: 'How We Work',
    steps: [
      { number: '01', title: 'We study your business', description: 'We start with a session to understand how you work, which tools you use, and where time gets lost.' },
      { number: '02', title: 'We surface the problems', description: 'We identify the repetitive tasks and bottlenecks that cost the most and rank them by impact.' },
      { number: '03', title: 'We build the system', description: 'We design the AI and automation solution and connect it to the tools you already use.' },
      { number: '04', title: 'We test and refine', description: 'We run it on real scenarios and fix anything that needs improving before launch.' },
      { number: '05', title: 'We deliver and evolve', description: 'We hand over the system, train your team to run it, and keep improving it as your business grows.' },
    ],
  },
  footer: {
    tagline: 'We turn business processes into systems',
    navHeading: 'Navigate',
    contactHeading: 'Contact',
    rights: 'All rights reserved',
    links: {
      services: 'Services',
      work: 'Work',
      process: 'Process',
      book: 'Book a session',
    },
    contact: {
      instagram: 'Instagram',
      email: 'treasuresystems15@gmail.com',
      phone: '0662 54 20 06',
      whatsapp: 'WhatsApp',
    },
  },
  booking: {
    title: 'Book a study session',
    subtitle: 'Pick a day and time, and we will reach out to confirm the session.',
    close: 'Close',
    fields: {
      name: 'Name',
      namePlaceholder: 'Your full name',
      phone: 'Phone number (WhatsApp)',
      phonePlaceholder: '0662 54 20 06',
      businessType: 'Business type',
      interest: 'What are you interested in?',
      day: 'Day',
      time: 'Time (Algiers time)',
      note: 'Note (optional)',
      notePlaceholder: 'Tell us briefly about your business and what you want to automate',
      consent: 'I agree to my data being used to contact me about this booking only',
      submit: 'Confirm booking',
      submitting: 'Sending...',
      taken: 'Taken',
      noDays: 'No days are available right now.',
      loadingSlots: 'Loading available times...',
      selectDay: 'Pick a day to see available times',
    },
    businessTypes: [
      { value: 'ecommerce', label: 'E-commerce store' },
      { value: 'agency', label: 'Marketing agency' },
      { value: 'other', label: 'Other' },
    ],
    interests: [
      { value: 'order_wise', label: 'Store chatbot' },
      { value: 'lead_wise', label: 'Lead follow-up' },
      { value: 'custom', label: 'Custom solution' },
      { value: 'not_sure', label: 'Not sure yet' },
    ],
    errors: {
      name: 'Enter a name between 2 and 80 characters.',
      phone: 'Enter a valid phone number (8 to 20 digits).',
      day: 'Pick a day.',
      slot: 'Pick a time.',
      consent: 'You must agree before sending the request.',
      message: 'The note must not exceed 600 characters.',
      slotsLoad: 'Could not load available times. Please try again.',
    },
    slotTaken: 'That slot was just taken, pick another.',
    failed: 'Something went wrong while sending your booking. Please try again.',
    success: {
      title: 'Request received',
      body: 'Thank you. We will contact you on WhatsApp to confirm the session.',
      done: 'Done',
    },
  },
};
