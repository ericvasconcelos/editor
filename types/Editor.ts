export type EditorContextType = {
  fileId: number
  saveFileId: (id: number) => void
  removedFileId: number
  removeFileId: (id: number) => void
}
