import { FC, memo } from 'react'
import { FolderClosed, FolderOpen, Java, File } from 'assets/icons'
import { IconProps } from './icon.model'
import * as S from './icon.styles'

export const Icon: FC<IconProps> = memo(({ isDirectory, open, name }) => (
  <S.Icon data-testid="comp-icon">
    {isDirectory && !open && <FolderClosed />}
    {isDirectory && open && <FolderOpen />}
    {name.includes('java') && <Java />}
    {!isDirectory && !name.includes('java') && <File />}
  </S.Icon>
))

Icon.displayName = 'Icon'
