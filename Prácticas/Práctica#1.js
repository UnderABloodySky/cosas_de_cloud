
//1. Primeros pasos

//Escriba código para imprimir en consola el mensaje "Hello World!" 
console.log("Hello World!")

//Escriba la función echo(message) que imprima message en la consola.
function echo(message){
    console.log(message)
}

//Escriba una función que reciba tres parámetros y retorne el número más grande.
function mayorDeTres(x,y,z){
    return Math.max(x, Math.max(y, z))
}

//Escriba una función que recibe un string como parámetro e indique si dicho string es un número (el número podría ser entero o flotante).
function esNumero(aString){
    return !isNaN(aString)
}

//Escriba una función que reciba un string del tipo "0xa2" y retorne el número que representa.
function hexaToInt(hexString){
    return parseInt(hexString, 16)
}

//Escriba la función esMultiplo(unNumero, multiploDe) que retorne si in un numero es multiplo de otro.
function esMultiplo(unNumero, multiploDe){
    return unNumero %  multiploDe === 0
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Comparaciones y Conversiones automáticas

//Evalúe que retornan los siguientes fragmentos de código. 
//En cada caso explique el porqué del resultado.

if (5 == "5") console.log("son iguales"); else console.log("son distintos");
//Rta: Retorna "Son iguales" dado que el == realiza la conversion automatica de tipos.

if (5 === "5") console.log("son iguales"); else console.log("son distintos");
//Rta: Retorna "son distintos" dado que el === NO realiza la conversion automatica de tipos.

let myArray = [1,2,3]; let myArray2 = [1,2,3]; 
if (myArray === myArray2) console.log("Los arrays son iguales"); else console.log("los arrays son distintos");
//Rta: Retorna "Los arrays son distintos" dado que el === al comparar tipos complejos, chequea que se trate de la misma referencia.

let myArray3 = [1,2,3]; let myArray4 = myArray3; 
(myArray3 === myArray4)? console.log("Los arrays son iguales"): console.log("los arrays son distintos");
//Rta: Retorna "Los arrays son iguales" dado que el === al comparar tipos complejos, chequea que se trate de la misma referencia, y en este caso,
//se referencia al mismo array




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3 . Describa textualmente para qué sirven los operadores:

// =
//Rta: Asignar el valor a una variable

// ==
//Rta: Comparar igualdad entre dos elementos. Realiza convercion automatica de tipos.

// ===
//Rta: Comparar igualdad entre dos elementos, de valor y tipo (y referencia al tratarse de objetos complejos). No realiza convercion automatica de tipos.


//4. De ejemplos de variables con valor undefined.
let a //Al estar declarada, pero no inicializada, el valor de la variable a es Undefined

let b = [1,2,3]
b[112] //Al no tener un elemenento, en la posicion 112 retorna undefined


//5. ¿Undefined es lo mismo que null?
//Rta: No, aunque la diferencia es minima. En JavaScript, Undefined significa que se ha declarado una variable pero que aún no se le ha asignado un valor.
//     En cambio, null es un valor de asignación. Se puede asignar a una variable como representación de un no-valor o sin el mismo. 


//7. Evalúe cada una de las siguientes expresiones y explique el resultado:

"6" * "2"
//Rta: Retorna 12, realiza una convercion automatica de tipo.

if (0) console.log("0 es true"); else "0 es false";
//Rta: Retorna "0 es false". 0 se convierte automaticamente a false, entonces se ejecuta la rama del else.


if ("") console.log("\"\" es true"); else "\"\" es false";
//Rta: Retorna ""\"\" es false"". "" se convierte automaticamente a false, entonces se ejecuta la rama del else.

if (null) console.log("null es true"); else "null es false";
//Rta: Retorna null es false"". Null se convierte automaticamente a false, entonces se ejecuta la rama del else.

if ([]) console.log("[] es true"); else "[] es false";
//Rta: Retorna "[] es true". Dado que por mas que no tenga elementos, se examina un valor.

if (undefined) console.log("undefined es true"); else "undefined es false";
//Rta: Retorna undefined es false"". Undefined se convierte automaticamente a false, entonces se ejecuta la rama del else.

let e = 1; if (e) console.log("e es true"); else console.log("e es false");
//Rta: Retorna ""e es true". E tiene un valor distinto a la representacion de vacio, y esto da true.




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Funciones

//Escriba la función de fibonacci que recibe un número como parámetro y retorna el correspondiente valor en la secuencia de fibonacci. https://www.livescience.com/37470-fibonacci-sequence.html.
//Nota: testee que funcione bien al menos para los siguientes valores: 0, 2, 4, 7 y 10.

function fibonacci(num){
    let a = 0
    let b = 1
    let suma
    let c = num
    if(num === 0){
        return a
    }
    if(num === 1 || num === 2){
        return b
    }
    while(c > 2){
        suma = a + b
        a = b
        b = suma
        c--
    }
    return b
}

function fibonacciR(num){
    if(num === 0){
       return num
    }
    if(num === 1 || num === 2){
        return 1
    }
    return fibonacciR(num - 1) + fibonacciR(num - 2)
}

//Escriba la función invoke(aFunction) que reciba una función como parámetro y la ejecute. Utilice la función helloWorld que ya implementó para probarla.
function invoke(aFunction){
    return aFunction()
}

//Re-escriba la función invoke(aFunction, param) para que pueda ejecutar una función con un parámetro. Pruébelo con la función fibonacci que ya implementó.
function invokeB(aFunction, param){
    return aFunction(param)
}

//Escriba la función construirEsMultiploDe3 que retorne una función que retorne si un numero es multiplo de 3. Utilice la función esMultiplo que escribió previamente

function construirEsMultiploDe3(numero){
    return esMultiplo(numero, 3)
} 

//Escriba una funcion construirEsMultiploDe(multiplo) que retorne una función que diga si un un numero es multiplo de multiplo. Utilice la función esMultiplo que escribió previamente
function construirEsMultiploDe(multiplo){
    return x => esMultiplo(x, multiplo)
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. String y arreglos

//Escriba la función print(anArray) que imprima todos los elementos de anArray.
//Utilizando forEach
function print(anArray){
    anArray.forEach(it => console.log(it))
}

//Utilizando for()
function print2(anArray){
    for (i = 0; i < anArray.length; i++) {
        console.log(anArray[i])
    }
} 

//Escriba la función average(array) que dado una array de enteros retorne su promedio.
function average(array){
    return array.reduce( (a,b) => a + b ) / array.length
}

//Escriba la función max(anArray) que retorne el número más grande de anArray.
function max(anArray){
    return anArray.reduce( (a, b) => Math.max(a , b))
}

//Escriba la función removerDuplicados(anArray) que elimine todos los elementos duplicados de  anArray.
function removerDuplicados(anArray){
   return [...new Set(anArray)]
}


//Evaluar las siguientes expresiones y explicar el resultado.
homer = 'Homer'; for (let i = 0; i < homer.length; i++) {console.log(homer.charAt(i));}
//Rta: Imprime en pantalla las letras del string 'Homer', con un salto de linea entre cada una

'Homer'.includes('Y')
//Rta: Retorna False.  Dado que 'Y' NO pertenece al string 'Homer'

'Homer'.includes('mer')
//Rta: Retorna True. Dado que 'mer' pertenece al string 'Homer'

'Marge'.endsWith('arge')
//Rta: Retorna True. Dado que el string 'Marge' termina con el sufijo 'endsWith'

'Margaret'.indexOf('a')
//Rta: Retorna 1. Dado que en el string 'Margaret' el caracter 'a' se encuentra por primera vez en la posicion 0.

'Margaret'.indexOf('A')
//Rta: Retorna -1. Dado que en el string 'Margaret' NO  contiene al caracter 'A'.

'Margaret'.indexOf('a', 2)
//Rta: Retorna 4. Dado que en el string 'Margaret', la segunda ocurrencia del caracter 'a', esta en la ccuarta posicion.

'Margaret'.replace('aret', 'o')
//Rta: Retorna Margo. Replace reemplaza un elemento por otro.
 
'Margaret'.replace('a', 'A')
//Rta: Retorna MArgaret. Replace reemplaza un elemento por otro.

'1-2-3-4-5-6-7-8'.split('-')
//Rta: Retorna [1,2,3,4,5,6,7,8], Dado que split retorna, dado un string, una lista con los elementos separados por el caracter que se pasa por parametro. En este caso, '-'

'Hola'.split('').forEach((elem) => console.log(elem))
//Rta: Imprime en pantalla las letras del string 'Hola' (luego de transformarlo en lista), con un salto de linea entre cada una. 

Array.from('Hola').forEach((elem) => console.log(elem))
//Rta: Imprime en pantalla las letras del string 'Hola' (luego de transformarlo en lista), con un salto de linea entre cada una. 

'\t      HOlA A TODOS              '.trim()
//Rta: Retorna "HOLA A TODOS" sin espacios en blanco de mas.

'HOLAAAAAAAAAAA!'.toLowerCase()
//Rta: Retorna 'holaaaaaaaaaaa!'. lowerCase, dado un string retorna ese mismo string en minusculas

'holiiis'.toUpperCase()
//Rta: Retorna 'HOLIIIS'. upperCase, dado un string retorna ese mismo string en mayusculas.

'Javascript es un lenguaje de programación'.substr(0, 10)
//Rta: Retorna Javascript. substr retorna, dado una string, el substring que se cuentra desde una posicion de inicio y otra de fin.

'Javascript es un lenguaje de programación'.slice(0, 10)
//Rta: Idem anterior. Solamente que slice sirve pno solamente para strings, sino tambien para array.

//Escriba la función isVowel(char) que retorne si un caracter es una vocal.
function isVowel(char){
    return ['A', 'E', 'I', 'O', 'U'].includes(char.toUpperCase())
}

//Escriba una función countVowels(string) que cuenta la cantidad de vocales que tiene string.
function countVowels(string){
    return string.match(/[aeiou]/gi).length;
}

//Escriba una función words(string) que retorne un array con todas las palabras del string. Se asume que las palabras están separadas por un solo espacio.
function words(string){
    return string.split(' ')
}

//Escriba la función capitalize que dado un string retorne el mismo con su primer carácter en mayúsculas. 
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Dado un string que tiene la forma 'palabra1_palabra2_palabraN', retorne un string en la forma 'palabra1Palabra2Palabra3'. Debe utilizar la función capitalize definida en el punto anterior
function algo(string){
    return string.split('_').map( it => capitalize(it)).join("")
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 5. Ejercicios combinados.

// Escriba la función área con el siguiente signature:

// function area(tipo, parametros)
// Donde :
// tipo: es un string que describe que tipo de figura:  un cuadrado, un triángulo o un Círculo.
// parametros: es un arreglo en el que
// Si tipo es "cuadrado", en el arreglo tiene un solo componente, el largo del lado.
// Si tipo es "circulo", en el arreglo tiene un solo componente, el radio
// Si tipo es "triangulo", en el arreglo tiene el largo de los 3 lados.
function area(tipo, parametros){
    switch(tipo){
        case "cuadrado":
            return parametros[0]**2
        case "circulo":
            return parametros[0] * Math.PI**2
        case "triangulo":
            return parametros[0] * parametros[1] / 2;
    }
}


// Genere un array con N notas aleatorias de 0 a 10. Indique cuántos estudiantes son:
const notas = Array.from({length:10}, () => Math.floor(Math.random() * 11));
// * Malos 0-3
// * Regulares 4-5
// * Buenos 6-8
// * Excelentes 9-10

function isInRange(a,b, c){
    return a >= b && a <= c
}

function sizeAfterFilter(functf, anArray){
    return anArray.filter(functf).length
}

function malos(anArray){
    return sizeAfterFilter( n => isInRange(n, 0, 3), anArray)
}

function regulares(anArray){
    return sizeAfterFilter( n => isInRange(n, 4, 5), anArray)
}

function buenos(anArray){
    return sizeAfterFilter( n => isInRange(n, 6, 8), anArray)
}

function excelentes(anArray){
    return sizeAfterFilter( n => isInRange(n, 9, 10), anArray)
}

// Dado el mismo array de notas implemente la función profeBuenaOnda que le suma 1 a todas las notas del array para alumnos Malos y Regulares.

function profeBuenaOnda(anArray){
    anArray.forEach( (n, index)=> {if(isInRange(n, 4, 5) || isInRange(n, 0, 3)){ anArray[index] = ++n}})
}

// Escriba una función que recibe un arreglo como parámetro y retorna un nuevo arreglo “aplanado”. Un arreglo está aplanado si ninguno sus elementos son arreglos.
function aplanar(anArray){
    return anArray.flat(Infinity)
}

// Ejemplo 1:
// Dado el array [1, [2, 3, 4], 5, 6 ], su función deberá retornar el arreglo [1, 2, 3, 4, 5, 6]

// Ejemplo 2: 
// Dado el array [1, [2, [3, [4, 5]], 6 ], 7, 8 ], su función deberá retornar el arreglo [1, 2, 3, 4, 5, 6, 7, 8 ]
