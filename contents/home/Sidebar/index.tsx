import { FC, memo, useCallback, useState } from 'react'
import { ChevronLeft } from 'assets/icons'
import data from '../db.json'
import Icon from './Icon'
import { FileListProps, FileListItemProps } from './sidebar.model'
import * as S from './sidebar.styles'

const FileListItem: FC<FileListItemProps> = memo(({ name, isDirectory, list }) => {
  const [open, setOpen] = useState<boolean>(true)

  const handleOpen = useCallback((isDirectory) => {
    if (isDirectory) {
      setOpen((oldState) => !oldState)
    } else {
      console.log('open file')
    }
  }, [])

  return (
    <S.FileListItem>
      <S.FileListItemName onClick={() => handleOpen(isDirectory)}>
        <Icon isDirectory={isDirectory} name={name} open={open} />
        {name}
      </S.FileListItemName>

      {isDirectory && list && list?.length > 0 && <FileList data={list} open={open} />}
    </S.FileListItem>
  )
})

FileListItem.displayName = 'FileListItem'

const FileList: FC<FileListProps> = memo(({ data, open = true }) => (
  <S.FileList open={open}>
    {data.map(({ id, name, isDirectory, children }) => (
      <FileListItem key={id} name={name} isDirectory={isDirectory} list={children} />
    ))}
  </S.FileList>
))

FileList.displayName = 'FileList'

const Sidebar = memo(() => {
  const { filetree } = data
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <S.Sidebar open={isOpen}>
      <S.ToggleButton
        aria-label={`${isOpen ? 'Close' : 'Open'} sidebar`}
        open={isOpen}
        onClick={() => setIsOpen((oldState) => !oldState)}
      >
        <ChevronLeft />
      </S.ToggleButton>
      <S.SidebarHeader>Files</S.SidebarHeader>
      <S.Files>
        <FileList data={filetree} />
      </S.Files>
    </S.Sidebar>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
