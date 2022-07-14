//- La fecha de hoy
const es_hoy=new Date()
console.log(es_hoy)
console.log(es_hoy.toLocaleDateString())

const es_hoy2=new Date(2022,6,14)
console.log(es_hoy2)

const es_hoy3=new Date("July 14, 2022")
console.log(es_hoy3)

//.getTime para convertir a milisegundos y poder compara la igualdad entre fechas

//- La fecha de tu nacimiento
const mi_cumple=new Date(1985,9,1)
console.log(mi_cumple)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparo=es_hoy> mi_cumple
console.log(comparo)

//- Una variable que contenga el día de tu nacimiento
const dia_mi_cumple=mi_cumple.getDate()
console.log(dia_mi_cumple)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes_mi_cumple=mi_cumple.getMonth()+1
console.log(mes_mi_cumple)

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año_mi_cumple=mi_cumple.getFullYear()
console.log(año_mi_cumple)