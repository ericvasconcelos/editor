import { FC, memo, useContext, useCallback, useState, useEffect } from 'react'
import { ChevronLeft } from 'assets/icons'
import { EditorContext } from 'context/editorContext'
import { editorService } from 'services'
import { EditorContextType } from 'types'
import Icon from './Icon'
import { FileListProps, FileListItemProps } from './sidebar.model'
import * as S from './sidebar.styles'

const FileListItem: FC<FileListItemProps> = memo(({ id, name, isDirectory, list }) => {
  const { saveFileId } = useContext(EditorContext) as EditorContextType
  const [open, setOpen] = useState<boolean>(true)

  const handleOpen = useCallback(() => {
    if (isDirectory) {
      setOpen((oldState) => !oldState)
    } else {
      saveFileId(id)
    }
  }, [isDirectory, id, saveFileId])

  return (
    <S.FileListItem>
      <S.FileListItemName onClick={handleOpen}>
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
      <FileListItem key={id} id={id} name={name} isDirectory={isDirectory} list={children} />
    ))}
  </S.FileList>
))

FileList.displayName = 'FileList'

const Sidebar = memo(() => {
  const [filetree, setFiletree] = useState([])
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleGetFiletree = useCallback(async () => {
    try {
      const response = await editorService.getFiletree()
      setFiletree(response)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    handleGetFiletree()
  }, [handleGetFiletree])

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
