/*
    Tarea, Crear un objeto que tenga minimo dos metodos, ademas debe tener una propiedad que sea un objeto
    Crear una clase que herede a otra debe poseer minimo 3 propiedades el constructor
    Crear una funcion tipo flecha que haga uso de la clase construida y el objeto declarado
*/

// Ejercicio 1
const CallOfDuty = {
    nombre: "Call Of Duty Warzone",
    usuario: "Felipe Gil",
    precio: 0,
    peso: "120 GB",
    anhoSalida: 2020,
    especificacionesRecomendadas:{
        Ram:"8GB",
        HDD:"150Gb",
        CPU:"Ryzen 5 3400x",
        GPU:"RTX 2050 TI",
    },

    Iniciar : function() {
        return `El juego ${this.nombre} está iniciando.`
    },

    JugarTutorial : function() {
        return `El usuario ${this.usuario} está jugando el tutorial.`
    },

    BuscarPartida : function() {
        return `El usuario ${this.usuario} está buscando partida en ${this.nombre}.`
    }
}

console.log(CallOfDuty.Iniciar());
console.log(CallOfDuty.JugarTutorial());
console.log(CallOfDuty.BuscarPartida());

// Ejercicio 2
class Juego {
    constructor(nombre, precio, peso, anhoSalida) {
        this.nombre = nombre
        this.precio = precio
        this.peso = peso
        this.anhoSalida = anhoSalida
    }
    
    Iniciar() {
        return `El juego ${this.nombre} está iniciando.`
    }

    Finalizar() {
        return `El juego ${this.nombre} se está cerrando.`
    }
}

// Valorant es un nombre de un videojuego
class Valorant extends Juego {
    constructor(nombre, precio, peso, anhoSalida, usuario){
        super(nombre, precio, peso, anhoSalida)
        this.usuario = usuario
    }
    
    JugarTutorial() {
        return `El usuario ${this.usuario} está jugando el tutorial.`
    }
    
    BuscarPartida(){
        return `El usuario ${this.usuario} está buscando partida en ${this.nombre}.`
    }
}

const UsuarioNuevo = new Valorant("Valorant", 0, "60 Gb", 2020, "Felipe")
console.log(UsuarioNuevo);
console.log(UsuarioNuevo.Iniciar())
console.log(UsuarioNuevo.Finalizar())
console.log(UsuarioNuevo.JugarTutorial())
console.log(UsuarioNuevo.BuscarPartida())

// Ejercicio 3   
const ObtenerInformacionDeObjetoYClase = ({ Objeto, ClaseJuego }) => {
    console.log(Objeto)
    console.log(ClaseJuego)
}

ObtenerInformacionDeObjetoYClase({ Objeto:CallOfDuty, ClaseJuego:UsuarioNuevo })