'use strict'
// Support storing environment variables in a file named "testenv" at the project root
const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')

// Read environment variables from "testenv". Override environment vars if they are already set.
const OKTA_ENV = path.resolve(__dirname, '..', '.okta.env')
if (fs.existsSync(OKTA_ENV)) {
  const envConfig = dotenv.parse(fs.readFileSync(OKTA_ENV))
  Object.keys(envConfig).forEach((k) => {
    process.env[k] = envConfig[k]
  })
}
// List of environment variables made available to the app
[
  'ISSUER',
  'CLIENT_ID'
].forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} must be set. See README.md`)
  }
  process.env[key] = JSON.stringify(process.env[key]) // ensure variable is a string
})

const { CLIENT_ID, ISSUER } = process.env

module.exports = {
  NODE_ENV: '"production"',
  CLIENT_ID,
  ISSUER
}
