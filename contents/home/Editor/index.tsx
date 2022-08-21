import { FC, memo, useContext, useState, useEffect, useCallback } from 'react'
import { Button, Loader } from 'components'
import { EditorContext } from 'context/editorContext'
import { editorService } from 'services'
import { EditorContextType } from 'types'
import { FileProps } from './editor.model'
import * as S from './editor.styles'

const Editor: FC = memo(() => {
  const { fileId } = useContext(EditorContext) as EditorContextType
  const [loadingFile, setLoadingFile] = useState<boolean>(false)
  const [file, setFile] = useState<FileProps>({
    id: -1,
    name: '',
    content: ''
  })

  const handleGetFile = useCallback(async (id: number) => {
    if (id === -1) return

    try {
      setLoadingFile(true)
      const response = await editorService.getFile(id)
      setFile(response)
    } catch (err) {
      console.log(err)
    } finally {
      setLoadingFile(false)
    }
  }, [])

  useEffect(() => {
    handleGetFile(fileId)
  }, [handleGetFile, fileId])

  const handleUpdateFile = useCallback(async () => {
    try {
      await editorService.updateFile(file)
    } catch (err) {
      console.log(err)
    }
  }, [file])

  const handleDeleteFile = useCallback(async () => {
    try {
      await editorService.deleteFile(fileId)
    } catch (err) {
      console.log(err)
    }
  }, [fileId])

  return (
    <S.Editor>
      <S.EditorHeader>
        <S.FileTab>
          {file?.name && (
            <S.FileName>
              {file?.name}
              <S.Close aria-label="Close">×</S.Close>
            </S.FileName>
          )}
        </S.FileTab>

        {fileId >= 0 && (
          <S.Actions>
            <Button onClick={handleUpdateFile}>Save</Button>
            <Button kind="danger" onClick={handleDeleteFile}>
              Delete
            </Button>
          </S.Actions>
        )}
      </S.EditorHeader>

      {loadingFile ? (
        <S.Wrapper>
          <Loader />
        </S.Wrapper>
      ) : (
        <S.Editable
          tagName="pre"
          html={file?.content || ''}
          onChange={(e) => setFile((oldState) => ({ ...oldState, content: e.target.value }))}
          {...{ spellCheck: false }}
        />
      )}
    </S.Editor>
  )
})

Editor.displayName = 'Editor'

export default Editor
