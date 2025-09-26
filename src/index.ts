import { Hono } from 'hono'

const app = new Hono()

const LINKS: Record<string, string> = {
  site: 'https://takagi.dev',
  blog: 'https://takagi.blog',
  github: 'https://github.com/ytkg',
  x: 'https://x.com/ytkg_',
  mail: 'takagi@ytkg.jp',
}

app.get('/', async (c) => {
  return c.json(LINKS)
})

app.get('/:service', (c) => {
  const service = c.req.param('service')
  const dest = LINKS[service]

  if (dest) return c.redirect(dest, 302)

  return c.redirect('/', 302)
})

export default app
