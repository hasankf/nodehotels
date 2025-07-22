// // // function add(a,b){                  // function To add
// // //     return a + b ; 
// // // }

// // // var add = function(a,b){              // add is a function
// // //     return a + b;
// // // }

// // // var add = (a,b) => {return a + b ;}     // arrow function add


// // var add = (a,b) => a + b;  // function initialized
// // var result  = add ( 122, 29);

// // (function(){                          // calling and printing function immediately 
// //     console.log('');
// // })();
// // console.log(result);


// // function callback(){        // callback function will be used inside the main function and it will be executed
// //                            // only and only after the main function executes
// //     console.log('i am calling a callback function');
// // }

// // const add = function(a,b,callback){   // pass callback as a parameter with the main function parameters
// //     var result = a + b;
// //     console.log('result: ' , result); // main work done
// //     callback();
// // }
// // add(199,1,callback); // calling the function and the callback function to run one after the other;





// // function khanalekeaao(){             // defining function to be called later
// //     console.log("Khana leke aagaya");
// // }
// // const khana = function(a,b,khanalekeaao){
// //     var weightgained = a + b;
// //     console.log("you have gained ", weightgained , " kilos")
// //     khanalekeaao();                 // do this function after eating
// // }
// // khana(4,3,khanalekeaao);


// // const add  = function ( a, b, hasan){
// //     var res = a * b ; 
// //     console.log ( "product: ", res);
// //     hasan(); // callback function in the end
// // }

// // // add(5,3, function(){    // inline function
// // //     console.log("Result has been computed");
// // // })


// // add(5,4, () => console.log('product computed'))         // in the same line
// //  // this add is taking 2 numbers and 1 function        // generally used


                         

// // var add= function(a,b , hasan){
// //     console.log(a+b);
// //     hasan();
// // }

// // add(6,9, () => {
// //     console.log("sum has been calculated");
// // })





// // var fs = require('fs');
// // var os = require('os');

// // var user = os.userInfo();
// // console.log(user.username)


// // fs.appendFile('greeting.txt', 'Hi'+ user.username + '! \n', () => {    // fs-- fileextension data callbackfunction
// //                 //data         -------message----------   callback
// //     console.log('File is created successfully');
// // });

// // console.log(fs);


// const notes = require('./notes.js');  // will take stuff from another files notes.js
// var _ = require('lodash')   // another npm very important

// console.log("SERVER FILE IS AVAILABLE")

// console.log(notes.age); // is taking stuff from notes, specifically age
// console.log(notes.club);  // same for club

// var result = notes.add(4,6);  // using the function defined in notes file
// console.log(result);

// var result2 = notes.add(notes.age + 33, 19);
// console.log(result2);

// var data = ["person", "person", 1,2,3,2,3,2,3,2,3,1,4,5,6,7,2,1, "name", "age", "4", "4", "3"];
// var filter  = _.uniq(data);
// console.log(filter);


const express = require ('express')
const app = express();   // bani banayi


app.get('/', function(req, res) {    // GET is just to retrieve the data and not do anything about it.
    res.send('kiss my ass')         // response print hoga
})

app.get('/chicken', (req,res) => {
    res.send('Sure sir i would love to serve this chicken to you!')
});

app.listen(3000); // port address. PUT THIS IN YOUR BROWSER AFTER RUNNING THIS PROGRAM

