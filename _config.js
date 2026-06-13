var config = {}

config.mongoURI = {
    production: 'mongodb://hodhan:6161332200p@ac-niamzvk-shard-00-00.v9ky2b5.mongodb.net:27017,ac-niamzvk-shard-00-01.v9ky2b5.mongodb.net:27017,ac-niamzvk-shard-00-02.v9ky2b5.mongodb.net:27017/darkroom?ssl=true&replicaSet=atlas-t67mzw-shard-0&authSource=admin&retryWrites=true&w=majority',
    development: 'mongodb://hodhan:6161332200p@ac-niamzvk-shard-00-00.v9ky2b5.mongodb.net:27017,ac-niamzvk-shard-00-01.v9ky2b5.mongodb.net:27017,ac-niamzvk-shard-00-02.v9ky2b5.mongodb.net:27017/darkroom-dev?ssl=true&replicaSet=atlas-t67mzw-shard-0&authSource=admin&retryWrites=true&w=majority',
    test: 'mongodb://hodhan:6161332200p@ac-niamzvk-shard-00-00.v9ky2b5.mongodb.net:27017,ac-niamzvk-shard-00-01.v9ky2b5.mongodb.net:27017,ac-niamzvk-shard-00-02.v9ky2b5.mongodb.net:27017/darkroom-test?ssl=true&replicaSet=atlas-t67mzw-shard-0&authSource=admin&retryWrites=true&w=majority'
}

module.exports = config;