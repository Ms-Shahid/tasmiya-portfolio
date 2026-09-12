import { Mail, Linkedin } from 'lucide-react'
import { PageWrapper } from '../components/layout/PageWrapper'
import { MotionSection } from '../components/motion/MotionSection'
import { SectionHeading } from '../components/ui/SectionHeading'

const Contact = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL as string | undefined
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL as string | undefined

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <MotionSection>
          <SectionHeading title="Get In Touch" />
        </MotionSection>

        <MotionSection delay={0.1}>
          <p className="text-text/80 text-lg leading-relaxed max-w-xl mx-auto">
            Whether you're looking to share insights, explore collaboration opportunities, or discuss
            the latest trends in HR — I'd love to hear from you.
          </p>
        </MotionSection>

        <MotionSection delay={0.2}>
          <div className="flex flex-col items-center gap-6 mt-8">
            {/* Email link */}
            <a
              href={email ? `mailto:${email}` : undefined}
              className="inline-flex items-center gap-3 text-accent hover:text-accent/80 transition-colors text-base font-medium group"
            >
              <Mail
                size={20}
                className="shrink-0 group-hover:scale-110 transition-transform"
              />
              <span>{email || 'email@example.com'}</span>
            </a>

            {/* LinkedIn link */}
            <a
              href={linkedinUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors text-base font-medium group"
            >
              <Linkedin
                size={20}
                className="shrink-0 group-hover:scale-110 transition-transform"
              />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </MotionSection>
      </div>
    </PageWrapper>
  )
}

export default Contact
