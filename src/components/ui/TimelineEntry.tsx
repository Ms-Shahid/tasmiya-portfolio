import { Briefcase, BookOpen } from 'lucide-react'
import { MotionSection } from '../motion/MotionSection'

interface TimelineEntryProps {
  type: 'work' | 'education'
  title: string
  organisation: string
  duration: string
  description: string
  index: number // used for stagger delay
}

export const TimelineEntry = ({
  type,
  title,
  organisation,
  duration,
  description,
  index,
}: TimelineEntryProps) => {
  const isWork = type === 'work'
  const accentColor = isWork ? '#C9A84C' : '#2DD4BF'
  const titleClass = isWork ? 'text-accent' : 'text-teal'

  return (
    <MotionSection delay={index * 0.1}>
      <div className="relative flex gap-6 pb-10 last:pb-0">
        {/* Left column: timeline line + icon */}
        <div className="relative flex flex-col items-center w-12 shrink-0">
          {/* Vertical connector line */}
          <span className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

          {/* Dot + icon */}
          <div
            className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 bg-bg"
            style={{ borderColor: accentColor }}
          >
            {isWork ? (
              <Briefcase size={16} style={{ color: accentColor }} />
            ) : (
              <BookOpen size={16} style={{ color: accentColor }} />
            )}
          </div>
        </div>

        {/* Right column: content */}
        <div className="pt-1.5 min-w-0">
          <h3 className={`font-display text-lg font-semibold leading-snug ${titleClass}`}>
            {title}
          </h3>
          <p className="mt-0.5 font-sans text-base text-text font-medium">
            {organisation}
          </p>
          <p className="mt-0.5 font-sans text-sm text-muted">
            {duration}
          </p>
          <p className="mt-3 font-sans text-sm text-text/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </MotionSection>
  )
}

export default TimelineEntry
