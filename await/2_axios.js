const axios = require('axios')

let config = {
    method:'get',
    url:"https://rickandmortyapi.com/api/character"
}

const f = async () =>{
    try{
      let response = await axios (config)
      response.data.results.forEach(element => {
        console.log(`Tipo: ${element.name }`)
        console.log('+++++++++++++++++++++++')
      });
    }catch(error){
        console.error(error)
    }
}
f()
