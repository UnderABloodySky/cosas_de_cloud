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
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

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


readFilePromise('students.json')
    .then(
            data => {
                    let parsedData = null;
                    try{
                        parsedData = JSON.parse(data);
                    }
                    catch (e){
                        console.log("El contenido del archivo no tiene el formato JSON indicado")
                        throw e;
                    }
                    writeFilePromise("promedios.json", JSON.stringify(promedios(parsedData))) })
                        .then(data => console.log("Guardado"))
                        .catch(
                                error => {
                                    console.log('No se pudo leer!');
                                    throw error;     
                                }
                            ) 
