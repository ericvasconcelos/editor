import { ReactNode } from 'react'

export type ButtonKind = 'default' | 'danger'

export type ButtonProps = {
  kind?: ButtonKind
  isLoading?: boolean
  onClick: () => void
  children: ReactNode
}
