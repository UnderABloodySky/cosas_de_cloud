const {
    cocinarCarneLadoA,
    cocinarCarneLadoB,
    tostarPan,
    obtenerCarne,
    obtenerPan,
    ponerMayonesa
} = require('./promesas');

/*
    Se desea modelar el proceso de preparación de una hamburguesa en una casa de comidas rápidas.

    Los pasos para preparar la hamburguesa son:
        a. Tostar el pan de arriba.
        b. Tostar el pan de Abajo.
        c. Cocinar la carne de un lado.
        d. Cocinar la carne del otro lado. (Depende de c)
        e. Armar la hamburguesa. (Depende de a, b y d)

    Depende significa, en este contexto, que una tarea sólo puede ser realizada cuando su predecesor ha finalizado exitosamente.

    A su vez, se necesitan obtener los panes y la carne para armar la hamburguesa.

    Además, se disponen de 5 tipos de maquinas que trabajan de manera independiente para:
      - obtener pan,
      - obtener carne
      - tostar pan
      - cocinar carne de un lado y
      - cocinar carne de otro lado.

    Estas maquinas se pueden accionar utilizando las funciones:
        obtenerCarne
            => retorna una promesa que se resuelve con el string "Carne cruda"
        cocinarCarneLadoA
            => espera "Carne cruda" como parametro
            => retorna una promesa que se resuelve con el string "Carne semicocida"
        cocinarCarneLadoB
            => espera "Carne semicocida" como parametro
            => retorna una promesa que se resuelve con el string "Carne cocida"
        obtenerPan
            => retorna una promesa que se resuelve con el string "Pan"
        tostarPan
            => espera el string "Pan" como parametro
            => retorna una promesa que se resuelve con el string "Pan tostado"

    La hamburguesa final armada deberá representarse como un array de la forma:
       ["Pan tostado", "Carne cocida", "Pan tostado"]
*/

//  Promesas
//      Ejemplo (ver archivo adjunto prepararHambuguesa.js)
//      Se desea modelar el proceso de preparación de una hamburguesa en una casa de comidas rápidas. 
//      - Vea el archivo prepararHambuguesa.js el cual ya tiene la solución, ejecutelo, entienda el código 
//      y consulte sus dudas.
//      Nota: Ejecutarlo varias veces y vea cómo las acciones que ocurren en paralelo no se resuelven siempre 
//      en el mismo orden, pero las dependencias  entre tareas son respetadas.
// 
//      - Modifique el còdigo para imprimir en consola: 'La hamburguesa no pudo ser hecha' en caso de que 
//      haya ocurrido un error en cualquier parte de la cadena de producción de la hamburguesa. 
//      Nota: tendrà que forzar un error en alguna parte de la cadena, por ejemplo agregando 
//      la  sentencia: throw new Error('Algo malo paso') o retornando una Promesa rechazada: 
//      Promise.reject(new Error('Algo malo paso'))
// 
//      - Modifique el código para agregar Mayonesa a la hamburguesa. 
//      Esto se debe hacer despuès de haber Obtenido los tres ingredientes, para eso, la “Carne cocida” 
//      deberá  ser transformada en “Carne cocida con Mayonesa”.

class Restaurante {

    carneCocida() {
        // Retorna una promesa de una carne cocida
        return obtenerCarne()
        .then(
            // - Punto 1 -
            //carneCruda => Promise.reject(new Error('Algo malo paso'))
            carneCruda => cocinarCarneLadoA(carneCruda)
        ).then(
            carneSemicocida => cocinarCarneLadoB(carneSemicocida)
        );
    }

    carneConMayonesa(){
        return this.carneCocida()
            .then(
                carneCocida => ponerMayonesa(carneCocida)
            );
    }

    panTostado() {
        // Retorna una promesa de un pan tostado
        return obtenerPan().then(
            pan => tostarPan(pan)
        );
    }

    prepararHamburguesa() {
        // Retorna una promesa de una Hamburguesa
        console.log("Por favor espere mientras su hamburguesa es preparada ...");
        return Promise.all(
            [this.panTostado(), this.carneConMayonesa(), this.panTostado()]
        );
    }
}

// Cliente del restaurante pidiendo la hamburguesa
const restaurante = new Restaurante();
restaurante.prepararHamburguesa()
    .then((hamburguesa) => {
        console.log("Gracias! esta es mi hamburguesa: ", hamburguesa);
    })
    .catch((error) => {
        // - Punto 1 - 
        console.log("La hamburguesa no pudo ser hecha: ", error.message);
    });
