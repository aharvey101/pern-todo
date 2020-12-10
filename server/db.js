const Pool = require('pg').Pool

const pool = new Pool({
  user: 'perntodo',
  password: 'mellon67',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
})

module.exports = pool
