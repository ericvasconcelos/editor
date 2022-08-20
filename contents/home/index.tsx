import { memo } from 'react'
import Editor from './Editor'
import * as S from './home.styles'
import Sidebar from './Sidebar'

const Home = memo(() => (
  <S.Home>
    <Sidebar />
    <Editor />
  </S.Home>
))

Home.displayName = 'Home'

export default Home
