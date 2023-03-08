console.log("Clase");

console.log(Math.random());

let x
let y = 20
let z = "Mensaje"
console.log(z + " " + z.length);

const funcion = function() {
    return "Hola"
}

const sum = (num1, num2) => {
    return num1 + num2
}

let res = (1, 2)

console.log(res);

/*FUNCIONES*/

const saludar = () => {
    return console.log("Bienvenidos a Java Script")
}

const raiz = num1 => {
    return console.log(Math.sqrt(num1))
}

const dividir = (num2, num3) => {
    return console.log(num2 / num3)
}

saludar()
raiz(25)
dividir(100, 50)


/*ARREGLO*/
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


numeros.push(10)

numeros.pop();

const eliminar = numeros => {
    numeros.pop()
    return numeros
}

console.log(numeros)
console.log(eliminar(numeros))

const crear = (numeros, dato) => {
    numeros.push(dato)
    return numeros
}