// Objetos

const persona = {
    primerNombre:"Felipe",
    apellido:"Vanegas",
    edad: 18,
    documentoID:32563462,
    caracteristicas :{
        colorCabello:"Rojo",
        etinicidad:"Colombiano",
        idiomaMaterno:"Español"
    },
    // Metodo
    saludar:function(){
        return `Hola, ${this.primerNombre} ${this.apellido}.`
    }
        
};

console.log(persona.saludar());
console.log(persona)
console.log(persona.apellido);
console.log(persona["primerNombre"]);

// Clases
class Persona {
    constructor(primerNombreUsuario, apellidoUsuario){
        this.primerNombreUsuario = primerNombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
    }
    // Metodo
    saludarPersona(){
        return `Hola, ${this.primerNombreUsuario} ${this.apellidoUsuario}.`
    }    
};

// Uso de clase para construir a persona(objeto)
let personita = new Persona("Juan","Osorio");
personita.primerNombreUsuario = "Carlos"
personita.apellidoUsuario = "Perez"
console.log(personita);
console.log(personita.saludarPersona());

// Herencia
class Animales{
    constructor(nombre, edad, sonido){
        this.nombre = nombre
        this.edad = edad
        this.sonido = sonido
    }
    // Metodo
    sonido(){
        return `${this.nombre} tiene el sonido: ${this.sonido}.`
    }
}

// Herencia palabra extends
class Gatos extends Animales{
    // Constructor Clase Gatos
    constructor(nombre, edad, sonido, cazador){
        super(nombre, edad, sonido)
        this.cazador = cazador
    }

    // Metodo
    maullar(){
        return `Yo puedo hacer el sonido ${this.sonido}`
    }
}

// Crear un animal, gato
let gato = new Gatos ("Michi",52,"Miau",true);
console.log(gato)
console.log(gato.maullar());