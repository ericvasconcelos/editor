import styled from 'styled-components'
import { ButtonKind } from './button.model'

const getKind = {
  default: '#651fff',
  danger: '#D32F2F'
}

export const Button = styled.button<{ kind: ButtonKind }>`
  all: unset;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({ kind }) => getKind[kind]};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`
