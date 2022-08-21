import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './index'

afterEach(cleanup)

describe('Button', () => {
  const onClick = jest.fn()

  it('should render a button', () => {
    render(<Button onClick={onClick}>I`m am a button</Button>)

    const button = screen.getByRole('button', {
      name: /I`m am a button/i
    })

    expect(button).toBeInTheDocument()
  })

  it('renders trigger a function', async () => {
    render(<Button onClick={onClick}>I`m am a button</Button>)

    const button = screen.getByRole('button', {
      name: /I`m am a button/i
    })

    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('renders danger kind', async () => {
    render(
      <Button kind="danger" onClick={onClick}>
        I`m am a button
      </Button>
    )
    const button = screen.getByRole('button', {
      name: /I`m am a button/i
    })

    const MyButton = document.getElementsByClassName(button.className)
    const style = window.getComputedStyle(MyButton[0])
    expect(style.backgroundColor).toBe('rgb(211, 47, 47)')
  })

  it('renders loading', async () => {
    render(
      <Button isLoading={true} onClick={onClick}>
        I`m am a button
      </Button>
    )

    const loader = screen.getByTestId('comp-loader')
    expect(loader).toBeInTheDocument()
  })
})
