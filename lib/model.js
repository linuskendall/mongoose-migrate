const path = require('path')

if (!process.env.MIGRATION_CONFIG_PATH)
  throw (new Error('MIGRATION_CONFIG_PATH must be defined'))
 
var configPath  = process.env.MIGRATION_CONFIG_PATH,
    db          = require(path.join(process.cwd(), configPath))['db'];

module.exports = exports = db.model('Migration', new db.Schema({ migration: {} }));
