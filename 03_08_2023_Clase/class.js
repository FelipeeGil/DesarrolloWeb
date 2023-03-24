console.log('Hello World')
let edad = () => Math.random()
console.log(edad())

let age
age = 20
let message = 'This is a message'
let message2 = 'This is another message'

console.warn(`Warnn!!! ${message} ${message2}`)

console.log(20 + '10')
console.log(20 + 10)
console.log(message2.length)
console.log(Boolean(null))

const moneda = 'COP'
const numeroColumns = 4

function sumar (num1, num2) {
    return num1 + num2
}

const sumar2 = (n1, n2) => n1 + n2

const hello = function(){
    return 'Hola'
}

console.warn(sumar(2, 3))

const getAge = () => {
    return 20
}

const saludar = name => {
    return `Hola ${name}!`
}

const potenciacion = (base, exp) => {
    return base**exp
}

console.log(getAge())
console.log(saludar('Felipe'))
console.log(potenciacion(2, 3))

/*
const formSaludar = document.querySelector('#nameForm')
formSaludar.addEventListener('submit', (e)=> {
    e.preventDefault()
    let name = formSaludar[0].value
    alert(`${saludar(name)}`)

})

const formExp = document.querySelector('#potenciationForm')
formExp.addEventListener('submit', (e)=> {
    e.preventDefault()
    let base = formExp[0].value
    let exp = formExp[1].value
    alert(`${potenciacion(base, exp)}`)

})

const formAge = document.querySelector('#ageForm')
formAge.addEventListener('submit', (e)=> {
    e.preventDefault()
    let age = formAge[0].value
    alert(`${age}`)

})
*/

let numeros = [1, 2, 3, 4, 5]
numeros.push(10)
numeros.pop();

let data = [1, 2, 3, 4]

const addData = (arr, data) => {
    arr.push(data)
}

const removeData = arr => {
    arr.pop()
}

console.log(data)
addData(data, 20)
console.log(data)
removeData(data)
removeData(data)
console.log(data)

let sumPlus5 = num => {
    return num + 5
}
let f = sumPlus5

console.log(sumPlus5(5))
console.log(f(5))

/*
    Callback functions
    Enviar función como parametro de otra función
*/

const esPar = num => {
    return num % 2 == 0
}

const validationPar = (n, callback) => {
    const par = callback(n)
    console.log(`El numero es ${par ? 'PAR' : 'IMPAR'}`)
}

validationPar(2, esPar)

/* Metodos arrays */
const myArray = [1, 2, 3, 4, 5, 10, 30]
let myArrayLet = [1, 2, 3, 4, 5, 10, 30]

const sumValues = myArray.reduce((acumulador, currentValue) => {
    return acumulador += currentValue
})

const avgValues = myArray.reduce((acumulador, currentValue) => {
    console.log(`Acumulator: ${acumulador}, Current: ${currentValue}`)
    return acumulador += currentValue
})

console.log(sumValues)
console.log(avgValues)

console.log('ForEach')
const fnForEach = myArray.forEach(n => {
    console.log(n)
})

console.log('Filter')
const fnFilter = myArray.filter(n => n > 5)
console.log(fnFilter)

console.log('Find')
const fnFind = myArray.find(n => n > 20)
console.log(fnFind)

const personas = ['Juan', 'Perez', 'Pedro', 'Andres', 'Rosa']
console.log('Map')
const fnMap = personas.map(person => {
    return `Miembro ${person.toUpperCase()} se ha unido al grupo!`
})

console.log(fnMap)

console.log(myArray)