import styled from 'styled-components'
import { tokens } from 'styles/theme'
const { space } = tokens

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${space.sm};
  height: ${space.sm};
  margin-right: ${space.xs2};
`
