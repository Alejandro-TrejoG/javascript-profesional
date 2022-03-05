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
comodin = 5

// Object
// para especificar que una variable es un objeto, tenemos que añadirle : object


let anObject: object = {type: "Wild"}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones

function newAdd(a:number, b:number) {
    return a + b
}

const newSum = newAdd(2, 3)

function createAdder(a:number): (b:number) => number {
    return function (b:number) {
        return a + b
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

// Funciones en las que no sea forzoso un parametro
// Para esto, en la funcion, en el parametro que nos es forzosamente requerido, antes de colocar :tipoVariable, colocamos
// el signo ? esto podemos tomarlo como si estuvieramos diciendole a la funcion "quizas llegue o quizas no", esto para que 
// la funcion siga operando si es que dicho parametro no se le pasa, como en el siguiente ejemplo

function fullName (firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`
}

// Como se observar, al pasarle solo el primer argumento, no nos marca error, esto debido a que le dijimos a la funcion que un
// parametro puede ser undefined
const alejandro = fullName("Alejandro")


// Pero si queremos que en vez de permitir que no sea necesario un parametro, queremos que tenga un valor por default, hacemos
// lo siguiente, tras escribir la variable que recibira y el tipado de esta, le asignamos un valor (= valorDefault), si tomamos el ejemplo anterior
// queda:

// function fullName (firstName: string, lastName: string = "Smith"): string{
//     return `${firstName} ${lastName}`
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INTERFACES

// Las interfaces nos ayudan a definir la forma exacta que tiene un objeto, las propiedades que este contiene, esto nos ayuda al
// autocompletado y a evitar algunos errores

enum Color2{
    Red = "Rojo",
    Green = "Verde"
}

// Para definir una interfaz, usamos la palabra reservado interface, dentro de las llaves, escribimos el nombre de las propiedades
// y el tipo de estas
interface Rectangulo{
    alto: number
    ancho: number
    // Si queremos que una propiedad sea opcional, hacemos lo mismo que con los parametro opcionales en las funciones
    // colocamos ? antes de tiparlo
    color?: Color2
}

// Al crear una interfaz, convertimos a esta en un tipo y podemos crear objetos, en este ejemplo, de tipo Rectangulo

// Creamos un nuevo objeto de tipo Rectangulo

let rect: Rectangulo = {
    alto: 4,
    ancho: 6
}

// Aqui le decimos a la funcion que recibira una variable de tipo Rectangulo
function area (r: Rectangulo):number{
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

