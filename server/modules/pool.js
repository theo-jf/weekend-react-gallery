const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    config = {
      // We use the DATABASE_URL from Heroku to connect to our DB
      connectionString: process.env.DATABASE_URL,
      // Heroku also requires this special `ssl` config
      ssl: { rejectUnauthorized: false },
    };
} else {
    config = {
        database: 'react_gallery',
        host: 'localhost', 
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    }
}

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
  });

module.exports = pool;