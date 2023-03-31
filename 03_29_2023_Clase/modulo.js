import {sumar} from './modulo1.js'

const saludar =(nombre, apellido) =>{
    let suma = sumar(5,3);
    return`Hola ${nombre} ${apellido} tienes ${suma} vidas `
}

console.log(saludar("juna", "perez"));