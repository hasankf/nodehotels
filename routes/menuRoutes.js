const express = require('express');
const router= express.Router();  
const MenuItem = require('./../models/menuitem');




router.get('/', async (req,res) => {
    try{
        const data = await MenuItem.find();
        console.log('Data Fetched.');
        res.status(200).json(data);
    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})

    }
})


router.post('/', async (req, res) => {
    console.log('POST /MenuIem hit');

    try{
        const data = req.body

        const newMenu = new MenuItem(data);

        const response = await newMenu.save();
        console.log('Data Saved');
        res.status(200).json(response);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


router.get('/:taste', async(req,res) => {

   try{
        const taste = req.params.taste; // taste is a variable
    // validation
        if(taste == 'sour' || taste == 'sweet' || taste == 'spicy'){
            const response = await MenuItem.find({taste:taste});
            console.log("Fetched");
            res.status(200).json(response);

        }
        else{res.status(404).json({error: 'Invalid taste type'});

        }

   }
   catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

   }
})

// comment added for testing

module.exports = router;