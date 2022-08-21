import styled from 'styled-components'
import { tokens } from 'styles/theme'
const { borders, color, font, space } = tokens

export const Sidebar = styled.section<{ open: boolean }>`
  position: relative;
  flex: 0 0 auto;
  height: 100vh;
  width: ${({ open }) => (open ? '300px' : space.lg)};
  background-color: ${color.black};
  transition: width 0.3s ease;
`

export const ToggleButton = styled.button<{ open: boolean }>`
  all: unset;
  position: absolute;
  top: ${space.xs};
  right: -${space.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${space.lg};
  height: ${space.lg};
  border-radius: ${borders.radius.circle};
  border: ${borders.sizes.sm} solid ${color.lighter};
  background-color: ${color.white};
  transform: rotate(${({ open }) => (open ? '0' : '-180deg')});
  transition: all 0.3s ease;
  cursor: pointer;
`

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${space.xl3};
  padding-left: ${space.md};
  padding-right: ${space.md};
  border-bottom: ${borders.sizes.sm} solid ${color.darker};
  border-top-color: ${color.darker};
  border-right-color: ${color.darker};
  border-left-color: ${color.darker};
  color: ${color.lighter};
  font-weight: ${font.weight.bold};
`

export const Files = styled.div`
  height: calc(100% - ${space.xl3});
  padding: ${space.md} ${space.xs};
  overflow-y: auto;
`

export const Error = styled.p`
  color: ${color.danger};
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FileList = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding-left: ${space.xs};
  margin: 0;
`

export const FileListItem = styled.li`
  margin-bottom: ${space.xs};
  font-size: ${font.size.sm};
  color: ${color.lighter};
`

export const FileListItemName = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  margin-bottom: ${space.xs};
  cursor: pointer;
`

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${space.sm};
  height: ${space.sm};
  margin-right: ${space.xs2};
`
