let sumar = (number) => {
    return number + 5
}

let f = sumar
console.log(f(5));
console.log(sumar(5))

/* CALLBACK FUNCTIONS, Se trata de enviarle como paremetro de entrada una funcion a otra funciòn */

const esPar = (numero) => {
    return numero%2 == 0
}

const validadParidad = (num, callbackFn) => {
    const esPar = callbackFn(num)
    console.log("¿El nùmero es entero? "+esPar)
}

validadParidad(9, esPar)

const dividePorDos = (numero) => {
    return numero/2
}

const divideNumero = (numero, callbackFn) => {
    return callbackFn(numero) 
}

console.log(divideNumero(10, dividePorDos))

/* METODOS PARA ARREGLOS */

const numeros = [1, 2, 3, 20, 893, 452]

let numerosDos = [1, 2, 3, 20, 893, 452]

const sumarValores = numeros.reduce((acumulador, valorActual) => {
    return acumulador+valorActual
})

console.log(sumarValores);

const fnDos = numerosDos.forEach(numero => {
    console.log(numero);
});

const fnTres = numerosDos.filter(number => {
    return number > 10
})

console.log(fnTres);

const nombrePersonas = ["Juan", "Felipe", "Pablo", "Jorge"]

const anuncios = nombrePersonas.map(miembro => {
    return miembro + " se uniò al grupo"
})

console.log(anuncios);

/*RETOS*/

const raiz = (numero) => {
    return Math.sqrt(numero)
}

const raizCuadrada = (numero, callbackFn) => {
    return raiz(numero) 
}

console.log(raizCuadrada(64, raiz));

const numeroDiv = [2, 4, 6, 8, 10]

const dividir = numeroDiv.map(numdiv => {
    return numdiv / 2
})

console.log(dividir);