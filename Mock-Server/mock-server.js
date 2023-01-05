/* eslint-disable @typescript-eslint/no-var-requires */

const http = require('http')
const mockserver = require('mockserver')

http.createServer(mockserver('../Mock-Server/mock')).listen(7000,"127.0.0.1")

console.log('Mock server started on port 7000...')
