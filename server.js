const express = require('express')
const request = require('request')


const server = express()
// const BASE_URL = process.en.BASE_URL
// const LEAGUE_ID = process.en.LEAGUE_ID
// const API_KEY = process.en.API_KEY

server.get('/', (req, res) => {

    const url = 'https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=86426c746697bc6f1c2a765d94bf4891adcea52800c28be9945573f0c75bf77c'
    // const url = `${BASE_URL}?action=get_standings&league_id=${LEAGUE_ID}&APIkey=${API_KEY}`
    request(url, (error, body) => {
        // console.log('body: ', body)
        res.send(JSON.parse(body.body))
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log('Server is running on port' + PORT)
})