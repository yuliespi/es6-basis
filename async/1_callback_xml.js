let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint ='https://rickandmortyapi.com/api/character'

function exito(response){
    console.log(JSON.parse(response))
}

function fallo(status){
    console.log(status)
}
function get_data(endpoint, exito, fallo){
    //2.Creamos el objeto de conexion
    let http = new XMLHttpRequest()
    //3.abrirconexion a la APi
    http.open('get' , endpoint)
    //4. enviar la solicitud(request) a la Api
    http.send()
    //5. hacer el tratamiento de la response
    http.onload = function(){
        if(http.status === 200 ){
            exito(http.responseText)
        }else{
            fallo((http.status))
        }
        

    }
}

//invocar la funcion get_data
get_data(endpoint, exito, fallo)