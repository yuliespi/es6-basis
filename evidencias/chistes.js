//Promises simple

/*let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint ='https://palabras-aleatorias-public-api.herokuapp.com/joke/random'

function exito(response){
    console.log(JSON.parse(response))
}

function fallo(status){
    console.log(status)
}
const get_data =(endpoint) =>{
    //1.definir promesa para la api
    let promise = new Promise( (resolve , reject)=>{
        let http = new XMLHttpRequest()
        //3.abrirconexion a la APi
        http.open('get' , endpoint)
        //4. enviar la solicitud(request) a la Api
        http.send()
        //5. hacer el tratamiento de la response
        http.onload = function(){
            if(http.status === 200 ){
                resolve(http.responseText)
            }else{
                reject((http.status))
            } 
        }
    })

    return promise
}

//invocar la funcion get_data
get_data(endpoint)
    .then((response)=> {
        exito(response)
    })
    .catch((status)=>{
        fallo(status)
    })*/


const axios = require('axios')

let config = {
    method:'get',
    url:"https://palabras-aleatorias-public-api.herokuapp.com/joke/random"
}

axios(config)
    .then((responses)=>{
        return response.data.lines
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(`Tipo: ${element.lines }`)
            console.log('+++++++++++++++++++++++')
        });
    })
    .catch((error)=>{
        console.error(error)
    })
