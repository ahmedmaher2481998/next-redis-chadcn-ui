import { createClient } from 'redis'

const client = createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT ?? ""),
    }

})
client.on('error', (e) => {
    console.log(`Error has happened `, e);

})
if (!client.isOpen) {
    client.connect()
}
export { client }