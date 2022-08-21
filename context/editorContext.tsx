import { FC, createContext, ReactElement, useState } from 'react'
import { EditorContextType } from 'types'

export const EditorContext = createContext<EditorContextType | null>(null)

const EditorProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [fileId, setFileId] = useState<number>(-1)
  const [removedFileId, setRemovedFileId] = useState<number>(-1)

  const saveFileId = async (id: number) => {
    setFileId(id)
  }

  const removeFileId = async (id: number) => {
    setRemovedFileId(id)
  }

  return (
    <EditorContext.Provider value={{ fileId, saveFileId, removedFileId, removeFileId }}>
      {children}
    </EditorContext.Provider>
  )
}

export default EditorProvider
