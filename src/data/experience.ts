export interface ExperienceEntry {
  id: string
  type: 'work' | 'education'
  title: string
  organisation: string
  duration: string
  description: string
  startYear: number
}

const rawEntries: ExperienceEntry[] = [
  {
    id: 'mba',
    type: 'education',
    title: 'MBA — Human Resources & Business Analytics',
    organisation: 'IFIM Business School',
    duration: '2022 – 2024',
    description:
      'Post-graduate specialisation combining strategic HR management with data analytics. Developed expertise in talent acquisition, workforce planning, and using analytics to drive evidence-based HR decisions. Graduated with a strong foundation in both the human and quantitative dimensions of organisational management.',
    startYear: 2022,
  },
  {
    id: 'hr-bp-intern',
    type: 'work',
    title: 'HR Business Partner Intern',
    organisation: 'Leading Technology Company',
    duration: '2023 – 2024',
    description:
      'Supported senior HRBPs in partnering with business units across talent acquisition, performance management, and employee engagement initiatives. Assisted in rolling out a competency-based performance review framework, facilitated onboarding programmes for new hires, and contributed to HR analytics reporting using HRIS dashboards to surface actionable workforce insights.',
    startYear: 2023,
  },
  {
    id: 'hr-analyst-intern',
    type: 'work',
    title: 'HR Analyst Intern',
    organisation: 'Bengaluru-based Startup',
    duration: '2022 – 2023',
    description:
      'Contributed to end-to-end recruitment operations, including candidate sourcing, screening, and interview coordination. Designed and administered employee engagement surveys, analysed results, and presented findings to leadership. Built basic workforce reporting dashboards to track headcount, attrition trends, and time-to-hire metrics, gaining hands-on exposure to data-driven HR practices.',
    startYear: 2022,
  },
]

// Sorted by startYear descending (most recent first)
export const experienceEntries: ExperienceEntry[] = [...rawEntries].sort(
  (a, b) => b.startYear - a.startYear
)
