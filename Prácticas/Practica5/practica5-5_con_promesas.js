//Bajando contenido  de Internet
//Analice el ejemplo provisto a continuación, el cual descarga un recurso de internet 
//(puede cambiar la URL si lo desea). Implemente una versión equivalente utilizando promesas.
//Lea la documentación de https://www.npmjs.com/package/request-promise 
//para resolver este ejercicio

const rp = require('request-promise');
const request = require('request');
const options = { 
   url: 'https://www.reddit.com/r/funny.json',
   method: 'GET',
   headers: {
       'Accept': 'application/json',
       'Accept-Charset': 'utf-8',
       'User-Agent': 'my-reddit-client'
   }
};

rp(options).then(body => {
         const json = JSON.parse(body)
         console.log(json)
      })
   .catch(
      error => {
         console.log();
         throw error; }
   );