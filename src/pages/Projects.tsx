import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageWrapper } from '../components/layout/PageWrapper'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CaseStudyCard } from '../components/ui/CaseStudyCard'
import { ProjectDetailPanel } from '../components/ui/ProjectDetailPanel'
import { projectEntries, type ProjectEntry } from '../data/projects'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <PageWrapper>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionHeading
            title="HR Projects"
            subtitle="Case studies in talent management, analytics, and organizational development"
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {projectEntries.map((project, i) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <CaseStudyCard
                  title={project.title}
                  tags={project.tags}
                  description={project.description}
                  outcomes={project.outcomes}
                  detailUrl={project.detailUrl}
                  index={i}
                  onViewProject={() => {
                    setSelectedProject(project)
                    setSelectedIndex(i)
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </PageWrapper>
      <ProjectDetailPanel
        project={selectedProject}
        projectIndex={selectedIndex}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

export default Projects
