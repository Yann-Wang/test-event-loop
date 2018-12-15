const path = require('path')
const express = require('express')
const open = require('opn')

const app = express()
const port = 3000
const env = process.env.NODE_ENV

const rootDir = path.join(__dirname, '../client')

app.use(express.static(rootDir))

app.listen(port, () => {
  const url = `http://localhost:${port}`

  console.log(`access ${url}`)
  if (env !== 'production') {
    open(url)
  }
})