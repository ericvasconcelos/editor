import styled from 'styled-components'
import { tokens } from 'styles/theme'
import { ButtonKind } from './button.model'
const { borders, color, font, space } = tokens

const getKind = {
  default: color.primary,
  danger: color.danger
}

export const Button = styled.button<{ kind: ButtonKind }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${space.xl5};
  height: ${space.xl};
  padding: ${space.xs2} ${space.sm};
  border: none;
  border-radius: ${borders.radius.md};
  background-color: ${({ kind }) => getKind[kind]};
  color: ${color.white};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.medium};
`
