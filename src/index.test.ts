import { describe, it, expect } from 'vitest'
import { createApp } from './index'

const TEST_LINKS = {
  site: 'https://example.dev',
  blog: 'https://blog.example.dev',
  github: 'https://github.com/example',
  x: 'https://x.com/example',
  mail: 'contact@example.dev',
}

const app = createApp(TEST_LINKS)

describe('GET /', () => {
  it('should return a JSON object with my links', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('application/json')
    const body = await res.json()
    expect(body).toEqual(TEST_LINKS)
  })

  it('should redirect to GitHub when /github is requested', async () => {
    const res = await app.request('/github')
    expect(res.status).toBe(302)
    expect(res.headers.get('Location')).toBe(TEST_LINKS.github)
  })

  it('should redirect to site when /site is requested', async () => {
    const res = await app.request('/site')
    expect(res.status).toBe(302)
    expect(res.headers.get('Location')).toBe(TEST_LINKS.site)
  })

  it('should redirect unknown path to top', async () => {
    const res = await app.request('/unknown')
    expect(res.status).toBe(302)
    expect(res.headers.get('Location')).toBe('/')
  })
})
