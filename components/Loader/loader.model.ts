import { SimpleInterpolation } from 'styled-components'

export type LoaderKind = 'inverse' | 'dark'
export type LoaderSize = 'default' | 'small'

export type LoaderProps = {
  kind?: LoaderKind
  size?: LoaderSize
}

export type LoaderStyleProps = {
  kind: LoaderKind
  size: LoaderSize
}

export type getKindProps = {
  [key in LoaderKind]: string | SimpleInterpolation
}
