const express = require('express');
const router= express.Router();  
const Person = require('../../models/Person');


router.post('/', async (req,res) => {  // if someone sends data on person we will save it using post
    console.log('POST /person hit'); // 🔥 THIS LINE IS FOR DEBUGGING

    try{
        const data = req.body // data parse ho raha hai and eventually coming to req.body

    // create a new person document using mongoose model
        const newPerson = new Person(data); 

    // save the new person to database; 
        const response = await newPerson.save()  // waiting to be saved. when perfomed. success failure or error store in response
        console.log('data saved');             // ^^ as soon as it gets error, it will go down to catch
        res.status(200).json(response); // success
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal error'});
    }
})


router.get('/', async (req,res) => {
    try{
        const data = await Person.find();
        console.log('Data Fetched.');
        res.status(200).json(data);
    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})

    }
})



router.get('/:workType', async(req,res) => {

   try{
        const workType = req.params.workType; // workType is a variable
    // validation
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work:workType});
            console.log("Fetched");
            res.status(200).json(response);

        }
        else{res.status(404).json({error: 'Invalid work type'});

        }

   }
   catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

   }
})

router.put('/:id', async(req,res)=>{   // id is variable but each data will have a unique id 
    try{                            // with which we will find it
        const personID = req.params.id  // extract the id from url parameter
        const updatedPersonData = req.body; // body parser client bhej raha hai saves it in req.body
        
        const response = await Person.findByIdAndUpdate(personID, updatedPersonData, {
            new: true, // return updated doc
            runValidators: true, // run mongoose validation

        })
        if(!response){
            return res.status(404).json({error:'Internal Server Error'});
        }
        console.log("data updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

router.delete('/:id', async(req, res) => {
    try{
        const personID = req.params.id;
        const response = await Person.findByIdAndDelete(personID);

        if(!response){
            return res.status(500).json({error:'Internal Server Error/ Person not found!'});
        }
        console.log('Data Deleted');
        res.status(200).json({message: 'Person deleted successfully'});


    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});

    }
})

module.exports = router;