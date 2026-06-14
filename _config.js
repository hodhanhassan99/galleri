module.exports = {
    mongoURI: {
        production: `mongodb+srv://hodhan:${process.env.DB_PASSWORD}@cluster0.v9ky2b5.mongodb.net/darkroom?appName=Cluster0`,
        development: `mongodb+srv://hodhan:${process.env.DB_PASSWORD}@cluster0.v9ky2b5.mongodb.net/darkroom-dev?appName=Cluster0`,
        test: `mongodb+srv://hodhan:${process.env.DB_PASSWORD}@cluster0.v9ky2b5.mongodb.net/darkroom-test?appName=Cluster0`
    }
};