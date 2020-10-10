// Se desea modelar un restaurante de comida rápida.
// En él los clientes llegan y son atendidos por un cajero quien les cobra y les da un número. 
// Los clientes esperan a que sus pedidos estén listos, mientras eso ocurre, como son muy ansiosos 
// imprimen la pantalla un mensaje diciendo cuantos segundos esperaron.
// Asuma que son N (con N<9) clientes, los cuales tienen asignados los números del 1 al N.
// Para simular “la cocina” usaremos la consola, es decir ud. es el cocinero  y va a ingresar el número 
// del pedido que está listo.
// Cuando un cliente obtiene su pedido imprime un cartel notificandolo, y deja de mostrar el mensaje 
// que indicaba que estaba en espera.
// Cuando se han satisfecho TODOS los pedidos el local debe cerrar, entonces imprimirá en 
// pantalla un cartel que diga: “------------------  CERRADO  --------------------”
// Para implementar este ejercicio deberá usar  readline, settimeout y bind. 
// A continuación se muestran ejemplos de uso. Recomendamos leer la documentación.


function omitKeys(obj, keys){
    var dup = {};
    for (var key in obj) {
        if (keys.indexOf(key) == -1) {
            dup[key] = obj[key];
        }
    }
    return dup;
}

class Cliente{
    constructor(unNombre, unNumeroTicket, unRestaurant){
        this.nombre = unNombre;
        this._ticket = unNumeroTicket;
        this.restaurant = unRestaurant;
        this._seconds = 1;
    }
    get ticket() { return this._ticket };

    quejarse(){
        if (!this.restaurant.estaListaLaOrden(this._ticket)){
            console.log(`[ ${this.nombre} | nro° ${this.ticket} ] : "¿Qué? ¿Mi plata no vale? Estoy esperando hace ${this._seconds++} ${this._seconds == 2? "segundo" : "segundos" }... !!"`);
            this.esperar();
        }
        else{
            this.restaurant.sacarCliente(this);
        }
    }
    
    esperar(){
        setTimeout(this.quejarse.bind(this), 1000);
    }
}

class Restaurante{
    constructor(){
        this._clientes = [];
        this._ticket = 0;
        this._turno = null;
        this._rl = null;
    }

    get turno() { return this._turno };
    get clientes(){ return this._clientes }; 
    
    atender(unTurno){
        
        const n = parseInt(unTurno)
        if(isNaN(n) || !this._clientes.some(cliente => cliente.ticket === n)){
            console.log("");
            console.log(`  =========================== NÚMERO DE TICKET INVÁLIDO: ${unTurno}  ===========================  `);
            console.log("");
        }
        else{
            console.log("ESTE ES MI TURNO RESTAURANT" + this._turno);
            this._turno = n;
            console.log(` =========================== SE ATIENDE AL TURNO: ${this._turno} =========================== `)
        }
    }

    agregarCliente(unNombre){
        const n = ++this._ticket
        const unCliente = new Cliente(unNombre, n, this);
        this._clientes.push(unCliente);
        console.log(`Se ha agregado a un cliente llamado: [${unCliente.nombre}] con el ticket nro: [${unCliente.ticket}]`);
        unCliente.quejarse();
    }

    sacarCliente(unCliente){
        console.log(` ======== Fue atendido el cliente ${unCliente.nombre} con el ticket nro° ${unCliente.ticket}! Graziaz, vuelvaz prontoz!! ======== `);
        this._clientes = this._clientes.filter(cliente => cliente !== unCliente);
        console.log("");
        console.log(omitKeys(unCliente, ["restaurant"]));
        console.log("");
        console.log(" --------------------------------------------------------------------- ");
        console.log(`[ ${unCliente.nombre} ] has left the building!!"`);
        console.log(" --------------------------------------------------------------------- ");            
        console.log( " --------------------------------------------------------------------- ");
        if(this._clientes.length === 0){
            console.log("");
            console.log(" ------------------------------ CERRADO ------------------------------ ");
                          
            console.log("");
            this._rl.close();
        }
    }

    empezarAAtender(){
        const readline = require('readline');
        this._rl = readline.createInterface(process.stdin, process.stdout);
        this._rl.on('line', this.atender.bind(this));
    }

    estaListaLaOrden(unNumerodeTicket){
        return  unNumerodeTicket === this._turno;
    }
}

const resto = new Restaurante();
const nombres = ["Elvis", "Pepe", "Moe", "Larry", "Curry"];
nombres.forEach(nombre => resto.agregarCliente(nombre));
resto.empezarAAtender();