const mysql = require('mysql')


  class Connection {
    constructor() {
      if (!this.pool) {
        console.log('creating connection pool...')
        this.pool = mysql.createPool({
          connectionLimit: 100,
          host: 'database-2.citrcnjnyamx.us-east-2.rds.amazonaws.com',
          user: 'admin',
          password: 'ladybird102524',
          database: 'grass'
        })

        return this.pool
      }

      return this.pool
    }
  }

  const instance = new Connection()

  module.exports = instance;