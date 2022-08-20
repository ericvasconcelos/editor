import { FC, memo } from 'react'
import { FolderClosed, FolderOpen, Java, File } from 'assets/icons'
import { IconProps } from './sidebar.model'
import * as S from './sidebar.styles'

const Icon: FC<IconProps> = memo(({ isDirectory, open, name }) => {
  if (isDirectory && !open) {
    return (
      <S.Icon>
        <FolderClosed />
      </S.Icon>
    )
  }

  if (isDirectory && open) {
    return (
      <S.Icon>
        <FolderOpen />
      </S.Icon>
    )
  }

  if (name.includes('java')) {
    return (
      <S.Icon>
        <Java />
      </S.Icon>
    )
  }

  return (
    <S.Icon>
      <File />
    </S.Icon>
  )
})

Icon.displayName = 'Icon'

export default Icon
