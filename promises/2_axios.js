const axios = require('axios')

let config = {
    method:'get',
    url:"https://rickandmortyapi.com/api/character"
}

axios(config)
    .then((response)=>{
        return response.data.results
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(`Tipo: ${element.name }`)
            console.log('+++++++++++++++++++++++')
        });
    })
    .catch((error)=>{
        console.error(error)
    })