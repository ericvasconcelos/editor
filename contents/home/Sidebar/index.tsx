import { FC, memo, useContext, useCallback, useState, useEffect } from 'react'
import { ChevronLeft } from 'assets/icons'
import { Loader } from 'components'
import { EditorContext } from 'context/editorContext'
import { editorService } from 'services'
import { EditorContextType } from 'types'
import FileList from './FileList'
import { FileListItemArrProps } from './sidebar.model'
import * as S from './sidebar.styles'

const Sidebar: FC = memo(() => {
  const { removedFileId, removeFileId } = useContext(EditorContext) as EditorContextType
  const [filetree, setFiletree] = useState<FileListItemArrProps[]>()
  const [error, setError] = useState<string>()
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleGetFiletree = useCallback(async () => {
    try {
      const response = await editorService.getFiletree()
      setFiletree(response)
    } catch (err) {
      setError((err as Error).message)
    }
  }, [])

  useEffect(() => {
    handleGetFiletree()
  }, [handleGetFiletree])

  const handleUpdateFiletree = useCallback(
    async (id: number) => {
      function recursiveRemove(list, fileId) {
        return list
          .map((item) => ({ ...item }))
          .filter((item) => {
            if ('children' in item) {
              item.children = recursiveRemove(item.children, fileId)
            }
            return item.id !== fileId
          })
      }

      const newFiletree = recursiveRemove(filetree, id)
      setFiletree(newFiletree)
      removeFileId(-1)
    },
    [filetree, removeFileId]
  )

  useEffect(() => {
    if (removedFileId !== -1) {
      handleUpdateFiletree(removedFileId)
    }
  }, [handleUpdateFiletree, removedFileId])

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
        {error && !filetree && <S.Error>{error}</S.Error>}
        {filetree && filetree?.length > 0 && <FileList data={filetree} />}
        {!error && !filetree && (
          <S.Wrapper>
            <Loader />
          </S.Wrapper>
        )}
      </S.Files>
    </S.Sidebar>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar
