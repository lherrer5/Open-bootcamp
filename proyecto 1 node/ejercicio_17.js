// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
    //1ro obtenert geolocalizacion y 2do el marker
    geoPosiciona()
}

window.initMap = initMap;

function geoPosiciona(){
    if(navigator.geolocation){
    const geoLoc=navigator.geolocation
    const watchPos=geoLoc.watchPosition(position=>{
        console.log(position.coords)
    },error=>console.error(error),{timeout:6000})//para esperar 60 seg q encuentre la posicion, d no ser así sale el error
    } else{
        alert("Tu navegador no sirve :p")
    }
}




