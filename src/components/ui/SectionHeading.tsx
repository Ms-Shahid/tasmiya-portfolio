interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-3">
        {title}
      </h2>
      {/* Gold accent underline — 3rem wide, 2px tall */}
      <div className="h-[2px] w-12 bg-accent" />
      {subtitle && (
        <p className="font-sans text-muted mt-3 text-base">{subtitle}</p>
      )}
    </div>
  )
}
