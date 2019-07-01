const net = require('net')
module.exports = function portIsOccupied(port, cb = (err, port) => {}) {
    const server = net.createServer().listen(port)
    server.on('listening', () => {
        console.log(`the server is running on port ${port}`)
        server.close()
        cb(null, port)
        console.log('port', port)
    })

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            portIsOccupied(port + 1, cb)
            console.log(`this port ${port} is occupied.try another.`)
        } else {
            cb(err)
        }
    })

}