export interface ProjectEntry {
  id: string
  title: string
  tags: string[]
  description: string
  outcomes: string[]
  detailUrl?: string
  fullDetail?: {
    challenge: string
    approach: string
    impact: string
    tools?: string[]
  }
}

export const projectEntries: ProjectEntry[] = [
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    tags: ['HR Analytics', 'Data Visualisation', 'Workforce Metrics'],
    description:
      'Built a centralised dashboard to visualise key workforce KPIs including attrition rates, headcount trends, and engagement scores. Integrated data from multiple HRIS sources to provide a single pane of glass for HR leadership. Enabled real-time monitoring of critical talent metrics to support proactive decision-making.',
    outcomes: [
      '30% faster reporting cycle for monthly HR reviews',
      'Identified 3 high-attrition risk departments enabling targeted interventions',
      'Adopted by 5 HR team members as the primary reporting tool',
      'Reduced manual data consolidation effort by 4 hours per week',
    ],
    fullDetail: {
      challenge:
        'The HR team was drowning in fragmented spreadsheets, manual monthly reports took 2–3 days, and leadership lacked visibility into live workforce trends like attrition risk and headcount gaps.',
      approach:
        'Designed a centralised Power BI dashboard connecting HRIS, payroll, and engagement survey data sources. Built calculated measures for attrition rate, time-to-fill, and engagement index. Trained 5 HR team members on self-serve filtering and drill-down.',
      impact:
        'Monthly HR reporting cycle reduced from 3 days to 4 hours. Three high-attrition departments were identified early, enabling targeted retention campaigns. The dashboard became the primary tool for monthly leadership HR reviews.',
      tools: ['Power BI', 'Excel', 'HRIS Integration', 'DAX'],
    },
  },
  {
    id: 'talent-acquisition-optimisation',
    title: 'Talent Acquisition Optimisation',
    tags: ['Talent Management', 'Recruitment', 'Process Improvement'],
    description:
      'Led end-to-end redesign of the recruitment funnel, introducing structured interview frameworks and optimised ATS configuration to reduce hiring friction. Mapped the candidate journey to identify bottlenecks and implemented standardised scorecards for consistent evaluation. Trained hiring managers on evidence-based interviewing techniques to improve selection quality.',
    outcomes: [
      '25% reduction in average time-to-hire across roles',
      'Improved candidate experience score by 18% in post-process surveys',
      'Increased offer acceptance rate from 72% to 89%',
      'Reduced interview-to-offer cycle from 14 days to 8 days',
    ],
    fullDetail: {
      challenge:
        'Average time-to-hire was 42 days, offer acceptance rate was low at 72%, and hiring managers were using inconsistent evaluation criteria — leading to poor quality-of-hire and candidate dropouts.',
      approach:
        'Conducted a full-funnel audit mapping every candidate touchpoint. Restructured job descriptions, introduced structured interview scorecards, configured ATS automation for scheduling and tracking. Ran hiring manager workshops on evidence-based interviewing.',
      impact:
        'Time-to-hire dropped from 42 to 31 days. Offer acceptance climbed to 89%. Candidate experience survey scores improved by 18 points. Standardised scorecards reduced bias in selection conversations.',
      tools: ['ATS (Applicant Tracking System)', 'Structured Interviewing', 'Process Mapping', 'Survey Design'],
    },
  },
  {
    id: 'employee-engagement-programme',
    title: 'Employee Engagement Programme',
    tags: ['Employee Engagement', 'Survey Design', 'Action Planning'],
    description:
      'Designed and administered a company-wide engagement survey using validated psychometric scales. Analysed quantitative and qualitative results to surface key drivers of engagement and disengagement. Facilitated departmental action-planning workshops, translating survey insights into targeted improvement initiatives with measurable 90-day milestones.',
    outcomes: [
      '78% survey participation rate, up from 52% the previous cycle',
      '12-point engagement score increase over 6 months post-intervention',
      'Delivered 8 departmental action plans with defined owners and timelines',
      'Reduced voluntary turnover by 9% in participating teams',
    ],
    fullDetail: {
      challenge:
        'Employee engagement was unmeasured and anecdotal. No formal mechanism existed to capture employee sentiment, and voluntary turnover had been climbing year-over-year without clear root causes.',
      approach:
        'Designed a validated 40-question engagement survey covering communication, leadership, growth, and work-life balance. Launched with a communication campaign to maximise participation. Analysed results by department and tenure. Facilitated action-planning workshops with each team lead.',
      impact:
        'Participation rate jumped from 52% to 78%. Engagement score improved 12 points in 6 months. Eight departmental action plans were created and tracked. Voluntary turnover in participating teams fell by 9%.',
      tools: ['Survey Design', 'SPSS / Excel Analytics', 'Workshop Facilitation', 'Action Planning Frameworks'],
    },
  },
  {
    id: 'performance-management-redesign',
    title: 'Performance Management Redesign',
    tags: ['Performance Management', 'Competency Frameworks', 'L&D'],
    description:
      'Redesigned the annual performance review cycle into a continuous competency-based feedback model aligned to organisational values. Collaborated with L&D to map competency gaps to targeted learning pathways. Piloted the new framework with two business units before a full organisation-wide rollout, iterating on design based on feedback.',
    outcomes: [
      'Manager satisfaction with performance process up 22%',
      'Reduced review completion lag from 6 weeks to 2 weeks',
      '85% of employees received at least one structured feedback session per quarter',
      'Linked competency scores to L&D enrolments, increasing training uptake by 30%',
    ],
    fullDetail: {
      challenge:
        'The existing annual review process was dreaded by managers and employees alike — it was backward-looking, compliance-driven, and disconnected from day-to-day work. Completion rates were poor and review quality was inconsistent.',
      approach:
        'Co-designed a continuous feedback model with department heads. Built competency frameworks mapped to role levels. Replaced annual forms with quarterly check-in templates. Piloted in 2 business units for one cycle, gathered feedback, and refined before full rollout.',
      impact:
        'Manager satisfaction with the performance process increased 22%. Review completion lag shortened from 6 weeks to 2 weeks. 85% of employees received at least one structured feedback session per quarter. L&D enrolment linked to competency scores grew by 30%.',
      tools: ['Competency Framework Design', 'Performance Management Systems', 'Change Management', 'Training & Facilitation'],
    },
  },
  {
    id: 'onboarding-experience-redesign',
    title: 'Onboarding Experience Redesign',
    tags: ['Onboarding', 'Employee Experience', 'Process Design'],
    description:
      'Restructured the onboarding journey from a one-week orientation into a structured 90-day programme with role-specific learning tracks, buddy assignments, and milestone check-ins. Developed a digital onboarding portal consolidating resources, compliance training, and cultural orientation. Gathered new-hire feedback at 30, 60, and 90-day marks to continuously refine the experience.',
    outcomes: [
      'Time-to-productivity reduced by 3 weeks on average',
      'New-hire 90-day retention improved by 15%',
      'New-hire satisfaction score rose from 3.4 to 4.6 out of 5',
      'Reduced HR onboarding administration effort by 35%',
    ],
    fullDetail: {
      challenge:
        'New hires were completing a 1-week orientation and then largely left to figure things out. Time-to-productivity was long, early attrition was high, and new hire satisfaction scores were below benchmark.',
      approach:
        'Redesigned onboarding as a structured 90-day programme: Week 1 for culture and systems, Month 1 for role immersion, Months 2–3 for performance milestones. Built a digital resource portal. Assigned buddy pairs. Introduced 30/60/90-day check-in conversations between managers and new hires.',
      impact:
        'Time-to-productivity reduced by 3 weeks. 90-day retention improved by 15%. New hire satisfaction score rose from 3.4 to 4.6 out of 5. HR admin effort for onboarding reduced by 35%.',
      tools: ['Journey Mapping', 'Digital Portal Design', 'Buddy Programme', 'Manager Enablement'],
    },
  },
  {
    id: 'workforce-planning-analytics',
    title: 'Workforce Planning & Analytics',
    tags: ['Workforce Planning', 'Attrition Analysis', 'Forecasting'],
    description:
      'Conducted headcount forecasting and attrition modelling using historical HR data to support strategic hiring decisions over a 12-month planning horizon. Built predictive models to identify roles and departments at risk of attrition, enabling proactive backfill planning. Presented workforce scenarios to senior leadership to inform budget allocation for talent acquisition.',
    outcomes: [
      'Forecasting accuracy within 8% of actual headcount outcomes',
      'Enabled proactive backfill planning 60 days in advance of vacancies',
      'Identified 2 critical role families with high flight-risk profiles',
      'Reduced unplanned vacancy costs by an estimated 20%',
    ],
    fullDetail: {
      challenge:
        'The business was making reactive hiring decisions — backfilling roles only after they became vacant, with no visibility into which teams were at risk. Budget planning for headcount was largely guesswork.',
      approach:
        'Built attrition prediction models using 3 years of HR data: tenure, engagement scores, performance ratings, and department. Created 12-month headcount scenarios (base, optimistic, conservative) for leadership planning. Presented findings in a quarterly workforce review cadence.',
      impact:
        'Forecasting accuracy was within 8% of actual headcount outcomes. Proactive backfill planning began 60 days before anticipated vacancies. Two critical role families with high flight risk were identified and retention plans activated. Estimated 20% reduction in unplanned vacancy costs.',
      tools: ['Predictive Analytics', 'Python / Excel Modelling', 'Scenario Planning', 'Executive Presentations'],
    },
  },
]
