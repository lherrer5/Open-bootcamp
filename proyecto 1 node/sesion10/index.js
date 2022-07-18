//Forma optima
const {suma, multiplica }= require("./controller")

const sumar1 = suma(1,2)
console.log(sumar1)

const sumar2 = suma(4,5)
console.log(2)

const multipli = multiplica(sumar1,sumar2)
console.log(multipli)

/*FORMA 2
const moduloController = require("./controller")

const sumar1 = moduloController.suma(1,2)
console.log(sumar1)

const sumar2 = moduloController.suma(4,5)
console.log(2)

const multipli = moduloController.multiplica(sumar1,sumar2)
console.log(multipli)
*/