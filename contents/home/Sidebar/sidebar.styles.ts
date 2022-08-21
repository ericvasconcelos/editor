import styled from 'styled-components'

export const Sidebar = styled.section<{ open: boolean }>`
  position: relative;
  flex: 0 0 auto;
  height: 100vh;
  width: ${({ open }) => (open ? '300px' : '24px')};
  background-color: #151515;
  transition: width 0.3s ease;
`

export const ToggleButton = styled.button<{ open: boolean }>`
  all: unset;
  position: absolute;
  top: 8px;
  right: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  transform: rotate(${({ open }) => (open ? '0' : '-180deg')});
  transition: all 0.3s ease;
  cursor: pointer;
`

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid #343434;
  border-top-color: #343434;
  border-right-color: #343434;
  border-left-color: #343434;
  color: #e6e6e6;
  font-weight: bold;
`

export const Files = styled.div`
  height: calc(100% - 48px);
  padding: 16px 8px;
  overflow-y: auto;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FileList = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding-left: 8px;
  margin: 0;
`

export const FileListItem = styled.li`
  margin-bottom: 6px;
  font-size: 14px;
  color: #e6e6e6;
`

export const FileListItemName = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  cursor: pointer;
`

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  margin-right: 4px;
`
