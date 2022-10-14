//axioss await
const axios = require('axios')

let config = {
    method:'get',
    url:"https://hp-api.herokuapp.com/api/characters"
}

const f = async () =>{
    try{
      let response = await axios (config)
      response.body.results.forEach(element => {
        console.log(`Tipo: ${element.name }`)
        console.log('+++++++++++++++++++++++')
      });
    }catch(error){
        console.error(error)
    }
}
f()
