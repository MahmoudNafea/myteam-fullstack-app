import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './teams.css'

const Teams = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const response = await fetch('https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=86426c746697bc6f1c2a765d94bf4891adcea52800c28be9945573f0c75bf77c')
        const fetchedData = await response.json()
        setData(fetchedData)
    }, [])
    return (
        <div>
            <h1>Premier league teams</h1>

            <ul>
                {data.map((item) => (

                    <li key={item.team_id}>{item.team_name} Rank: {item.overall_league_position}</li>
                ))}
            </ul>

        </div >
    )
}

export default Teams;