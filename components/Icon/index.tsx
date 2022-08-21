import { FC, memo } from 'react'
import { FolderClosed, FolderOpen, Java, File } from 'assets/icons'
import { IconProps } from './icon.model'
import * as S from './icon.styles'

export const Icon: FC<IconProps> = memo(({ isDirectory, open, name }) => {
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
