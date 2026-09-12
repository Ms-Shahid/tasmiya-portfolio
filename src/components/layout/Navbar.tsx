import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
  { id: 'references', label: 'References' },
]

const activeClassName = 'text-[#C9A84C] border-b-2 border-[#C9A84C] pb-0.5'
const inactiveClassName = 'text-[#F5F0E8] hover:text-[#C9A84C] transition-colors duration-200'

const overlayVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname.replace('/', '') || 'home')
      return
    }

    const sectionElements = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sectionElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setMenuOpen(false)
  }

  const isActive = (id: string) =>
    location.pathname === '/' ? activeSection === id : activeSection === id

  return (
    <>
      <nav className="fixed top-0 z-40 h-16 w-full border-b border-[#30363D] bg-[#0D1117]/90 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            to="/"
            className="font-display text-xl text-[#C9A84C] transition-colors duration-200 hover:text-[#d4b560]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Tasmiya Amreen
          </Link>

          <ul className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-8">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={isActive(id) ? activeClassName : inactiveClassName}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 text-[#F5F0E8] focus:outline-none lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#0D1117] lg:hidden"
          >
            <button
              className="absolute right-6 top-5 text-3xl leading-none text-[#F5F0E8] transition-colors duration-200 hover:text-[#C9A84C] focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className={`font-display text-3xl transition-colors duration-200 ${
                      isActive(id)
                        ? 'text-[#C9A84C]'
                        : 'text-[#F5F0E8] hover:text-[#C9A84C]'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
