module.exports = {
    mongoURI: {
        production: `mongodb+srv://hodhan:${process.env.DB_PASSWORD}@cluster0.v9ky2b5.mongodb.net/darkroom?retryWrites=true&w=majority`,
        development: `mongodb+srv://hodhan:${process.env.DB_PASSWORD}@cluster0.v9ky2b5.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
        test: `mongodb+srv://hodhan:${process.env.DB_PASSWORD}@cluster0.v9ky2b5.mongodb.net/darkroom-test?retryWrites=true&w=majority`
    }
};