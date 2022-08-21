import { FC, memo, useCallback, useState, useEffect } from 'react'
import { ChevronLeft } from 'assets/icons'
import { editorService } from 'services'
import FileList from './FileList'
import * as S from './sidebar.styles'

const Sidebar: FC = memo(() => {
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
