export interface SkillItem {
  label: string
  variant: 'gold' | 'teal' | 'ghost'
}

export const skills: SkillItem[] = [
  { label: 'Talent Acquisition', variant: 'gold' },
  { label: 'HR Analytics', variant: 'teal' },
  { label: 'Employee Engagement', variant: 'gold' },
  { label: 'Performance Management', variant: 'teal' },
  { label: 'Organizational Development', variant: 'gold' },
  { label: 'Business Analytics', variant: 'teal' },
  { label: 'HRIS', variant: 'ghost' },
  { label: 'Compensation & Benefits', variant: 'ghost' },
  { label: 'Learning & Development', variant: 'gold' },
  { label: 'Workforce Planning', variant: 'teal' },
]
