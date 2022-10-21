//callback request

const axios = require('axios')

let config = {
    method:'get',
    url:"https://hp-api.herokuapp.com/api/characters"
}

const f = async () =>{
    try{
      let response = await axios (config)
      response.data.forEach(element => {
        console.log(`Name: ${element.name }`)
        console.log('+++++++++++++++++++++++')
      });
    }catch(error){
        console.error(error)
    }
}
f()

