//await axios

const axios = require('axios')

let config={
    method:'get',
    url: 'https://emojihub.herokuapp.com/api/all'
}

const f = async () => {
    try {
        let response= await axios(config)
        response.data.forEach(element => {
             console.log(`group: ${element.group}`)
             console.log(`//////////////////////////////////////`)
        });
    } catch (error) {
        console.log(error)
    }
}

f()