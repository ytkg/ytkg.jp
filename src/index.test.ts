import { describe, it, expect } from 'vitest'
import app from './index'

describe('GET /', () => {
  it('should return a JSON object with my links', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('application/json')
    const body = await res.json()
    expect(body).toEqual({
      'site': 'https://takagi.dev',
      'blog': 'https://takagi.blog',
      'github': 'https://github.com/ytkg',
      'mail': 'takagi@ytkg.jp'
    })
  })
})
