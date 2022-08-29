// nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

let anterior=0
let acumulado=1
let actual=1
let arrayTodos=[]

function fibon(num) {
for (let i = 2; i <= num; i++) { 
    anterior=acumulado;
    acumulado=actual;
    actual=anterior+acumulado;
    console.log(acumulado)
    const acum= acumulado
    arrayTodos= [...arrayTodos, acum]
    }
    return arrayTodos
}

fibon(6)
console.log(arrayTodos)

