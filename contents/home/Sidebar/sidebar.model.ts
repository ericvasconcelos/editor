export type FileProps = {
  name: string
  isDirectory: boolean
}

export interface FileListItemProps extends FileProps {
  list?: FileListItemProps[]
}

export interface FileListItemArrProps extends FileProps {
  id?: number
  children?: FileListItemProps[]
}

export type FileListProps = {
  data: FileListItemArrProps[]
  open?: boolean
}

export type IconProps = {
  name: string
  isDirectory: boolean
  open: boolean
}
