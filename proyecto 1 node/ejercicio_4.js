//- Una cadena de texto con tu Nombre
let nombre="Lina"

//- Otra cadena de texto con tu Apellido
let apellido= "Herrera"

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante=nombre.concat(" ",apellido)
console.log(estudiante)

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus= estudiante.toLocaleUpperCase()
console.log(estudianteMayus)

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus=estudiante.toLowerCase()
console.log(estudianteMinus)

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
var num_letra_estudiante= estudiante.length;
console.log(num_letra_estudiante)

//- Una variable que contenga la primera letra del Nombre
let prim_letra= nombre.substring(0,1)
console.log(prim_letra)

let prim_letra2= nombre.charAt(0)
console.log(prim_letra2)

//- Otra variable que contenga la última letra del Apellido
let ulti_letra=apellido.substring(6,7)
console.log(ulti_letra)

let ulti_letra2=apellido.charAt(6)
console.log(ulti_letra2)

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let elim_espacio= estudiante.replace(" ","");
console.log(elim_espacio)

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nom_en_estudiante=estudiante.includes(nombre)
console.log(nom_en_estudiante)