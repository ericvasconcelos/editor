import { FC, memo, useContext, useCallback, useState } from 'react'
import { Icon } from 'components'
import { EditorContext } from 'context/editorContext'
import { EditorContextType } from 'types'
import FileList from './FileList'
import { FileListItemProps } from './sidebar.model'
import * as S from './sidebar.styles'

export const FileListItem: FC<FileListItemProps> = memo(({ id, name, isDirectory, list }) => {
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

export default FileListItem
