
// - Crea una variable con tu nombre
//let nombre="Lina"
// - Crea una variable con tu apellido
//let apellido="Herrera"
// - Crea un objeto con tu nombre y tu apellido

let fullName={
    nombre:"Lina",
    apellido:"Herrera"
}
// - Almacena el objeto anterior en la SessionStorage
console.log(sessionStorage.setItem("persona", JSON.stringify(fullName))) //como string
console.log(JSON.parse(sessionStorage.getItem("persona")))//como objeto 

// - Almacena el objeto anterior en la LocalStorage
console.log(localStorage.setItem("persona", JSON.stringify(fullName))) //como string
console.log(JSON.parse(localStorage.getItem("persona")))//como objeto 

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie="nombreCookie=cookieNueva"
document.cookie="nombreCaduca=Nombre; expires=" + new Date(2022, 8, 9, 14, 2,2 ).toUTCString()

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado