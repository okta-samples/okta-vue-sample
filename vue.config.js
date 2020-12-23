// Support storing environment variables in a file named ".okta.env"
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Read environment variables from "testenv". Override environment vars if they are already set.
const OKTAENV = path.resolve(__dirname, '.', '.okta.env');
if (fs.existsSync(OKTAENV)) {
  const envConfig = dotenv.parse(fs.readFileSync(OKTAENV));
  Object.keys(envConfig).forEach((k) => {
    process.env[k] = envConfig[k];
  });
}

const env = {};

// List of environment variables made available to the app
[
  'ISSUER',
  'CLIENT_ID',
].forEach(function (key) {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} must be set. See README.md`);
  }
  env[key] = JSON.stringify(process.env[key]);
});

module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        const base = args[0]['process.env'];
        args[0]['process.env'] = {
          ...base,
          ...env,
        };
        return args;
      })
  },
  runtimeCompiler: true
}
