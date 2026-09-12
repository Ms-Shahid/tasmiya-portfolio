import { motion } from 'framer-motion'
import { PageWrapper } from '../components/layout/PageWrapper'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SkillChip } from '../components/ui/SkillChip'
import { skills } from '../data/skills'
import { useReducedMotion } from '../hooks/useReducedMotion'

const chipVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const professionalJourney = [
  {
    company: 'Amazon',
    role: 'Senior HR Associate II',
    bullets: [
      'Managing cost, attrition, talent, diversity and hiring strategies in close partnership with business leaders.',
      'Leading end-to-end global hiring for core workforce across multiple regions.',
      'Managing leadership hiring for corporate teams, 7 business lines and 2 support functions.',
      'Expert in tracking and optimizing talent KPIs across general staffing, IT staffing and SaaS platforms.',
      'Consistently achieved zero escalations with 100% TAT adherence quarter-on-quarter.',
      'Enhanced HR processes by implementing AI-driven assessment tools, HR round Interview management systems and automation workflows.',
      'Achieved 50% diversity hiring through inclusive sourcing strategies.',
    ],
  },
  {
    company: 'Quess Corp Limited',
    role: 'HR Consultant',
    bullets: [
      'Managed RPO programs end-to-end and consistently exceeded hiring SLAs.',
      'Redefined KPIs to reduce attrition and improve hiring efficiency.',
      'Achieved 3:1 submit-to-offer ratio through optimized sourcing mix and ROI-driven strategy.',
      'Strengthened employer branding and employee value proposition.',
      'Led global stakeholder management across multiple geographies.',
      'Agile and strategic decision-maker with strong client relationship skills.',
    ],
  },
  {
    company: 'Codelinear',
    role: 'HR Analyst - Internship',
    bullets: [
      'Conducted workforce analytics and recruitment data analysis.',
      'Built HR dashboards and performance reports to support strategic decisions.',
    ],
  },
]

const Experience = () => {
  const reducedMotion = useReducedMotion()

  return (
    <PageWrapper>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Professional Journey */}
        <SectionHeading title="Professional Journey" />

        <div className="relative mb-20">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
            {professionalJourney.map((entry, index) => (
              <motion.article
                key={`${entry.company}-${entry.role}`}
                className="relative pl-10"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <div
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-bg bg-accent"
                  aria-hidden="true"
                />

                <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
                  {entry.company} — {entry.role}
                </h2>

                <ul className="mt-4 space-y-2 text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-5 font-sans text-sm leading-6 sm:text-base">
                      <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-muted" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Skills & Competencies */}
        <SectionHeading title="Skills & Competencies" />
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={
            reducedMotion
              ? {}
              : { visible: { transition: { staggerChildren: 0.05 } } }
          }
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.label}
              variants={reducedMotion ? {} : chipVariants}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <SkillChip label={skill.label} variant={skill.variant} />
            </motion.span>
          ))}
        </motion.div>
      </main>
    </PageWrapper>
  )
}

export default Experience
