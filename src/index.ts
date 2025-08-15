import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  return c.json(
    {
      'site': 'https://takagi.dev',
      'blog': 'https://takagi.blog',
      'github': 'https://github.com/ytkg',
      'mail': 'takagi@ytkg.jp'
    }
  )
})

export default app
