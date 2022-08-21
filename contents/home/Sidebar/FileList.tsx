import { FC, memo } from 'react'
import FileListItem from './FileListItem'
import { FileListProps } from './sidebar.model'
import * as S from './sidebar.styles'

const FileList: FC<FileListProps> = memo(({ data, open = true }) => (
  <S.FileList open={open}>
    {data.map(({ id, name, isDirectory, children }) => (
      <FileListItem key={id} id={id} name={name} isDirectory={isDirectory} list={children} />
    ))}
  </S.FileList>
))

FileList.displayName = 'FileList'

export default FileList
