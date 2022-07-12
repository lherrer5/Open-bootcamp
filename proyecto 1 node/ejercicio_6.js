//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let lista_compra=["leche", "huevos", "arepas", "jugo","carne"]
console.log(lista_compra)

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compra.push("Aceite de Girasol")
console.log(lista_compra)
lista_compra.unshift("Aceite de Girasol")
console.log(lista_compra)
lista_compra.splice(0, 0, "Aceite de Girasol")
console.log(lista_compra)


//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compra.pop("Aceite de Girasol")
console.log(lista_compra)
lista_compra.shift("Aceite de Girasol")
console.log(lista_compra)
lista_compra.splice(0, 1)
console.log(lista_compra)

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let pelis_fav=[
    {
    titulo: "Más allá de los sueños",
    director: "Pepito Perez",
    fecha: new Date(1980, 10, 5),
    },
    {
    titulo: "En busca de la felicidad",
    director: "Fernando Fernandez",
    fecha: new Date(2000, 3, 22),
},
{
    titulo: "El origen",
    director: "Rodrigo Rodriguez",
    fecha: new Date(2022, 1, 30),
}]
console.log(pelis_fav)

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
/* const new_pelis= pelis_fav.filter(peli => {
    if (peli.fecha>(2010,1,1)){
        return true
    } else{
        return false
    }
})
 */
const new_pelis= pelis_fav.filter(peli =>peli.fecha>(2010,1,1))
console.log(new_pelis)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const lista_dir= pelis_fav.map(solo_direct=>solo_direct.director)
console.log(lista_dir)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const lista_titulo= pelis_fav.map(solo_titulo=>solo_titulo.titulo)
console.log(lista_titulo)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lista_dir_titulo=lista_dir.concat(lista_titulo)
console.log(lista_dir_titulo)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const lista_dir_titulo2=[...lista_dir, ...lista_titulo]
console.log(lista_dir_titulo2)