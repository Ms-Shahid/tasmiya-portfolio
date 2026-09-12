import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {/* key on location.pathname so AnimatePresence detects route changes */}
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </>
  )
}

export default Layout
