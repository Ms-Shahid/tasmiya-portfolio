interface SkillChipProps {
  label: string
  variant?: 'gold' | 'teal' | 'ghost'
}

const variantClasses: Record<NonNullable<SkillChipProps['variant']>, string> = {
  gold: 'border-[#C9A84C] text-[#C9A84C]',
  teal: 'border-[#2DD4BF] text-[#2DD4BF]',
  ghost: 'border-[#30363D] text-[#8B949E]',
}

export function SkillChip({ label, variant = 'ghost' }: SkillChipProps) {
  return (
    <span
      className={`rounded-full border px-4 py-1 text-sm font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  )
}
