import { FC, memo } from 'react'
import { LoaderProps } from './loader.model'
import * as S from './loader.styles'

export const Loader: FC<LoaderProps> = memo(({ kind = 'inverse', size = 'default' }) => (
  <S.Ellipsis kind={kind} size={size} data-testid="comp-loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </S.Ellipsis>
))

Loader.displayName = 'Loader'
