// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos


class Estudiante {//objeto tipo estudiante
    // nombre;//variables/atributos q hacen parte de clase estudiante. al poner el constructor las puedo omitir
    // asignaturas;
    constructor (nombre,asignaturas){//metodo x defecto usado pa crear clases se llama constructor
        this.nombre=nombre //asi se declaran las variables/atributos. This hace referencia al objeto en el q esta (estudiante) y lo q hay luego del = es lo q pongamos en los parametros
        this.asignaturas=asignaturas
    }//las func dentro de objetos son metodos
    obtenDatos(){//creando metodo obetndatos q devuelve obj completo, si pongo .nombre, trae solo Lina
        return this
    }
}

const nuevo_Estudiante= new Estudiante("Lina", ["Javascript", "HTML", "CSS"])//instancia de "Estudiante"
console.log(nuevo_Estudiante)
console.log(nuevo_Estudiante.obtenDatos())// llamada al método obtenDatos


// const Estudiante={
//     nombre: "Lina Herrera",
//     asignaturas: ["Javascript", "HTML", "CSS"]
// }
// 0//función factory
// const creaEstudiante= (nombre,asignaturas)=>{
//     return {
//         nombre: nombre,//se podria dejar nombre, xq se llaman igual
//         asignaturas: asignaturas,
//     }
// }

// const nuevo_Estudiante= creaEstudiante("Luis", 12)
// console.log(nuevo_Estudiante)
