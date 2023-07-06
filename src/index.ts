import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  return c.json(
    {
      'site': 'https://takagi.dev',
      'blog': 'https://takagi.blog',
      'github': 'https://github.com/ytkg'
    }
  )
})

export default app
