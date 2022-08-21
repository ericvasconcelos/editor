import ContentEditable from 'react-contenteditable'
import styled from 'styled-components'

export const Editor = styled.div`
  flex: 0 1 100%;
  height: 100vh;
  background-color: #212121;
`
export const EditorHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  background-color: #424242;
  padding: 0 16px 0 32px;
`

export const FileTab = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`

export const FileName = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px 8px 0 0;
  background-color: #212121;
  color: #00e676;
  font-size: 14px;
  font-weight: 500;
`

export const Close = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  align-self: center;
  width: 12px;
  height: 12px;
  margin-left: 6px;
  color: #fff;
  font-size: 22px;
  font-weight: 100;
  cursor: pointer;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
`

const getKind = {
  default: '#651fff',
  danger: '#D32F2F'
}

export const Button = styled.button<{ kind?: 'default' | 'danger' }>`
  all: unset;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({ kind }) => getKind[kind || 'default']};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Editable = styled(ContentEditable)`
  width: 100%;
  height: calc(100% - 48px);
  padding: 32px;
  outline: none;
  background-color: #212121;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  overflow-y: auto;
  cursor: auto;
`
