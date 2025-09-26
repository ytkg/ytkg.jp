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

  it('should redirect to GitHub when /github is requested', async () => {
    const res = await app.request('/github')
    expect(res.status).toBe(302)
    expect(res.headers.get('Location')).toBe('https://github.com/ytkg')
  })

  it('should redirect to site when /site is requested', async () => {
    const res = await app.request('/site')
    expect(res.status).toBe(302)
    expect(res.headers.get('Location')).toBe('https://takagi.dev')
  })

  it('should redirect unknown path to top', async () => {
    const res = await app.request('/unknown')
    expect(res.status).toBe(302)
    expect(res.headers.get('Location')).toBe('/')
  })
})
