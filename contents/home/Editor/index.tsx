import { FC, memo, useState, useRef, useEffect } from 'react'
import { EditorProps } from './editor.model'
import * as S from './editor.styles'

const Editor: FC<EditorProps> = memo(({ initialHtml = '' }) => {
  const editableRef = useRef<HTMLDivElement>(null)
  const [html, setHtml] = useState(initialHtml)

  useEffect(() => {
    if (editableRef?.current) {
      editableRef?.current.setAttribute('spellcheck', 'false')
    }
  }, [editableRef])

  return (
    <S.Editor>
      <S.EditorHeader>
        <S.FileName>
          Hello.java
          <S.Close aria-label="Close">×</S.Close>
        </S.FileName>

        <S.Actions>
          <S.Button>Save</S.Button>
          <S.Button kind="danger">Delete</S.Button>
        </S.Actions>
      </S.EditorHeader>
      <S.Editable
        innerRef={editableRef}
        tagName="pre"
        html={html}
        onChange={(e) => setHtml(e.target.value)}
        {...{ spellcheck: false }}
      />
    </S.Editor>
  )
})

Editor.displayName = 'Editor'

export default Editor
