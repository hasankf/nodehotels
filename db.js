// we need mongoose
const mongoose = require ('mongoose');


// define mongodb connection url
const mongourl = 'mongodb://localhost:27017/hotels'  // hotels is database name. will be created

mongoose.connect(mongourl, {   // this is to estabilish connection
    useNewUrlParser: true,
    useUnifiedTopology : true
})

// default connection
//mongoose maintains a default connection object representing mongodb
//connection
const db =  mongoose.connection; 

//db reperesents mongodb connection 


// event listeners, db sunte rahega and will act accordingly
//EVENT LISTENER for db connection
db.on('connected', () => {
    console.log("CONNECTED TO MONGODB SERVER");
})

db.on('disconnected', () => {
    console.log("DISCONNECTED FROM MONGODB SERVER");
})

db.on('error', () => {
    console.log("ERROR");
})


module.exports = db; // import this to express .js
