// Version asincronica:
const fs = require('fs');
const filename = 'unArchivoasd.txt';

function processFile(readContent) {
   console.log('Processing my file');
   console.log('file size: ', readContent.length);
}

fs.readFile(filename, (err, data) => {
   if (err) {
       console.log('Ouch! Error!');
       throw err.message;
   }
   console.log('The file was correctly read.');
   processFile(data);
});

console.log('Running the last line of main file');



// Version sincronica:

//const fs = require('fs');
//const filename = 'unArchivoasd.txt';
//
//function processFile(readContent) {
//   console.log('Processing my file');
//   console.log('file size: ', readContent.length);
//}
//try {
//   let content = fs.readFileSync(filename);
//   console.log('The file was correctly read.');
//   processFile(content);
//}
//catch (exception) {
//   console.log('Ouch! Error!!');
//
//}
//console.log('Running the last line of main file');
//


// Compare ambas soluciones y responda brevemente:
// 1- Qué ocurre en flujo de control para cada caso? Explique cómo ocurre la ejecución para ambas versiones.
// Mientras que la versión sincronica ofrece mas de lo conocido - una ejecución lineal como venimos acostumbrados, la versión sincronica implica un 
// orden menos "organico" o al menos intuitivo.

//    Running the last line of main file.
//    The file was correctly read.
//    Processing my file.
//    file size:  20.

// Mientras que a versión sincronica:

//    The file was correctly read.
//    Processing my file.
//    file size:  20.
//    Running the last line of main file.

// 2- Suponiendo que el archivo a leer  es muy grande y va  a demorar, cual de las dos opciones prefiere? Cual le permite “seguir” procesando?
// La versión asincronica.

// 3- ¿Cuál de las dos variantes sigue la filosofía de Node?
// Idem punto anterior.

// 4- ¿Qué efectos negativos puedo tener en un sistema implementado en node donde se hace de manera sincrónica E/S?
// Traba al sistema mientras se hace E/S y desperdicia ciclos de computacion.

// 5- Pruebe usando un filename válido y uno inválido. Compare cómo se realiza el manejo de los errores para cada caso.
// Mientras que en la version sincronica se trycatchea como se venia trabajando anteriormente. a fallar se imprimi "ouch, error" unicamente
// mientras que en la version asincronica Se lanza la excepcion.