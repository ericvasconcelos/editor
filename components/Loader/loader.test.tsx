import { render, screen, cleanup } from '@testing-library/react'
import { Loader } from './index'

afterEach(cleanup)

describe('Loader', () => {
  it('should render loader', () => {
    render(<Loader />)
    const loader = screen.getByTestId('comp-loader')
    expect(loader).toBeInTheDocument()
  })

  it('renders default loader', async () => {
    render(<Loader size="default" />)
    const loader = screen.getByTestId('comp-loader')
    const MyLoader = document.getElementsByClassName(loader.className)
    const style = window.getComputedStyle(MyLoader[0])
    expect(style.transform).toBe('scale(1)')
  })

  it('renders small loader', async () => {
    render(<Loader size="small" />)
    const loader = screen.getByTestId('comp-loader')
    const MyLoader = document.getElementsByClassName(loader.className)
    const style = window.getComputedStyle(MyLoader[0])
    expect(style.transform).toBe('scale(0.6)')
  })

  it('renders dark loader', async () => {
    render(<Loader kind="dark" />)
    const loader = screen.getByTestId('comp-loader')

    const MyLoader = document.getElementsByClassName(loader.className)
    // @ts-ignore: Unreachable code error
    const style = window.getComputedStyle(MyLoader[0]?.querySelector('div:first-child'))
    expect(style.backgroundColor).toBe('rgb(33, 33, 33)')
  })
})
