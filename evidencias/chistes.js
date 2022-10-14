//Promises
const needle =require('needle')

const url = "https://palabras-aleatorias-public-api.herokuapp.com/joke/random"

needle('get', url)
        .then((response)=>{
            console.log(response)
        })
        .catch()