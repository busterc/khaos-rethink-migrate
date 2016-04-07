# {{Database-Name}}-db
> a rethinkdb migrations repo

- Provides commands that wrap [`rethink-migrate`](https://github.com/JohanObrink/rethink-migrate) in order to assert the use of environment settings.

## Install Dependencies

```sh
$ npm install
```

## Usage

```sh
# create a new migration file in ./migrations
$ ./create.js whatever-you-wanna-label-it
# ==> Created migration ./migrations/20160101000000-whatever-you-wanna-label-it.js

# when migrating, I suggest using `-l debug` (log-level debug)
# to see as much detail as possible during migration

# for the dev environment (local)
# up
$ ./migrate-dev.js up -l debug

# down
$ ./migrate-dev.js down -l debug


# for the production environment
# up
$ ./migrate-production.js up -l debug

# down
$ ./migrate-production.js down -l debug

```
