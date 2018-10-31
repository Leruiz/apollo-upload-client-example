import express from 'express'

import graphql from '../src-graphql'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3001

app.set('port', port)

// to support JSON-encoded bodies and URL-encoded bodies

app.use(bodyParser.json({
  limit: '50mb',
  extended: true
}))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}))
// add express validator middleware
app.use(expressValidator())
graphql.applyMiddleware({ app })
// Listen the server
app.listen(port, host)
console.log(`Server listening on http://localhost:${port}`) // eslint-disable-line no-console
