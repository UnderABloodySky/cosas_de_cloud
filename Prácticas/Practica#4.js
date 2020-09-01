// 1 JSON (Javascript Object Notation)
// Dado la siguiente variable que contiene un  string JSON que representa a un personaje de ficción:

let pepe = '{"firstName":"Pepe","lastName":"Argento","age":45}';
//Convertirlo en un objeto Javascript utilizando la función JSON.parse.
// Note que ha convertido un string en un objeto javascript y puede manipularlo como cualquier otro. Utilizando el objeto resultante del punto anterior actualizarle la edad (campo age) a 50.
//Convierta el objeto modificado del ejercicio anterior en un string JSON. Para eso utilice la función JSON.stringify.

let pepe2json = JSON.parse(pepe) 
let stringAgain = JSON.stringify(pepe2json)


// Dado el siguiente string en formato JSON:
    let datos = '[1, 2, 3, 4]';
    let datos2 = [1, 2, 3];

// Usando la función typeof. ¿A Que tipo de datos pertenece la variable datos? ¿Y datos2?
//Rta: datos es del tipo String, datos2 es del tipo Object (Es una lista/array)

// Evalue la expresión let datos3 = JSON.parse(datos); ¿A que tipo de datos pertenece datos3?
let datos3 = JSON.parse(datos)
// Rta: Es del tipo object. (Es una lista/array)

// Evalue la expresión let datos4 = JSON.stringify(datos2); ¿A qué tipo de datos pertenece datos4?
let datos4 = JSON.stringify(datos2)
//Rta: Pertenece al tipo String.



// Dado la siguiente porción de código:

class User {
    constructor(name , friends = []) {
        this.name = name;
        this.friends = friends;
    }
    addFriend(aUser) {
      this.friends.push(aUser);
    }
 }
  
 let user1 = new User('user1');
 let user2 = new User('user2');
 user1.addFriend(user2);
 user2.addFriend(user1);

//Trate de convertir user1 o user2 a un string JSON ¿Qué excepción se lanzó? ¿Porqué?

// Rta: Uncaught TypeError: Converting circular structure to JSON
//    --> starting at object with constructor 'User'
//    |     property 'friends' -> object with constructor 'Array'
//    |     index 0 -> object with constructor 'User'
//    |     property 'friends' -> object with constructor 'Array'
//    --- index 0 closes the circle
//    at JSON.stringify (<anonymous>)

// Esta excepción se lanza porque desde cualquiera de los dos usuarios, se esta referenciando de manera circular al otro, en una recursion infinita.


//Implemente el método toJSON, de forma tal que rompa la recursión y permita serializar una instancia de User.

function toJSON(aUser){
    let temp = new User(aUser.name, aUser.friends)
    temp.friends.forEach( friend => friend.friends = friend.friends.filter(user => !user === aUser))
    return JSON.stringify(temp)
}