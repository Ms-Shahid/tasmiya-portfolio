import { Link } from 'react-router-dom'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  to?: string
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[#C9A84C] text-[#0D1117] hover:bg-[#b8953f] font-medium px-6 py-3 rounded-lg transition-colors',
  ghost:
    'border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D1117] font-medium px-6 py-3 rounded-lg transition-colors',
}

export function Button({
  variant = 'primary',
  to,
  href,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} inline-flex items-center justify-center ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
