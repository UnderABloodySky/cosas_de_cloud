// En base al archivo students.json a un archivo en su máquina y haga una función que:
// Lea el archivo y convierta de JSON a javascript,
// Saque el promedio de los alumnos. Generando un nuevo objeto de la forma

//  {
//   <nombreAlumno1>: <promedioAlumno1>,
//   <nombreAlumno2>: <promedioAlumno2>
// }

// Escriba los promedios en un nuevo archivo promedios.json
// Una vez escrito el archivo promedios.json deberá imprimir en consola el mensaje: “Todos los promedios calculados exitosamente”
// Ante cualquier error deberá imprimir un mensaje de error en la consola.
const fs = require('fs');

function promedio(listaDeCursos){
    const resultados = listaDeCursos.reduce((tupla_sumatoriaNotas_cantidadCursos, curso) => {
        let notas = tupla_sumatoriaNotas_cantidadCursos[0] + curso.mark;
        let cursos = tupla_sumatoriaNotas_cantidadCursos[1] + 1;
        return [notas, cursos]
    }, [0,0] );
    return resultados[0] != 0 || resultados[1] != 0 ?  resultados[0] / resultados[1] : 0;
}

function promedios(unaListaDeEstudiantes){
    return unaListaDeEstudiantes.reduce((promedios, estudiante) => {
        promedios[estudiante.name] = promedio(estudiante.courses);
        return promedios;
    }, {});
}

function promedios_de_alumnos(filename){
    fs.readFile(filename, (err, data) => {
        if (err) {
            console.log('No se pudo leer!');
            throw err;
        }
        let parsedData = null;
        try{
            parsedData = JSON.parse(data);
        }
        catch (e){
            console.log("El contenido del archivo no tiene el formato JSON indicado")
            throw e;
        }
        const result = promedios(parsedData);
        fs.writeFile("promedios.json", JSON.stringify(result), err => { 
            if (err) 
                console.log("Ups! Algo salio mal al escribir el archivo resultado!"); 
            else { 
                console.log("Todos los promedios calculados exitosamente");
            } 
          }); 
     });    
}

promedios_de_alumnos("students.json");
 



//const util = require('util');
//const fs = require('fs');
//const writeFilePromise = util.promisify(fs.writeFile);
//
//const resultObj = {
//	username: os.userInfo().username,
//	hostname: os.hostname()
//};
//
//const p1 = writeFilePromise('data.json', JSON.stringify(resultObj));
//p1.then(() => {
//	console.log("Done");
//}).catch((error) =>{
//	console.log("Ocurrio un error: " + error.message);
//	process.exit(-1);
//});