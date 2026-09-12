import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import References from './pages/References'

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1400
    const start = performance.now()
    let animationFrame = 0
    let completionTimeout = 0

    const updateProgress = (now: number) => {
      const elapsed = now - start
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100))

      setProgress(nextProgress)

      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress)
      } else {
        completionTimeout = window.setTimeout(onComplete, 220)
      }
    }

    animationFrame = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.clearTimeout(completionTimeout)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-bg px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-label="Loading portfolio"
    >
      <div className="w-full max-w-xs text-center sm:max-w-sm">
        <div className="mb-5 font-display text-2xl font-semibold text-accent sm:text-3xl">
          Tasmiya Amreen
        </div>

        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <motion.div
            className="h-full rounded-full bg-accent"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.08, ease: 'linear' }}
          />
        </div>

        <div className="mt-4 font-sans text-sm tracking-[0.18em] text-muted">
          {progress}%
        </div>
      </div>
    </motion.div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const finishLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('loading-lock', isLoading)
    document.body.classList.toggle('loading-lock', isLoading)

    return () => {
      document.documentElement.classList.remove('loading-lock')
      document.body.classList.remove('loading-lock')
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={finishLoading} />}
      </AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* Main portfolio is a single scrollable page. */}
            <Route path="/" element={<Portfolio />} />

            {/* Keep individual routes available for direct links/bookmarks. */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/references" element={<References />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
