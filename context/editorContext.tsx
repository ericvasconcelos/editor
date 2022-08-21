import { FC, createContext, ReactElement, useState } from 'react'
import { EditorContextType } from 'types'

export const EditorContext = createContext<EditorContextType | null>(null)

const EditorProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [fileId, setFileId] = useState<number>(-1)

  const saveFileId = (id: number) => {
    setFileId(id)
  }

  return <EditorContext.Provider value={{ fileId, saveFileId }}>{children}</EditorContext.Provider>
}

export default EditorProvider
