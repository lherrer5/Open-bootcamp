//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

//- Registra el error en un archivo a través de un try...catch

const rev_num = num =>{
    if (typeof num ==="number"){
        return 2*num;
    }
    throw new Error ("Escribe un numero")
}

try {
    console.log("Ejecutandose OK")
} catch (ex) {
    console.log("No es numero");
    }finally{
        console.log("Finalmente!");}

    const doble = rev_num(5)
    console.log(doble)

