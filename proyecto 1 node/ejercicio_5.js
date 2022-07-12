//- Una variable que contenga tu altura en centímetros (entero)
let altura_cm=162

//- Una variable que contenga tu altura en metros (número de coma flotante)
let altura_mts=1.62

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kl=61.5

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_redondeada=altura_mts.toFixed(10)
console.log(altura_redondeada)

let altura_redondeada2=altura_mts.toPrecision(10)
console.log(altura_redondeada2)

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_redondeado= Math.round(peso_kl);
console.log(peso_redondeado)

let peso_redondeado2= peso_kl.toFixed(0);
console.log(peso_redondeado2)

let peso_redondeado3= peso_kl.toPrecision(2);
console.log((peso_redondeado3))

let m=parseInt(peso_redondeado3)
console.log(typeof m)
console.log(m)

/*- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" 
es igual al máximo valor que se puede obtener en Javascript*/
let el_max=Number.MAX_VALUE
console.log(el_max)

let el_min_precision=Number.EPSILON
console.log(el_min_precision)

let el_min_js=Number.MIN_VALUE
console.log(el_min_js)