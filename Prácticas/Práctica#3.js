//Clases y Excepciones

//ACLARACIÓN: Deben entregar el ejercicio 2.3. Esto  incluye toda la sección 1 (Objetos y Clases).

//1 Objetos y Clases

//Nota 1:
//Si bien las relaciones y el protocolo son bastante evidentes a partir del enunciado cuando se pide que diseñe considere agregar protocolo o relaciones de conocimiento entre objetos que sea necesarias para su solución. 

//Nota 2:
//Para los alumnos que vayan a trabajar con typescript en las entregas, les  recomendamos que implementen estos ejercicios utilizando typescript



//Ejercicio 1:
  
//En una red social los usuarios hacen posts. En este primer ejercicio nos interesa modelar solo eso. 
// De los usuarios se conoce:
//                            - Nombre y apellido
//                            - Nickname
//                            - Fecha de nacimiento (puede utilizar objetos Date, ya definidos en JS).

//Cada usuario puede hacer posts, y los conoce, es decir, a un usuario  le podemos pedir todos sus posts. Es razonable también pensar que a un post se le puede preguntar el autor del mismo.

//De un post se conoce:
//                           - Fecha y hora (idem anterior)
//                           - Contenido: un string 

//El protocolo para esta operación podría ser algo como:

//                           aUser.post('Que lindo es JS');

//donde aUser es el usuario que postea, y el objeto post se crea a partir del string pasado como parámetro


//Tareas:
//Diseñe  (realice un diagrama de clases UML)
//Implemente utilizando clases ES6.

class Post{
    constructor(_content, aUser){
        this._content = _content
        this._date = new Date()
        this._user = aUser
    }
    get content(){ return this._content }
    get date(){ return this._date }
    get user(){ return this._user }
}

class Usuario{
    constructor(_nYAp, _nickname, _fechaNac){
        this._nYAp = _nYAp
        this._nickname = _nickname
        this._fechaNac = _fechaNac
        this._posts = []
    }

    get nyAp(){ return this._nYAp }
    get nickname(){ return this._nickname } 
    get fechaNac(){ return this._fechaNac }
    get posts(){ return this._posts }

    post(aContent){
        const post = new Post(aContent, this)
        this.posts.push(post)
        return post
    }
} 


////////////////////////////////////////////////////////////////////////////////////////////////////


//Ejercicio 2:

//En la misma red social ahora se agrega la posibilidad de tener amigos (instancias de la clase Usuario). 
//Un usuario debe poder agregar o sacar usuarios a su lista de amigos.
//El hecho de tener amigos implica que cuando un usuario hace un post todos sus amigos se enteran, es decir, reciben un mensaje que les informa que alguien hizo un post.
//Un  posible protocolo para esta notificación sería:

//     user.postDoneBy(userWhoPosted, aPost)

//Donde: user es el usuario que se está enterando del post. 
//aPost es lo que alguien posteó, aUser es quien ha posteado.

//Cuando un usuario postea algo debe mostrarse un mensaje en la consola: quien lo hizo, qué posteó y cuando.
//Cuando un usuario se entera que un amigo posteó algo, debe mostrarse en la consola que recibió esa notificación,
//cuál fue el post y quien lo hizo.

//Tareas:
//Defina los cambios necesarios, defina el protocolo necesario para los objetos y diseñe (realice un diagram de clases UML)
//Implemente utilizando clases ES6.

class FriendAlreadyExistsError extends Error {
    constructor(aFriend){
      super(aFriend.nickname + " ya son amigos")
      this.name = "FriendAlreadyExistsError"
    }
}

class Post{
    constructor(_content, aUser){
        this._content = _content
        this._date = new Date()
        this._user = aUser
    }

    get content(){ return this._content }
    get date(){ return this._date }
    get user(){ return this._user }

    printForUser(aUser){
        console.log(aUser._nickname, "dijiste:", "'", this._content, "'", "el día", this._date.toString())    
    }

    messageDoneBy(aFriendToNotify, aUserWhoMadeIt){
        console.log("Ey!,", aFriendToNotify.nickname+",", "tú amigo", aUserWhoMadeIt.nickname, "escribió", "'", this._content, "'")       
    }

}

class Usuario{
    constructor(_nYAp, _nickname, _fechaNac){
        this._nYAp = _nYAp
        this._nickname = _nickname
        this._fechaNac = _fechaNac
        this._posts = []
        this._friends = []
    }

    get nyAp(){ return this._nYAp }
    get nickname(){ return this._nickname }
    get fechaNac(){ return this._fechaNac }
    get posts(){ return this._posts }
    get friends(){ return this._friends } 

    prinFortUser(aPost){
        console.log(aPost.printForUser(this))
    }

    messageDoneBy(aFriendToNotify, aPost){
        console.log(aPost.messageDoneBy(aFriendToNotify, this))
    }

    notify(aPost){
        this.printForUser(aPost)
        this._friends.forEach(friend => this.messageDoneBy(friend, aPost))
    } 

    post(aContent){ 
        const post = new Post(aContent, this)
        this._posts.push(post)
        this.notify(post)
    }

    areYouFriendsWith(aFriend){
        return this._friends.some(friend => friend.nickname ===aFriend.nickname)
    }

    //Unidireccional
    addFriend(aFriend){
        this._friends.push(aFriend)
    }

    //Bidireccional << Empieza la ejecucion
    sendFriendlyRequest(aFriend){
        if(this.areYouFriendsWith(aFriend)){
            throw new FriendAlreadyExistsError(aFriend, "ya son amigos!")
        }
        else{
            this.addFriend(aFriend)
            aFriend.addFriend(aFriend)
        }
    }

    removeFriend(aFriend){
        this._friends = this._friends.filter( friend => friend.nickname === aFriend.nickname)
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////


//Ejercicio 3:

//Nuestra red social sigue creciendo  y ahora debe ser posible comentar los posts. 
//Los comentarios son como posts: tienen un texto, pero con la limitación de solo poder tener 100 caracteres. 
//Los comentarios conocen el post al cual refieren, también conocen la fecha, hora y autor del comentario.
//Un post puede tener muchos comentarios.
//Los comentarios no pueden tener comentarios ni respuestas.

//Cuando un usuario comenta un post de alguien, el “alguien” debe ser notificado. Un protocolo sugerido para esto sería:

//                          aUser.postHasBeenCommentedBy(post, comment)

//Donde aUser es el autor del post original, quien está siendo notificado. 
//Comment es el comentario que se está notificando. Note que al comentario le podemos preguntar el autor para saber quien comentó.

//Cuando un usuario hace un comentario debe imprimirse a la consola.
//De la misma manera, cuando un usuario se entera que un post suyo ha sido comentado, debe imprimirse.

class FriendAlreadyExistsError extends Error {
    constructor(aFriend){
      super("Con " + aFriend.nickname + " ya son amigos")
      this.name = "FriendAlreadyExistsError"
    }
}

class MethodNotImplementError extends Error{
    constructor(){
        super("You should implement this method")
        this.name = "MethodNotImplementError"
    }
}

class CommentGreaterThan100Error extends Error {
    constructor(){
      super("El comentario supera los 100 caracteres")
      this.name = "CommentGreaterThan100Error"
    }
}

class Message{
    constructor(aContent, aUser){
        this._content = aContent
        this._user = aUser
        this._date = new Date()
    }

    get content(){ return this._content }
    get date(){ return this._date }
    get user(){ return this._user }

    printForUser(aUser){
        throw new MethodNotImplementError()
    }

    messageDoneBy(aUser){
        throw new MethodNotImplementError()
    }
}

class Comment extends Message{
    constructor(aUser, aPost, aContent){
        super(aContent, aUser)
        if(this.isValidate(aContent)){
            throw  new CommentGreaterThan100Error()
        }
        this._post = aPost
    }

    isValidate(aContent){
        return aContent.length >=  100
    }

    get post(){ return this._post }
    
    printForUser(aUser){
        console.log(aUser.nickname + " comentaste el post de tu amigo,  ' " + this._post.content + " ' diciendo: '" + this._content+ " ' el día " + this._date.toString())
    }

    messageDoneBy(aUserWhoMadeIt){
        console.log("Ey, " + this._post.user.nickname+", " + aUserWhoMadeIt.nickname + " comentó tu post: ' "+  this._post.content + " '" + " diciendo: '" + this._content + " '") 
    }
}

class Post extends Message{
    constructor(aContent, aUser){
        super(aContent, aUser)
        this._comments = []
    }

    get comments(){ return this._comments }

    addComment(aComment){
        this._comments.push(aComment)       
    }

    printForUser(aUser){
        console.log(aUser._nickname +  " dijiste: ' " + this._content+" '" +  " en el día " + this._date.toString())
    }

    messageDoneBy(aUserWhoMadeIt){
        aUserWhoMadeIt.friends.forEach( aFriendToNotify => console.log("Ey!, " + aFriendToNotify.nickname+", tú amigo " + aUserWhoMadeIt.nickname + " escribió '" + this._content +  " '") )
    }
}


class Usuario{
    constructor(_nYAp, _nickname, _fechaNac){
        this._nYAp = _nYAp
        this._nickname = _nickname
        this._fechaNac = _fechaNac
        this._posts = []
        this._friends = []
    }

    get nyAp(){ return this._nYAp }
    get nickname(){ return this._nickname }
    get fechaNac(){ return this._fechaNac }
    get posts(){ return this._posts }
    get friends(){ return this._friends } 

    notify(aMessage){
        aMessage.printForUser(this)
        aMessage.messageDoneBy(this)
    } 

    post(aContent){ 
        const post = new Post(aContent, this)
        this._posts.push(post)
        this.notify(post)
    }
    
    comment(aPost, aContent){
        let comment
        try{
            comment = new Comment(this, aPost, aContent)
        }
        catch(e){
            throw e
        }
        aPost.addComment(comment)
        this.notify(comment)
    }

    areYouFriendsWith(aFriend){
        return this._friends.some(friend => friend.nickname === aFriend.nickname)
    }

    addFriend(aFriend){
        this._friends.push(aFriend)
    }

    sendFriendlyRequest(aFriend){
        if(this.areYouFriendsWith(aFriend)){
            throw new FriendAlreadyExistsError(aFriend)
        }
        else{
            this.addFriend(aFriend)
            aFriend.addFriend(this)
        }
    }

    removeFriend(aFriend){
        this._friends = this.friends.filter( friend => friend.nickname === aFriend.nickname )
    }
}

let pepe = new Usuario("Pepe Argento", "IlPepe", new Date())
let dardo = new Usuario("Dardo Fusceneco", "MrMusculo", new Date())
let mariaelena = new Usuario("Maria Elena Fusceneco", "LaNena", new Date())
let moni = new Usuario("Moni Argento", "Moni", new Date())

pepe.sendFriendlyRequest(dardo)
pepe.sendFriendlyRequest(moni)
dardo.sendFriendlyRequest(mariaelena)
mariaelena.sendFriendlyRequest(moni)

pepe.post("Ess unaaaa nenaaaaaaaa!!!!!!!!!!!!!!!!")
moni.comment(pepe.posts[0], "Ya vamos a hablar en casa")
