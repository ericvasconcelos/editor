import ContentEditable from 'react-contenteditable'
import styled from 'styled-components'
import { tokens } from 'styles/theme'
const { borders, color, font, space } = tokens

export const Editor = styled.div`
  flex: 0 1 100%;
  height: 100vh;
  background-color: ${color.black};
`
export const EditorHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${space.xl3};
  background-color: ${color.gray};
  padding: 0 ${space.md} 0 ${space.xl};
`

export const FileTab = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`

export const FileName = styled.div`
  display: flex;
  align-items: center;
  height: ${space.xl2};
  padding: 0 ${space.sm};
  border-radius: ${borders.radius.lg} ${borders.radius.lg} 0 0;
  background-color: ${color.black};
  color: ${color.green};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.medium};
`

export const Close = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  align-self: center;
  width: ${space.sm};
  height: ${space.sm};
  margin-left: ${space.xs};
  color: ${color.white};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.light};
  cursor: pointer;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${space.xl};
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Editable = styled(ContentEditable)`
  width: 100%;
  height: calc(100% - ${space.xl3});
  padding: ${space.xl};
  outline: none;
  background-color: ${color.black};
  color: ${color.white};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${font.size.md};
  letter-spacing: 1px;
  overflow-y: auto;
  cursor: auto;
`
