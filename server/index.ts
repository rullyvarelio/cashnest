import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json({ message: 'Hello from Hono!' }));
app.get('/api/data', (c) => c.json({ data: 'Sample data from API' }));



export default {
    port: 3000,
    fetch: app.fetch,
}