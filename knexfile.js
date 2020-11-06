// Update with your config settings.
require("dotenv").config();
const pgConnection = process.env.SECRET_THING;
module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/project.db3'
    },
    migrations:{
      directory: './data/migrations' 
    },
    seeds:{
      directory: './data/seeds'
    }, 
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },//close for development

  
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    connection: pgConnection,
    useNullAsDefault: true,
    // client: "postgresql",
    client: "pg",
    migrations: {
      directory: './data/migrations',
    },
    seeds:{
      directory: './data/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    },
  }

};
