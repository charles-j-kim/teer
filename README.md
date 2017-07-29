## About
Team Teers contribution for AngelHack Global Hackathon Series: Silicon Valley on July 29, 2017.

## Team Members
* Charles Kim
* Soojin Kim
* Tom Dickson
* Ryan Perry
* Rajas Kale

## Teer

## Database Initialization
IMPORTANT: ensure postgres is running before performing these steps.

After running npm install run the following:

   ```
	grunt pgcreatedb:default
   ```

### Run Migrations & Data Seeds
In terminal, from the root directory:

`knex migrate:latest --env NODE_ENV`

`knex migrate:rollback --env NODE_ENV`

`knex seed:run --env NODE_ENV`