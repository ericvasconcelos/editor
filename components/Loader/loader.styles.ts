import styled, { keyframes } from 'styled-components'
import { LoaderStyleProps, getKindProps } from './loader.model'

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
    transform: translate(24px, 0);
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
  inverse: '#fff',
  dark: '#151515'
}

export const Ellipsis = styled.div<LoaderStyleProps>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 13px;
  transform: ${({ size }) => (size === 'small' ? 'scale(0.6)' : 'scale(1)')};

  div {
    position: absolute;
    top: 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ kind }) => getKind[kind]};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: ${ellipsis1} 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ${ellipsis2} 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: ${ellipsis2} 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: ${ellipsis3} 0.6s infinite;
    }
  }
`
