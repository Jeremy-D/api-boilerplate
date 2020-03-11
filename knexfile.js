// Update with your config settings.

module.exports = {
  test: {
    client: 'pg',
    //change connection string to object if we need to dd a username and password
    //check knex docs for details

    //==========================
    //  UPDATE CONNECTION STRING TO YOUR LOCAL TEST DATABASE
    //==========================

    connection: 'postgres://localhost/API_test',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
    //==========================
    //  UPDATE CONNECTION STRING TO YOUR LOCAL DEVELOPMENT DATABASE
    //==========================
  development: {
    client: 'pg',
    connection: 'postgres://localhost/API',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};
