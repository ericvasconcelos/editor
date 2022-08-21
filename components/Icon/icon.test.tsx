import { render, screen, cleanup } from '@testing-library/react'
import { Icon } from './index'

afterEach(cleanup)

describe('Icon', () => {
  it('should render folder closed icon', () => {
    render(<Icon isDirectory={true} open={false} name="message" />)
    const iconWrapper = screen.getByTestId('comp-icon')
    expect(iconWrapper).toBeInTheDocument()
    const iconSVG = iconWrapper.querySelector('svg')
    expect(iconSVG).toHaveAttribute('name', 'folderClosed')
  })

  it('should render folder open icon', () => {
    render(<Icon isDirectory={true} open={true} name="message" />)
    const iconWrapper = screen.getByTestId('comp-icon')
    expect(iconWrapper).toBeInTheDocument()
    const iconSVG = iconWrapper.querySelector('svg')
    expect(iconSVG).toHaveAttribute('name', 'folderOpen')
  })

  it('should render java icon', () => {
    render(<Icon isDirectory={false} open={false} name="message.java" />)
    const iconWrapper = screen.getByTestId('comp-icon')
    expect(iconWrapper).toBeInTheDocument()
    const iconSVG = iconWrapper.querySelector('svg')
    expect(iconSVG).toHaveAttribute('name', 'java')
  })

  it('should render file icon', () => {
    render(<Icon isDirectory={false} open={false} name="message.js" />)
    const iconWrapper = screen.getByTestId('comp-icon')
    expect(iconWrapper).toBeInTheDocument()
    const iconSVG = iconWrapper.querySelector('svg')
    expect(iconSVG).toHaveAttribute('name', 'file')
  })
})
