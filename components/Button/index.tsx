import { FC, memo } from 'react'
import { Loader } from '..'
import { ButtonProps } from './button.model'
import * as S from './button.styles'

export const Button: FC<ButtonProps> = memo(({ kind = 'default', onClick, isLoading = false, children, ...props }) => (
  <S.Button kind={kind} onClick={onClick} {...props}>
    {isLoading ? <Loader size="small" /> : children}
  </S.Button>
))

Button.displayName = 'Button'
