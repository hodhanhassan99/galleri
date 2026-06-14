var config = {}

config.mongoURI = {
    production: 'mongodb+srv://hodhan:6161332200p@cluster0.v9ky2b5.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://hodhan:6161332200p@cluster0.v9ky2b5.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://hodhan:6161332200p@cluster0.v9ky2b5.mongodb.net/darkroom-test?retryWrites=true&w=majority'
}

module.exports =  config;