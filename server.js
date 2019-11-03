const express = require('express')
const request = require('request')


const server = express()
const BASE_URL = process.env.BASE_URL
const LEAGUE_ID = process.env.LEAGUE_ID
const API_KEY = process.env.API_KEY

server.get('/', (req, res) => {

    const url = `${BASE_URL}?action=get_standings&league_id=${LEAGUE_ID}&APIkey=${API_KEY}`
    request(url, (error, body) => {
        res.send(JSON.parse(body.body))
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log('Server is running on port' + PORT)
})