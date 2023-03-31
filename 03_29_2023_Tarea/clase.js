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

export const Pelea = new Boxeo("Boxeo", 2, ["Guantes", "Vendas para manos", "Pantalón de boxeo", "Zapatillas de boxeo"], "Contacto", "Felipe Gil", "Myke Tyson", "Steve Willis", 5, 3)