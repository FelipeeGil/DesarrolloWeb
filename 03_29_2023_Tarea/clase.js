/**
     * Crear mínimo dos módulos.
     *
     * El primer modulo debe tener:
     * Una clase que hereda de otra
     * Un objeto que dentro de sus propiedades tenga otro objeto
     *
     * El segundo módulo debe tener:
     *
     * importación de la clase y el objeto
     * Funcion tipo flecha que realice el uso de la clase y objeto importados
     *
     * Oros adicionales:
     *
     * Tercer módulo que contenga:
     * una función tipo flecha, que manipule arreglos con los métodos de arreglos
     * Debe tener como parámetros de entrada el arreglo y una callback function
     * debe poderse exportar.
 */

const Referi = {
    nombre: "Kenny Bayless",
    edad: 72,
    fechaDeNacimiento: "May 4, 1950",
}

export const Pelea = {
    nombreDeporte: "Boxeo", 
    numeroJugadores: 2, 
    equipamiento: ["Guantes", "Vendas para manos", "Pantalón de boxeo", "Zapatillas de boxeo"], 
    tipoDeporte: "Contacto", 
    luchador1: "Felipe Gil", 
    luchador2: "Myke Tyson", 
    referi: Referi,
    cantidadRounds: 5, 
    tiempoRound: 3,
}

export class Deporte {
    constructor(nombreDeporte, numeroJugadores, equipamiento, tipoDeporte){
        this.nombreDeporte = nombreDeporte
        this.numeroJugadores = numeroJugadores
        this.equipamiento = equipamiento
        this.tipoDeporte = tipoDeporte
    }

    NombreDeporte(){
        return `El deporte se llama ${this.nombre}.`
    }

    NumeroJugadores(){
        return `La cantidad de jugadores es ${this.numeroJugadores}.`
    }

    Equipamiento(){
        return `El equipamiento necesario es ${this.equipamiento}.`
    }

    TipoDeporte(){
        return `El tipo de deporte es ${this.tipoDeporte}.`
    }
}

export class Boxeo extends Deporte {
    constructor(nombreDeporte, numeroJugadores, equipamiento, tipoDeporte, luchador1, luchador2, referi, cantidadRounds, tiempoRound){
        super(nombreDeporte, numeroJugadores, equipamiento, tipoDeporte)
        this.luchador1 = luchador1
        this.luchador2 = luchador2
        this.referi = referi
        this.cantidadRounds = cantidadRounds
        this.tiempoRound = tiempoRound
    }

    InformacionPelea(){
        return `El luchador ${this.luchador1} se enfrenta a ${this.luchador2} en un total de ${this.cantidadRounds}
         rounds con una duración de ${this.tiempoRound} minutos por round.`
    }
    
    InformacionReferi(){
        return `El nombre del referi es ${this.referi}.`
    }
}
