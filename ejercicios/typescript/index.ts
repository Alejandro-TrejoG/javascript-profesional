console.log("Hello, TypeScript")

function add(a: number, b: number){
    return a + b
}

const sum = add(2, 3)


// TIPOS PRIMITIVOS EN TYPESCRIPT

// Boolean

let muted: boolean = true;

muted = false
// En la linea de abajo marca error, ya que typescript hace una analisis del codigo, y va arrastrando el tipo de variable que es
// cada una, al intentar asignar un valor de tipo distinto, no nos deja, a diferencia de Javascript normal. 
// muted = "callado"

// Number

// No importa que al asignar un valor a una variable no especifiquemos el tipo de esta, al recibir el valor TypeScript automaticamente
// asigna el tipo de variable

let a: number = 1
let b = 5
let c = a + b

let nombre: string = "Alejandro"
let saludo = `Me llamo ${nombre}`

// Arreglos

let people: string[] = []
people = ["Isabel", "Ricardo", "Nicole"]
// Especificamos el tipo de valores que se puede añadir al arreglo con : tipoValores[]
// se añaden los corchetes para aspecificar que es un array, en este caso, un array de strings
// people.push(9000)


// Arreglos de tipos diferentes

// para este caso, en vez de especificar el tipo de valor, usamos Array<tipo1 | tipo2>, por ejemplo

let peopleAndNumbers: Array<string | number> = []

peopleAndNumbers.push("Alejandro")
peopleAndNumbers.push(21)

// Enum

enum Color {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any

// Any nos permite decirle a TypeScript que una variable puede ser de cualquier tipo, no de uno solo en especifico

let comodin: any = "joker"
comodin = {type: "Wild"}

// Object
// para especificar que una variable es un objeto, tenemos que añadirle : object


let anObject: object = {type: "Wild"}