// 1. Arrays

//Evaluar las siguientes expresiones y explicar el resultado. 
//Analizar en cada punto si se modifica el array, se devuelve uno nuevo o ninguna de las dos.

['Homer', 'Marge', 'Bart'].forEach((elem, index) => console.log(index, elem))
//Rta: Devuelve en pantalla cada uno de los elementos de la lista con su posicion en el array 

let lb = [1, 2, 3, 4, 8, 9 ]; lb.filter((number) => (number % 2) == 0)
//Rta: retorna la lista filtrada sin sus elementos impares

let lc = ['Homer', 'Marge', 'Bart']; lc.map((name) => name.toUpperCase() + 1)
//Rta: Retorna una lista con los mismos elementos, solo que escritos en mayuscula con un "1" al final

let ld = [1, 2, 3, 4, 5]; ld.map((number) => number + 1)
//Rta: La lista de sucesores de los elementos de la lista ld

let le = [1, 2, 3, 4, 5]; ld.reduce(
    (number, initialValue) => initialValue + number,
    0
)
//Rta: La sumatoria de los valores del array

let lf = [1, 2, 3, 4]; lf.concat(5, 6, 7, 8)
//Rta: El resultado de contatener 5,6,7 y 8 al array original

let lg = [1, 2, 3, 4]; lg.concat([5, 6, 7, 8], [9, 10, 11, 12])
//Rta: El resultado de contatenar todos los elementos de ambas listas al array original

[1, 2, 3, 4, 5].every((elem) => elem > 0)
//Every retorna tru si todos los elementos de una coleccion cumplen una determinada condicion. En este caso, retorna true.

[-1, 1, 2, 3, 4, 5].every((elem) => elem > 0)
//Rta: Por lo mencionado anteriormente, retorna false

[-5, -4, -3, -2, -1, 0].some((elem) => elem > 0)
//Some retorna true si alguno de los elementos de una coleccion cumplen una determinada condicion. En este caso, retorna false.

[-1, 1, 2, 3, 4, 5].some((elem) => elem > 0)
//Rta: Por lo mencionado anteriormente, retorna true

['Homer', 'Marge', 'Bart'].includes('Lisa')
//Rta: Retorna false xq el elemento no esta en el array.

let lm = ['Homer', 'Marge', 'Bart']; lm.join('|')
//Rta: Retorna Una String resultante de concatenar todos los elementos de la lista, separados por el pipe.

let ln = ['Homer', 'Margaret', 'Bart']; ln.sort((elem1, elem2) => (elem1.length > elem2.length))
//Rta: Retorna la lista ordenada segun la cantidad de caracteres de los elementos de mayor a menor

let lo = ['Pepe', 'Moni', 'Coqui']; lo.push('Dardo');
//Retorna 4, la cantidad de elementos del array tras haberle agregado el nuevo elemento.

//Escriba la función concat(a1, a2, a3) que retorne un nuevo array con los valores de a1, a2 y a3.
function concat(a1, a2, a3){
    return a1.concat([5, 6, 7, 8], a2.concat(a3))
} 

//Escriba la función average(array) que dado una array de enteros retorne su promedio. Nota: usar el mensaje reduce
function average(array){
    return array.reduce((a, b) => (a + b)) / array.length
}

//Escriba la función raiseTo(array, power) que retorna un nuevo array con todos los elementos de array elevados a la potencia power.  Nota: Utilice el método de array map.
function raiseTo(array, power){
    return array.map( it => it**power)
}

//Escriba la función greaterThan(array, bound) que retorne un nuevo array con todos los elementos mayores que bound.
function greaterThan(array, bound){
    return array.filter( it => it > bound)
}

//Escriba la función areAllGreaterThan(array, bound) que retorne true si todos los elementos del array son mayores que bound y false en caso contrario. Nota: Utilice el método de array every.
function areAllGreaterThan(array, bound){
    return array.every( n => n > bound)
}

//Escriba la función sort(array), que recibe un array de números y lo ordena de forma ascendente.
function sort(array){
    return array.sort()
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2. Objetos Javascript
//Evaluar las siguientes expresiones, siempre antecedidas por el código del recuadro, una por una, y explicar el resultado.

obj = {name: "Homer", lastName: "Simpson", age: 38}

Object.keys(obj)
//Rta: Retorna una lista con name, lastname y age

Object.values(obj)
//Rta: Retorna una lista con Homer, Simpsons y 38-

Object.entries(obj)
//Rta: Retorna una lista de listas cuyos elementos son [atributo, valor]

Object.entries(obj).forEach((entry) => console.log(entry[0], entry[1]))
//Rta: Imprime en pantalla atributo valor

let user ={name: 'Homer', lastname: 'Simpson', age: 38,  todo:[]};
user.todo.push('Limpiar el garage')
//Rta: Retorna 1, mostrando que se agrego la nueva tarea a la coleccion de todo dentro del objeto JS.

let homer ={name: 'Homer', lastname: 'Simpson', age: 38}; let homerMod = Object.assign(homer , {wife: 'Marge'});
//Rta: Agrega un nuevo atributo al objeto homer y le da un valor al mismo

let homer2 ={name: 'Homer', lastname: 'Simpson', age: 38}; let homer2Mod = Object.assign({}, homer, {wife: 'Marge'});
//Rta: Idem punto anterior.




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Dado los siguientes objetos JS:
user1 = {
  name: 'Jose',
  surname: 'Argento',
  age: 43,
  nickname: 'Pepe'
};
user2 = user1;
user3 = {
   name: 'Jose',
   surname: 'Argento',
   age: 43,
   nickname: 'Pepe'
};

// Evalúe y explique el porqué de los resultados de evaluar las siguientes expresiones:

//A:
if (user1 === user2){
    console.log('user 1 y user 2 son iguales'); 
} else {
    console.log('user 1 y user 2 son disintos');
}
//Rta: Retorna True dado que el === compara tambien por referencia y se trata de dos distintas referencias al mismo objeto

if (user1 === user3){
    console.log('user 1 y user 3 son iguales'); 
} else {
    console.log('user 1 y user 3 son disintos');
}
//Rta: Por lo explicado en el punto anterior, retorna False.

console.log((user1.name === user3['name']) ? 'nombres iguales' :'nombres distintos');
//Rta: Retorna 'nombres iguales', el nombre de ambos objetos es el mismo

let ageKey = 'age';
console.log( 
(user1.age === user3[ageKey]) ? 'Edades iguales' : 'Edades distintos');
//Rta: Retorna Edades iguales, dado que se termina consultando en ambos casos por el mismo atributo

//Escriba una función equals(user1, user2) que reciba dos objectos usuarios como los del ejercicio 1 y retorne si son iguales o no. Notar que dos usuarios son iguales si poseen el mismo nombre, apellido, nickname y edad.
function equals(user1, user2){
    return ["name", "surname", "age", "nickname"].every(it => user1[it] === user2[it])
}

//Escriba una función que reciba un objeto JS e imprima todas sus claves.
function imprimirClaves(objecto){
    Object.keys(objecto).forEach(it => console.log(it))
}

//Escriba una función createBook(name, isdbn, timesRead, isFavourite, authors) que retorne un objeto JS que represente a un libro con claves name de tipo string, ISDBN de tipo string, timesRead de tipo number, isFavourite de tipo boolean y authors de tipo array de strings.
function createBook(_name, _isdbn, _timesRead, _isFavourite, _authors){
    return {name: _name, isdbn: _isdbn, timesRead: _timesRead, isFavourite: _isFavourite, authors:_authors}
}

//Dado un objeto JS libro como el del punto anterior escriba la función addAuthor(book, author) que agrega un autor al libro.
function addAuthor(aBook, author){
    aBook.authors.push(author) 
}

//Dado un objeto JS libro como el del punto anterior escriba la función markAsFavourite(book) que marca como favorito un libro, además si no está leído lo marca como que se leyó una vez.
function markAsFavourite(book){
    book.isFavourite = true
    ++book.timesRead
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//4. Strings y funciones

//Escriba la función countOf(anArray, checkFunction) que cuente todas las veces que checkFunction evalúa a  true para  un elemento del array. 
//Nota: utilice la función filter para implementarla. 
function countOf(anArray, checkFunction){
    return anArray.filter(checkFunction).length
} 

//Implemente la función countVowels utilizando la función countOf. Nota : puede utilizar split('') para generar un array con todos los caracteres del string
function countVowels(aString){
    return countOf(aString.split(''), it => ["A", "E", "I", "O", "U"].includes(it.toUpperCase()))
}

//Escriba la función countWords(string) que retorna un objecto JS que tiene como clave una palabra 
//y como valor la cantidad de veces que aparece en el string. 
//Por ejemplo para countWords('hola a todos, hola') deberá retornar { Hola: 2, a: 1, 'todos,': 1 }. Nota: Considere que cada palabra viene separada por un solo espacio.
function countWords(bigString){
    const words = bigString.split(' ')
    const res = {}
    words.forEach( word => {if(word in res){
                                ++res[word] 
                            }else{
                                res[word] = 1
                            } })
    return res
}

//Escriba la función wordsWithMoreThan(string, bound) que dado un string retorna una lista con las 
//palabras que aparecen más de bound veces en string. 
function wordsWithMoreThan(string, bound){
    const obj = countWords(string)
    return Object.keys(obj).filter( it => obj[it] > bound)
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let users = [
    {
        name: 'Marge',
        age: 35,
        posts: [
            {
                text: "Les dejo la foto de mi cumple",
                image: '/img/cumple.jpg',
                likes: 50,
                comments: [
                    "La pase muy bien en tu cumple Marge!",
                    "Muy ricas las pizzas",
                ],
            },
            {
                text: "Feliz Navidad Para Todos!",
                image: '/img/navidad.png',
                likes: 20,
                comments: [
                    "Feliz Navidad para vos también Marge!",
                ],
            }
        ],
        friends: [
            'Homer', 'Lisa', 'Bart'
        ]
    },
    {
        name: 'Homer',
        age: 36,
        posts: [
            {
                text: "Que ganas que tengo de ir a lo de Moe",
                image: null,
                likes: 1,
                comments: [
                    "Ven Homer, te espero, Barny ya esta aqui",
                ],
            },
        ],
        friends: [
            'Barny', 'Moe'
        ]
    },
    {
        name: 'Lisa',
        age: 8,
        posts: [
            {
                text: "Bart! Deja mi conejo pepito",
                image: null,
                likes: 0,
                comments: [
                    "Bart! Deja el conejo de tu hermana",
                    "Duro Duro Duro Duro"
                ],
            },
        ],
        friends: [
        ]
    },
    {
        name: 'Bart',
        age: 10,
        posts: [
            {
                text: "Ay Caramba!",
                image: '/skinnerBesandoACrabaples.png',
                likes: 50000,
                comments: [
                    "Ese no soy yo, es mi hermano Armando Barreda",
                    "Ja!",
                ],
            },
            {
                text: "Yo no robe el dinero de las limosnas",
                image: null,
                likes: 1,
                comments: [
                    "Solo tu puedes confesar y salvar a mi hermano de las injustas acusaciones",
                    "Rata",
                ],
            },
        ],
        friends: [
            'MilHouse'
        ]
    },
    {
        name: 'Barny',
        age: 37,
        posts: [
            {
                text: "BURNPP!",
                image: '/duffyYo.jpeg',
                likes: 50,
                comments: [
                    "Asi se habla Barny!",
                    "BURNPP!",
                ],
            },
        ],
        friends: [
            'Homer', 'Moe'
        ]
    },
    {
        name: 'Moe',
        age: 42,
        posts: [
            {
                text: "Salgan de aqui malditos mequetrefes",
                image: '/rata.png',
                likes: 0,
                comments: [
                ],
            },
            {
                text: "Tercer intento de suicidio fallido",
                image: '/suicidio_3.png',
                likes: 0,
                comments: [
                ],
            },
            {
                text: "Segundo intento de suicidio fallido",
                image: '/suicidio_2.png',
                likes: 0,
                comments: [
                ],
            },
            {
                text: "Primer intento de suicidio fallido",
                image: '/suicidio.jpg',
                likes: 1,
                comments: [
                    "No lo hagas Moe, Te queremos",
                ],
            },
        ],
        friends: [
        ]
    },
 
    {
        name: 'Milhouse',
        age: 10,
        posts: [
            {
                text: "A darle atomos, a darle atomos!",
                image: '/hombreRadiactivo.jpg',
                likes: 10000,
                comments: [
                    "Niño Radiactivo, Te queremos!!!!",
                ],
            },
            {
                text: "Yo no robe el dinero de las limosnas",
                image: null,
                likes: 1,
                comments: [
                    "Solo tu puedes confesar y salvar a mi hermano de las injustas acusaciones",
                    "Rata",
                ],
            },
        ],
        friends: [
            'Bart'
        ]
    }
 ];
 
//5. Colecciones, protocolo de Array

//El set de datos que se provee al final de la práctica representa un conjunto de usuarios de una red social,
//junto con sus posts, comentarios y amigos. A partir de ese set de datos escriba funciones para:

//Obtener un array con los personajes que tengan más de 35 años.
function personajes_mayores_a_35(unaListaDePersonajes){
    return countOf(unaListaDePersonajes, it => it.age > 35)
}

//Obtener un array con los usuarios ordenados por edad.
function usuarios_ordenados_por_edad(unaListaDePersonajes){
    return unaListaDePersonajes.sort(function(a, b){return a.age - b.age})
}

function cantidad_de_amigos(obj){
    return obj.friends.length
}

//Obtener un array con los usuarios ordenados por cantidad de amigos.
function usuarios_ordenados_por_cantidad_de_amigos(unaListaDePersonajes){
    return unaListaDePersonajes.sort(function(a, b){return cantidad_de_amigos(a) - cantidad_de_amigos(b)})
}

//Obtener el promedio de edad de los usuarios.
function promedio_edades(unaListaDePersonajes){
    return unaListaDePersonajes.reduce((prev, personaje) => prev + personaje.age, 0) / unaListaDePersonajes.length;
}

//Determinar si existe al menos un usuario que tiene amigos.
function alguno_usuario_tiene_amigos(unaListaDePersonajes){
    return unaListaDePersonajes.some( personaje => personaje.friends.length>0)
}

//Obtener un array con los personajes que no tengan amigos.
function personajes_sin_amigos(unaListaDePersonajes){
    return unaListaDePersonajes.filter(personaje => !personaje.friends.length>0)
}

//Obtener los personajes que tengan más de un post.
function persona_con_mas_de_un_post(unaListaDePersonajes){
    return unaListaDePersonajes.filter(personaje => personaje.posts.length>0)
}

//Obtener un array con todos los posts que tengan el caracter '!'.
function caracteres_con_admiracion(unaListaDePersonajes){
    return unaListaDePersonajes.reduce(  (acc, personaje)  => 
        acc.concat(personaje.posts.filter(post => post.text.includes('!')))
    , [])
}

//Obtener el promedio de amigos de la red social. Es decir, que cantidad de amigos (en promedio) tienen los usuarios de la red social.
function promedio_de_amigos(unaListaDePersonajes){
    return average(unaListaDePersonajes.map( personaje => personaje.friends.length))
}

//Obtener un array con todas las imágenes de los posts de un usuario.
function imagenes(unaListaDePersonajes){
    return unaListaDePersonajes.reduce( (acc, personaje) => acc.concat(personaje.posts.filter(post => post.image !== null).map(post => post.image)), [])
}

//Obtener los personajes con al menos un post con más de 10 likes.
function personajes_con_mas_de_10_likes(unaListaDePersonajes){
    return unaListaDePersonajes.filter(personaje => personaje.posts.some(post => post.likes > 10))
}

//Obtener los personajes que tengan al menos una imagen en todos sus posts.
function personajes_con_al_menos_una_foto_en_todos_sus_posts(unaListaDePersonajes){
    return unaListaDePersonajes.filter(personaje => personaje.posts.every(post => post.image !== null))
}

//Obtener los personajes que tengan al menos una imagen en sus posts.
function personajes_con_al_menos_una_foto(unaListaDePersonajes){
    return unaListaDePersonajes.filter(personaje => personaje.posts.some(post => post.image !== null))
}

//Obtener el promedio de likes por post por usuario. Es decir una array con objetos de la forma: {name:’Homero’, avg_likes: 3}
function average_likes(unaListaDePersonajes){
    return unaListaDePersonajes.map( personaje => 
       {return {name:personaje.name,
        avg_likes: average(personaje.posts.map( post => post.likes))
       }})
}

//Obtener todos los posts con más de 10 likes.
function posts_con_mas_de_10_likes(unaListaDePersonajes){
    return unaListaDePersonajes.map( personaje => personaje.posts.filter(post => post.likes > 10)).flat()
}

//Obtener todas las imágenes de todos los posts.
function todas_las_imagenes(unaListaDePersonajes){
    return unaListaDePersonajes.reduce( (acc, personaje) => acc.concat(personaje.posts.map(post => post.image)), [])
}

//Obtener todas las imágenes con extensión png de todos los posts
function imagenes_png(unaListaDePersonajes){
    return todas_las_imagenes(unaListaDePersonajes).filter(imagen => /(?:\.([^.]+))?$/.exec(imagen)[1] === 'png')
}
