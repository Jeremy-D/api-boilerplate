#A backend boilerplate for building apps!
## The Stack
- Node
- Express
- Knex
- Postgres
- (check the package.json file for versions)

## Testing
- Jest
- Supertest

## Commands
npm run server 
- runs index.js with nodemon so app will update when a file is saved
npm test
- runs test suite agains simple CRUD api with a users model

## Postgres db
setting up a postgres database with the psql command line tool or pgAdmin is required before 

- if you don't already have postgres install download it

### create development database
- psql 
- CREATE DATABASE [databasenamegoeshere]
- update connection string in knexfile.js (this file is at the top level of the folder)
- in the knexfile.js development object

    connection: 'postgres://localhost/API',
    changes to 
    connection: 'postgres://localhost/[databasenamegoeshere]',

- run migrations to create a users table
    - knex migrate:latest --env development
- run seeds to create dummy data users
    - knex seed:run --env development

### test database
psql
- CREATE DATABASE [databasenamegoeshere]
- update connection string in knexfile.js (this file is at the top level of the folder)
-in the knexfile.js test object

    connection: 'postgres://localhost/API_test',
        changes to 
    connection: 'postgres://localhost/[databasenamegoeshere]',

#### you shouldn't need to run migrations or seeds manually for the test database, but it can help to see what the users.test.js file is doing before each test. 
There won't be any data in the test database unless you run seeds manually. The test file should migrate and seed the database before each test. It will rollback the migrations after each test then destroy the db connection at the end of running all tests. 


- run migrations to create a users table
    - knex migrate:latest --env test
- run seeds to create dummy data users
    - knex seed:run --env test

