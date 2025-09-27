import { Hono } from 'hono'
import defaultLinks from './links.json'

export type Links = Record<string, string>

export const createApp = (links: Links = defaultLinks as Links) => {
  const app = new Hono()

  app.get('/', async (c) => {
    return c.json(links)
  })

  app.get('/:service', (c) => {
    const service = c.req.param('service')
    const dest = links[service]

    if (dest) return c.redirect(dest, 302)

    return c.redirect('/', 302)
  })

  return app
}

export default createApp()
