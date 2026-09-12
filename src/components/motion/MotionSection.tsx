import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface MotionSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const MotionSection = ({ children, delay = 0, className = '' }: MotionSectionProps) => {
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion
    ? { hidden: {}, visible: {} }
    : { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
export default MotionSection
