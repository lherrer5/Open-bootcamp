//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos_persona= {
    nombre: "Lina",
    apellido: "Herrera",
    edad: 36,
    altura: 1.62,
    eresDesarrollador: true,
}
console.log(datos_persona)

//- Una variable que obtenga tu edad a partir del objeto anterior
const mi_edad= "edad"
console.log(datos_persona[mi_edad])

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const nuestros_Datos= [{
        Nombre: "Lina",
        Apellido: "Herrera",
        Edad: 36,
        Altura: 1.62,
        EresDesarrollador: true,},
    {
        Nombre: "Naty",
        Apellido: "Molina",
        Edad: 28,
        Altura: 1.80,
        EresDesarrollador: false,},
    {
        Nombre: "Nana",
        Apellido: "Morales",
        Edad: 35,
        Altura: 1.50,
        EresDesarrollador: false,},
    ]
console.log(nuestros_Datos)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
nuestros_Datos.sort((a , b)=> a.Edad - b.Edad)
console.log(nuestros_Datos)

