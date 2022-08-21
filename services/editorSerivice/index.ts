import { HttpClient } from '../HttpClient'

export const editorService = {
  async getFiletree() {
    return HttpClient(`${process.env.NEXT_PUBLIC_API}/filetree`, {
      method: 'GET'
    }).then(async (response) => {
      if (!response.ok) throw new Error('Request problem, try again')
      return response.body
    })
  },
  async getFile(id) {
    return HttpClient(`${process.env.NEXT_PUBLIC_API}/files/${id}`, {
      method: 'GET'
    }).then((response) => {
      if (!response.ok) throw new Error('Request problem, try again')
      return response.body
    })
  },
  async updateFile(body) {
    return HttpClient(`${process.env.NEXT_PUBLIC_API}/files/${body?.id}`, {
      method: 'PUT',
      body
    }).then(async (response) => {
      if (!response.ok) throw new Error('Request problem, try again')
    })
  },
  async deleteFile(id) {
    return HttpClient(`${process.env.NEXT_PUBLIC_API}/files/${id}`, {
      method: 'DELETE'
    }).then(async (response) => {
      if (!response.ok) throw new Error('Request problem, try again')
    })
  }
}
