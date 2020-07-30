/* eslint-disable @typescript-eslint/no-var-requires */

const http = require('http')
const mockserver = require('mockserver')

http.createServer(mockserver('../Mock-Server/mock')).listen(7000)

console.log('Mock server started on port 7000...')
