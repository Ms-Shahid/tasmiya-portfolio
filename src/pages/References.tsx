import { PageWrapper } from '../components/layout/PageWrapper'
import { MotionSection } from '../components/motion/MotionSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { references } from '../data/references'

const References = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <SectionHeading
          title="Professional References"
          subtitle="What colleagues and mentors say"
        />
        <div className="flex flex-col gap-10 mt-4">
          {references.map((ref, i) => (
            <MotionSection key={ref.id} delay={i * 0.1}>
              <blockquote className="bg-[#161B22] border border-[#30363D] rounded-2xl p-8 flex flex-col gap-6">
                {/* Quote mark */}
                <span className="font-display text-6xl text-[#C9A84C]/20 leading-none select-none -mb-4">"</span>
                <p className="font-sans text-[#F5F0E8]/85 text-base leading-relaxed italic">
                  {ref.quote}
                </p>
                <footer className="flex flex-col gap-0.5">
                  <span className="font-display text-base font-semibold text-[#F5F0E8]">{ref.name}</span>
                  <span className="font-sans text-sm text-[#8B949E]">{ref.title}</span>
                  <span className="font-sans text-sm text-[#C9A84C]">{ref.company}</span>
                </footer>
              </blockquote>
            </MotionSection>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export default References
