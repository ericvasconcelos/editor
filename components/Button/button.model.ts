import { ReactNode } from 'react'

export type ButtonKind = 'default' | 'danger'

export type ButtonProps = {
  kind?: ButtonKind
  onClick: () => void
  children: ReactNode
}
