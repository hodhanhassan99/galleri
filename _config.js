var config = {};

const dbPassword = process.env.DB_PASSWORD; 

config.mongoURI = {
    production: `mongodb+srv://hodhan:${dbPassword}@cluster0.v9ky2b5.mongodb.net/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://hodhan:${dbPassword}@cluster0.v9ky2b5.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://hodhan:${dbPassword}@cluster0.v9ky2b5.mongodb.net/darkroom-test?retryWrites=true&w=majority`
}

module.exports = config;