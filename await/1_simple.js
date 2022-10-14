let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint ='https://rickandmortyapi.com/api/character'

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

 async function f (){
    try{
    let response= await get_data(endpoint)
    exito(response)
}catch (error){
    fallo(error)
}
}

f()

