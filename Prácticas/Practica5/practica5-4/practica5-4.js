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


