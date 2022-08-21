import styled, { keyframes } from 'styled-components'
import { tokens } from 'styles/theme'
import { LoaderStyleProps, getKindProps } from './loader.model'
const { borders, color, space } = tokens

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(${space.lg}, 0);
  }
`

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const getKind: getKindProps = {
  inverse: color.white,
  dark: color.black
}

export const Ellipsis = styled.div<LoaderStyleProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => (size === 'small' ? '72px' : space.xl5)};
  height: 0.8125rem;
  transform: ${({ size }) => (size === 'small' ? 'scale(0.6)' : 'scale(1)')};

  div {
    position: absolute;
    top: 0;
    width: 0.8125rem;
    height: 0.8125rem;
    border-radius: ${borders.radius.circle};
    background: ${({ kind }) => getKind[kind]};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: ${space.xs};
      animation: ${ellipsis1} 0.6s infinite;
    }

    &:nth-child(2) {
      left: ${space.xs};
      animation: ${ellipsis2} 0.6s infinite;
    }

    &:nth-child(3) {
      left: ${space.xl};
      animation: ${ellipsis2} 0.6s infinite;
    }

    &:nth-child(4) {
      left: 3.5rem;
      animation: ${ellipsis3} 0.6s infinite;
    }
  }
`
