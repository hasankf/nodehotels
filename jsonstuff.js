// const jsonstring = '{"name " : "Hasan","age" : 20, "club" : "FC BARCELONA","position" : "Striker"}'
// const jsonobject = JSON.parse(jsonstring); // converting a json string -->> object
// console.log(jsonobject.position);
// console.log(typeof jsonstring); // will give string in return
// console.log(typeof jsonobject); // will give object

  
const jsono = {            // object initialized
    "NAME" : " YAMAL ", 
    " AGE ": 17,
    "POSITION" : "RIGHT WINGER"
};

const jsons = JSON.stringify(jsono);
console.log(jsons);

