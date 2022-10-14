const needle =require('needle')

const url = "https://rickandmortyapi.com/api/character"

needle('get', url)
        .then((response)=>{
            console.log(response)
        })
        .catch()