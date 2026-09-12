import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { PageWrapper } from '../components/layout/PageWrapper'
import { Button } from '../components/ui/Button'
import { useReducedMotion } from '../hooks/useReducedMotion'
import profileImage from '../assets/tasmiya-profile.webp'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const scrollIndicatorVariants = {
  initial: { opacity: 0.5, y: 0 },
  animate: {
    opacity: [0.5, 1, 0.5],
    y: [0, 8, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
}

const Home = () => {
  const reducedMotion = useReducedMotion()

  return (
    <PageWrapper>
      <section className="relative flex min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden bg-bg py-12 sm:py-16 lg:py-20">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 85% 20%, rgba(201,168,76,0.10) 0%, transparent 48%), radial-gradient(ellipse at 15% 85%, rgba(45,212,191,0.05) 0%, transparent 42%)',
          }}
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 md:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 xl:px-12"
          variants={reducedMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Intro */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div variants={reducedMotion ? {} : childVariants}>
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.28em] text-muted sm:text-sm">
                Human Resources · Business Analytics
              </p>

              <h1 className="font-display text-4xl font-bold leading-tight text-accent sm:text-5xl md:text-6xl xl:text-7xl">
                Tasmiya Amreen
              </h1>
            </motion.div>

            <motion.div
              variants={reducedMotion ? {} : childVariants}
              className="mt-5 flex flex-col items-center lg:items-start"
            >
              <div
                className="mb-4 h-px w-12 bg-accent"
                aria-hidden="true"
              />
              <p className="font-sans text-base font-medium tracking-wide text-muted sm:text-lg md:text-xl">
                MBA Graduate · Human Resources &amp; Business Analytics
              </p>
            </motion.div>

            <motion.div variants={reducedMotion ? {} : childVariants} className="mt-6">
              <p className="mx-auto max-w-2xl font-sans text-sm leading-7 text-text/85 sm:text-base md:text-lg lg:mx-0">
                Leveraging data-driven insights to enhance talent management and foster employee
                engagement. Committed to aligning human potential with business outcomes.
              </p>
            </motion.div>

            <motion.div
              variants={reducedMotion ? {} : childVariants}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button to="/projects">View My Work</Button>
              <Button variant="ghost" to="/contact">Connect</Button>
            </motion.div>

            <motion.div
              variants={reducedMotion ? {} : childVariants}
              className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-[#30363D]/60 pt-7 text-center lg:mx-0 lg:max-w-2xl lg:text-left"
            >
              {[
                { value: '4+', label: 'Years HR Experience' },
                { value: '6+', label: 'HR Projects Delivered' },
                { value: 'MBA', label: 'HR & Business Analytics' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-display text-2xl font-bold text-accent sm:text-3xl md:text-4xl">
                    {value}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-muted sm:text-[10px] md:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            variants={reducedMotion ? {} : childVariants}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[390px]">
              <div className="absolute -inset-3 rounded-[2rem] border border-accent/20" aria-hidden="true" />
              <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/5 blur-2xl" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-accent/50 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.38)]">
                <img
                  src={profileImage}
                  alt="Tasmiya Amreen"
                  className="block aspect-[4/5] w-full object-cover object-[center_28%]"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center sm:bottom-7"
          variants={reducedMotion ? {} : scrollIndicatorVariants}
          initial="initial"
          animate={reducedMotion ? 'initial' : 'animate'}
          aria-hidden="true"
        >
          <ChevronDown size={26} strokeWidth={1.5} className="text-accent/70" />
        </motion.div>
      </section>
    </PageWrapper>
  )
}

export default Home
