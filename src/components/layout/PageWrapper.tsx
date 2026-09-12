import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

interface PageWrapperProps {
  children: React.ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      variants={reducedMotion ? {} : pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-16"
    >
      {children}
    </motion.div>
  )
}
export default PageWrapper
