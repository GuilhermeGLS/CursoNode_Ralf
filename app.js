// require("./modules/path")
// require("./modules/fs")


const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect')

dotenv.config();

connectToDatabase()