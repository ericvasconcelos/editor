import fetch from 'jest-fetch-mock'
import { editorService } from 'services'
import { response } from './db'

beforeEach(() => {
  fetch.resetMocks()
})

describe('editorService', () => {
  it('should render filetree data', async () => {
    fetch.mockResponse(JSON.stringify(response.filetree))

    const [data] = await editorService.getFiletree()
    expect(data.id).toBe(0)
    expect(data.name).toBe('editor')
    expect(data.isDirectory).toBe(true)
  })

  it('should render file data', async () => {
    fetch.mockResponse(JSON.stringify(response.files[2]))

    const data = await editorService.getFile(4)
    expect(data.id).toBe(4)
    expect(data.name).toBe('Main.java')
  })
})
