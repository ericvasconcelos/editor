import { FC, memo } from 'react'
import { ButtonProps } from './button.model'
import * as S from './button.styles'

export const Button: FC<ButtonProps> = memo(({ kind = 'default', onClick, children, ...props }) => (
  <S.Button kind={kind} onClick={onClick} {...props}>
    {children}
  </S.Button>
))

Button.displayName = 'Button'
