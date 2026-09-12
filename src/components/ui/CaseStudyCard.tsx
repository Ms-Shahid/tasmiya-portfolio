import { motion } from 'framer-motion'
import { SkillChip } from './SkillChip'

interface CaseStudyCardProps {
  title: string
  tags: string[]
  description: string
  outcomes: string[]
  detailUrl?: string
  index?: number
  onViewProject?: () => void
}

export function CaseStudyCard({
  title,
  tags,
  description,
  outcomes,
  detailUrl: _detailUrl,
  index = 0,
  onViewProject,
}: CaseStudyCardProps) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 0 24px rgba(201,168,76,0.15)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 flex flex-col gap-4 h-full"
    >
      {/* Number + Tags row */}
      <div className="flex items-start justify-between gap-2">
        <span className="font-display text-3xl font-bold text-[#C9A84C]/20 leading-none select-none shrink-0">
          {num}
        </span>
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.slice(0, 2).map((tag) => (
            <SkillChip key={tag} label={tag} variant="ghost" />
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl text-[#F5F0E8]">{title}</h3>

      {/* Description */}
      <p className="text-sm text-[#F5F0E8]/80 leading-relaxed flex-1">{description}</p>

      {/* Outcomes — show first 2 only on card */}
      <ul className="flex flex-col gap-1">
        {outcomes.slice(0, 2).map((outcome, i) => (
          <li key={i} className="text-sm text-[#F5F0E8]/80 flex gap-2">
            <span className="text-[#C9A84C] shrink-0">•</span>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      {/* View Project button */}
      <button
        onClick={onViewProject}
        className="mt-auto text-left font-sans text-sm font-medium text-[#C9A84C] hover:underline flex items-center gap-1 group transition-colors"
      >
        View Project
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </button>
    </motion.div>
  )
}
