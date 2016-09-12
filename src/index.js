#!/usr/bin/env node

'use strict'

const port = process.env.PORT || 4000
const os = require('os')
const prettyMs = require('pretty-ms')
const prettyBytes = require('pretty-bytes')

function getStatsMessage () {
  const info = {
    cpus: os.cpus(),
    freemem: prettyBytes(os.freemem()),
    totalmem: prettyBytes(os.totalmem()),
    loadavg: os.loadavg(),
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
    uptime: prettyMs(os.uptime() * 1000)
  }
  const msg = 'OS info\n' +
    JSON.stringify(info, null, 2) + '\n'
  return msg
}

require('http').Server((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  const msg = getStatsMessage()
  console.log(msg)
  res.end(msg)
}).listen(port)

console.log(getStatsMessage())
console.log('listening on port', port)
