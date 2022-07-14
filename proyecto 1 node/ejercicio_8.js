//- Una función sin parámetros que devuelva siempre "true"
function fun_sin_Parametros(param=true) {
    console.log(param)
}
fun_sin_Parametros()

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function mi_fun_asincrona() {
    console.log("Hola soy una promesa")
}

setTimeout(mi_fun_asincrona, 5)

/*const mi_promesa = new Promise((resolve, reject) =>{
    if (true){
        resolve()
    } else {
        reject()
    }
})

mi_promesa
    .then(() => console.log("correccto"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("Siempre m imprimo"))*/


//- Una función generadora de índices pares automáticos
function* genera_indice() {
    let indic =0;
    while(true){
        indic+=2
        if (indic===9){
            return
        }
        yield indic
    }    
}

const m= genera_indice()
console.log(m.next().value)
console.log(m.next().value)
console.log(m.next().value)
console.log(m.next().value)