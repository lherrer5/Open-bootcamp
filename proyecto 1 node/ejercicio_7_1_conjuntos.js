//- Un nuevo Set con los nombres de tu familia
const name_family=["Luz", "Carlos", "Mirri", "Andres","Lina"]
const set_Family= new Set (name_family)
console.log(set_Family)

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
set_Family.add("Lina")
console.log(set_Family)

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
set_Family.add("Javascript")
console.log(set_Family)

//tengo .delete para eliminar objetos especificos y .clear para limpiar todo el set
//.has para q m diga true o false si esta mi objeto (.includes para array)
//.size para ver # objetos en set
/* set_Family.forEach (valor => {
    console.log(valor) m imprimiria Luz, Carlos, Mirri, Andres, Lina, Javascript
})*/
/* const it_set_Family= set_Family.values()
    console.log(it_set_Family) m imprimiria {[Iterator]}
})*/
/*Para volver de set a array
 const ar_set_Family= [...set_Family]
    console.log(ar_set_Family) m imprimiria mi array
})*/