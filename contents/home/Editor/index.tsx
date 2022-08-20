import { FC, memo, useState } from 'react'
import { EditorProps } from './editor.model'
import * as S from './editor.styles'

const Editor: FC<EditorProps> = memo(({ initialHtml = '' }) => {
  const [html, setHtml] = useState(initialHtml)

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
        tagName="pre"
        html={html} // innerHTML of the editable div
        // disabled={!this.state.editable} // use true to disable edition
        onChange={(e) => setHtml(e.target.value)} // handle innerHTML change
        // onBlur={this.sanitize}
      />
    </S.Editor>
  )
})

Editor.displayName = 'Editor'

export default Editor
