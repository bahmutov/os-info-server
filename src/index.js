#!/usr/bin/env node

'use strict'

const port = process.env.PORT || 4000
const os = require('os')

const info = {
  cpus: os.cpus(),
  freemem: os.freemem(),
  loadavg: os.loadavg(),
  platform: os.platform(),
  release: os.release(),
  totalmem: os.totalmem(),
  type: os.type(),
  uptime: os.uptime()
}
const msg = 'OS info\n' +
  JSON.stringify(info, null, 2) + '\n'
console.log(msg)

require('http').Server((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end(msg)
}).listen(port)
console.log('listening on port', port)
