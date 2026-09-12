import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { ProjectEntry } from '../../data/projects'
import { SkillChip } from './SkillChip'

interface ProjectDetailPanelProps {
  project: ProjectEntry | null
  projectIndex: number
  onClose: () => void
}

export function ProjectDetailPanel({ project, projectIndex, onClose }: ProjectDetailPanelProps) {
  // Lock body scroll when panel is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const num = String(projectIndex + 1).padStart(2, '0')

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={onClose}
          />
          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-[#161B22] border-l border-[#30363D] overflow-y-auto z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-8 pb-4 border-b border-[#30363D]">
              <span className="font-display text-5xl font-bold text-[#C9A84C]/20 leading-none select-none">
                {num}
              </span>
              <button
                onClick={onClose}
                className="text-[#8B949E] hover:text-[#F5F0E8] transition-colors p-1"
                aria-label="Close project detail"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col gap-8 flex-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <SkillChip key={tag} label={tag} variant="ghost" />
                ))}
              </div>

              {/* Title */}
              <h2 className="font-display text-3xl font-bold text-[#F5F0E8] leading-tight">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-[#F5F0E8]/80 leading-relaxed">{project.description}</p>

              {/* Full detail sections */}
              {project.fullDetail && (
                <>
                  {/* Challenge */}
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                      The Challenge
                    </h3>
                    <p className="text-[#F5F0E8]/80 leading-relaxed">{project.fullDetail.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                      The Approach
                    </h3>
                    <p className="text-[#F5F0E8]/80 leading-relaxed">{project.fullDetail.approach}</p>
                  </div>

                  {/* Impact */}
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                      Impact &amp; Results
                    </h3>
                    <p className="text-[#F5F0E8]/80 leading-relaxed mb-4">{project.fullDetail.impact}</p>
                    <ul className="flex flex-col gap-2">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex gap-3 text-[#F5F0E8]/80 text-sm">
                          <span className="text-[#C9A84C] shrink-0 font-bold">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  {project.fullDetail.tools && project.fullDetail.tools.length > 0 && (
                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                        Tools &amp; Methods
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.fullDetail.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-[#0D1117] border border-[#30363D] text-[#8B949E]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="p-8 pt-4 border-t border-[#30363D]">
              <button
                onClick={onClose}
                className="font-sans text-sm font-medium text-[#8B949E] hover:text-[#F5F0E8] transition-colors flex items-center gap-2"
              >
                <X size={14} /> Close project
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
