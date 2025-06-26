import { Hono } from 'hono'
const app = new Hono<{ Bindings: Env }>()

app.get('/api/', (c) => c.json({ name: 'dani' }))

export default app
