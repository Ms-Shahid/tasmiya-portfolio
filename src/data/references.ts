export interface Reference {
  id: string
  quote: string
  name: string
  title: string
  company: string
}

export const references: Reference[] = [
  {
    id: 'ref-1',
    quote:
      'Tasmiya demonstrated exceptional analytical thinking and a genuine passion for people-centric HR practices throughout her MBA programme. Her ability to translate data insights into actionable HR strategies was consistently impressive, and her collaborative approach made her a standout among her cohort.',
    name: 'Prof. Rajesh Kumar',
    title: 'Programme Director, MBA — HR & Business Analytics',
    company: 'IFIM Business School',
  },
  {
    id: 'ref-2',
    quote:
      'Tasmiya joined us as an HR intern and quickly became indispensable to the team. She brought a data-driven mindset to everything — from redesigning our onboarding process to building recruitment dashboards. Her enthusiasm and ability to take ownership of projects with minimal supervision was remarkable.',
    name: 'Priya Nair',
    title: 'Head of People Operations',
    company: 'Leading Technology Company',
  },
  {
    id: 'ref-3',
    quote:
      'What set Tasmiya apart was her ability to connect the dots between people metrics and business outcomes. During her internship, she helped us redesign our engagement survey and the insights she surfaced directly informed our retention strategy for the following year. A truly future-forward HR professional.',
    name: 'Arjun Mehta',
    title: 'HR Business Partner',
    company: 'Bengaluru-based Startup',
  },
]
