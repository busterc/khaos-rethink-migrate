#!/usr/bin/env node

'use strict';

require('assert-dotenv')({
  dotenvFile: '.env.dev',
  assertFile: 'assert.env.dev'
});

const spawn = require('child_process').spawn;

// dev does not require `--auth-key` or `--ssl`
let args = `--db ${process.env.DB_NAME} --host ${process.env.DB_HOST} \
--port ${process.env.DB_PORT} --timeout ${process.env.DB_CONNECTION_TIMEOUT}`.split(' ');

args = process.argv.slice(2).concat(args);

spawn('./node_modules/rethink-migrate/bin/rethink-migrate', args, {
  stdio: 'inherit'
});
