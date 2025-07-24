
// in the tutorial this is server.js
const express = require ('express')
const app = express();   // bani banayi

const db = require ('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());  // converts ANY data to json format and puts in req.body




app.get('/', function(req, res) {    // GET is just to retrieve the data and not do anything about it.
    res.send('kiss my ass')         // response print hoga
})




// POST METHOD for person

// GET METHOD









// GET METHOD


//  import router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

//user the routers
app.use('/person', personRoutes);
app.use('/menuItem', menuRoutes);



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("SERVER RUNNING")
})// port address. PUT THIS IN YOUR BROWSER AFTER RUNNING THIS PROGRAM



