#!/usr/bin/env node

'use strict';

const spawn = require('child_process').spawn;

let args = ['create'];

args = args.concat(process.argv.slice(2));

spawn('./node_modules/rethink-migrate/bin/rethink-migrate', args, {
  stdio: 'inherit'
});
