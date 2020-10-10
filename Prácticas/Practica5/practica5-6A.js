//Promesas y manejo de archivos
//Implemente el ejercicio Callbacks y manejo de archivos utilizando promesas, 
//para eso deberá “promisificar” las funciones de manejo de archivos. 
//para promisificar fs.readfile:

//const util = require('util');
//const fs = require('fs');
//
//const readFile = util.promisify(fs.readFile);
//readFile('archivo.txt').then((data) => {
// // Hacer algo con data
//}).catch((error) => {
// // Manejar el error
//});

const util = require('util');
const fs = require('fs');
const filename = 'unArchivo.txt';
const readFilePromise = util.promisify(fs.readFile);


function processFile(readContent) {
    console.log('Processing my file');
    console.log('file size: ', readContent.length);
 }


readFilePromise(filename)
    .then(
            data => {
                        console.log('The file was correctly read.')
                        processFile(data);
    }).catch(
            error => {
                console.log('Ouch! Error!');
                throw err         
            }
        ) 
console.log('Running the last line of main file');


