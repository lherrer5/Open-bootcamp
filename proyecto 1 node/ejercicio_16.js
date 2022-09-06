const parrafos= document.querySelectorAll(".parrafo")
const secciones= document.querySelectorAll(".seccion")

parrafos.forEach(parrafo=>{
    parrafo.addEventListener("dragstart", event=>{
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        //para crear una imagen q se muestre al momento de mover los parrafos
        const element_fantasma= document.querySelector(".papelera")
        event.dataTransfer.setDragImage(element_fantasma, 0,0)//requiere los 3 parametros
    } )
    parrafo.addEventListener("dragend", ()=>{
        parrafo.classList.remove("dragging")
    } )
})

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
    } )
    seccion.addEventListener("drop", event=>{
        console.log("Drop");
        const id_parrafo= event.dataTransfer.getData("id")
        //console.log("id", id_parrafo)
        const parrafo= document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    } )
})