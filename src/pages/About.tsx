import { Link } from 'react-router-dom'
import { PageWrapper } from '../components/layout/PageWrapper'
import { MotionSection } from '../components/motion/MotionSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import profileImage from '../assets/tasmiya-profile.webp'

const interests = [
  'Quality time with family',
  'Fiction and non-fiction books',
  'Technology',
  'Binge watching',
  'Researching topics of interest',
  'Solving unsolved mysteries',
]

const About = () => {
  return (
    <PageWrapper>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-14 xl:gap-16">
          {/* Profile column */}
          <aside className="flex flex-col items-center gap-8 lg:items-start">
            {/* Responsive portrait */}
            <MotionSection delay={0}>
              <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-[#C9A84C]/60 bg-[#161B22] shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:max-w-sm lg:mx-0 lg:max-w-full">
                <img
                  src={profileImage}
                  alt="Tasmiya Amreen"
                  className="block aspect-[4/5] h-auto w-full object-cover object-[center_30%] transition-transform duration-500 hover:scale-[1.02]"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D1117]/70 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </MotionSection>

            {/* Let's Connect */}
            <div className="w-full max-w-sm text-center lg:max-w-full lg:text-left">
              <h2 className="font-display text-xl font-semibold text-text">
                Let's Connect
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                I'm always open to connecting with HR professionals, industry peers, and
                anyone passionate about building exceptional workplaces.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-accent px-5 py-2 font-sans text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-bg focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                Get In Touch →
              </Link>
            </div>
          </aside>

          {/* About + interests */}
          <div className="flex min-w-0 flex-col gap-10 lg:col-span-2">
            <MotionSection delay={0.05}>
              <SectionHeading title="About Me" />
              <p className="max-w-3xl font-sans text-base leading-7 text-text/90 sm:text-[17px]">
                As an MBA post graduate specializing in Human Resources and Business Analytics,
                I bring a unique perspective from my foundation in Analytics and HR. I aim to
                leverage data-driven insights to enhance talent management strategies, foster
                employee engagement, and drive organizational success. With a passion for
                aligning human potential with business outcomes, I am committed to shaping
                innovative HR solutions that optimize workforce performance and contribute to
                long-term growth.
              </p>
            </MotionSection>

            <MotionSection delay={0.15}>
              <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
                Personal Interests
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex min-w-0 items-start gap-3 font-sans text-base leading-relaxed text-text/80"
                  >
                    <span className="mt-0.5 shrink-0 font-semibold text-accent" aria-hidden="true">
                      →
                    </span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </MotionSection>
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}

export default About
