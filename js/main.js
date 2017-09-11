
const DatoGlobal = {

    variables: {
        latitud: undefined,
        longitud: undefined,
        map: undefined,
        miUbicacion: undefined
        //valores: undefined
        
    },
    Init: function (){
        DatoGlobal.variables.map = new google.maps.Map($("#map")[0],{
        //DatoGlobal.valores = {
            zoom: 7,
            center: { lat: -9.1191427, lng: -77.0349046 },
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        });

       // DatoGlobal.variables.map = new google.maps.Map(DatoGlobal.map);
        DatoGlobal.Setup();
    },
    Setup: function(){
        $("#encuentrame").click (DatoGlobal.Buscar);
    },
    Buscar :function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(DatoGlobal.Exito, DatoGlobal.Error);
        }
    },
    Exito: function(posicion){
        DatoGlobal.variables.latitud = posicion.coords.latitude;
        DatoGlobal.variables.longitud = posicion.coords.longitude;
        DatoGlobal.variables.miUbicacion = new google.maps.Marker({
            position: { lat: DatoGlobal.variables.latitud, lng: DatoGlobal.variables.longitud },
            animation: google.maps.Animation.DROP,
            map: map
        });
        DatoGlobal.variables.map.setZoom(17);
        DatoGlobal.variables.map.setCenter({ lat: DatoGlobal.variables.latitud, lng: DatoGlobal.variables.longitud });
    },
    Error: function(){
        alert("Tenemos un  problema cn encontrar tu ubicacion");
    }
    
};
 

function initMap(){
    DatoGlobal.Init () ;
}

/************Codigo con JS************



function initMap(){
    var map = new google.maps.Map($("#map")[0],{
        zoom: 7,
        center: {lat: -9.1191427, lng: -77.0349046},
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl:false

    });

    function buscar(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(funcionExito,funcionError);
        }


    }
 document.getElementById.addEventListener("click",buscar);
   //$("#encuentrame")[0].addEventListener("click",buscar);
    var latitud,longitud;

    var funcionExito = function(posicion){
        latitud = posicion.coords.latitude;
        longitud= posicion.coords.longitude;

        var miUbicacion = new google.maps.Marker({
            position: {lat:latitud, lng:longitud},
            animation: google.maps.Animation.DROP,
            map: map,
           // icon: image
        });

        map.setZoom(17);
        map.setCenter({lat:latitud,lng:longitud});
    }
    
    var funcionError = function(error){
        alert("Tenemos un problema con encontrar tu ubicación");
    }
}

*/