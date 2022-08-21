import { FC, memo, useContext, useState, useEffect, useCallback } from 'react'
import { Button, Loader } from 'components'
import { EditorContext } from 'context/editorContext'
import { editorService } from 'services'
import { EditorContextType } from 'types'
import { FileProps } from './editor.model'
import * as S from './editor.styles'

const initialFile = {
  id: -1,
  name: '',
  content: ''
}

const Editor: FC = memo(() => {
  const { fileId, saveFileId } = useContext(EditorContext) as EditorContextType
  const [loadingFile, setLoadingFile] = useState<boolean>(false)
  const [LoadingSave, setLoadingSave] = useState<boolean>(false)
  const [LoadingDelete, setLoadingDelete] = useState<boolean>(false)
  const [file, setFile] = useState<FileProps>(initialFile)

  const handleCloseFile = useCallback(async () => {
    saveFileId(-1)
    setFile(initialFile)
  }, [saveFileId])

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
      setLoadingSave(true)
      await editorService.updateFile(file)
    } catch (err) {
      console.log(err)
    } finally {
      setLoadingSave(false)
    }
  }, [file])

  const handleDeleteFile = useCallback(async () => {
    try {
      setLoadingDelete(true)
      await editorService.deleteFile(fileId)
    } catch (err) {
      console.log(err)
    } finally {
      setLoadingDelete(false)
    }
  }, [fileId])

  return (
    <S.Editor>
      <S.EditorHeader>
        <S.FileTab>
          {file?.name && (
            <S.FileName>
              {file?.name}
              <S.Close aria-label="Close" onClick={handleCloseFile}>
                ×
              </S.Close>
            </S.FileName>
          )}
        </S.FileTab>

        {fileId >= 0 && (
          <S.Actions>
            <Button onClick={handleUpdateFile} isLoading={LoadingSave}>
              Save
            </Button>
            <Button kind="danger" onClick={handleDeleteFile} isLoading={LoadingDelete}>
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
