import { memo } from 'react'
import EditorProvider from 'context/editorContext'
import Editor from './Editor'
import * as S from './home.styles'
import Sidebar from './Sidebar'

const Home = memo(() => (
  <EditorProvider>
    <S.Home>
      <Sidebar />
      <Editor />
    </S.Home>
  </EditorProvider>
))

Home.displayName = 'Home'

export default Home
