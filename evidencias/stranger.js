//Promises axios

const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://strangerthings-quotes.vercel.app/api/quotes/7'
}

axios(config)
    .then((response)=>{
        return response.data
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(`Autor: ${element.author}`)
            console.log(`-----------------------`)
        })
    })
    .catch((error)=>{
        console.error(error)
    })

