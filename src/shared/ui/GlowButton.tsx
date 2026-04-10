import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type GlowButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
  }
>

export function GlowButton({
  children,
  className,
  variant = 'primary',
  ...props
}: GlowButtonProps) {
  const classes = ['glow-button', `glow-button-${variant}`, className].filter(Boolean).join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
