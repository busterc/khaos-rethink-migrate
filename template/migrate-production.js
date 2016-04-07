#!/usr/bin/env node

'use strict';

require('assert-dotenv')({
  dotenvFile: '.env.production',
  assertFile: 'assert.env.production'
});

const spawn = require('child_process').spawn;

// re-stringify newlines for later JSON parsing
const sslCert = process.env.DB_SSL_CERT.replace(/\n/g, "\\n");

let args = `--db :: ${process.env.DB_NAME} :: --host :: ${process.env.DB_HOST} :: \
--port :: ${process.env.DB_PORT} :: --timeout :: ${process.env.DB_CONNECTION_TIMEOUT} :: \
--auth-key :: ${process.env.DB_AUTH_KEY} :: --ssl :: { "ca": "${sslCert}" }`.split(' :: ');

args = process.argv.slice(2).concat(args);

spawn('./node_modules/rethink-migrate/bin/rethink-migrate', args, {
  stdio: 'inherit'
});
