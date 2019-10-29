import React, { useState, useEffect } from 'react'
import './search.css'

const Search = () => {
    const [searchTeam, setSearchTeam] = useState('')
    const [results, setResults] = useState('')
    const [data, setData] = useState([])

    const searchTeamHandler = (event) => {
        setSearchTeam(event.target.value)
    }

    // useEffect(async () => {
    //     const response = await fetch('https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=86426c746697bc6f1c2a765d94bf4891adcea52800c28be9945573f0c75bf77c')
    //     const fetchedData = await response.json()
    //     setData(fetchedData)
    // }, [])
    // useEffect(() => {

    //     const searchResult = fetchedData.filter(team => team.toLowerCase()
    //         .includes(searchTeam))
    //     setResults(searchResult)
    // }, [searchTeam])
    return (
        <div className="search">
            <input className="search-input" type="text" placeholder="Enter your team name" value={searchTeam}
                onChange={searchTeamHandler} />
        </div>
    )
}

export default Search