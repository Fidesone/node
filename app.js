//const saludar = require ("./saludar");
const {saludar, saludarHelloWorld} = require('./saludar.js');
const fs = require ('fs');

//fs Module
/*fs.readFile('text.html','UTF-8',(err, data1) => {
    if(err){
        throw err
    }
    console.log(data1);
});*/
/*fs.rename('text.html', 'newname.html', (err) =>{
    if (err){
    throw err
    }
    console.log('name changed')
});*/

fs.appendFile('text.html', '<p>data to add file</p>', (err) => {
    if (err){
        throw err;
    }
    console.log ('Data add file saccesfully')
});

//fs.writeFile...

//console.log(saludar("Andriu"));
//console.log(saludarHelloWorld());
