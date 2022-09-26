const { default: mongoose } = require("mongoose");
const url = "mongodb://0.0.0.0:27017/";
const dbName = 'nodejs_course';
async function connectDB() {
    await  mongoose.connect(url + dbName).then(() => {
        console.log("Connected to database");
    }).catch((err) => {})   ;
  }
module.exports = connectDB;




































// const { MongoClient } = require('mongodb');
// const url = "mongodb://0.0.0.0:27017/";
// const dbName = 'nodejs_course';
// const client = new MongoClient(url);
// async function connect() {

//     await client.connect().then(() => {
//         console.log("Connected successfully to server");

//     }).catch(err => {
//         console.log(err.stack);

//     });
//     const db = await client.db(dbName);
//     return db;
// }
// module.exports = connect;