import React, { useState, useEffect } from 'react';
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

            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Rank</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item) => (
                        <tr>
                            <td>{item.team_name}</td>
                            <td>{item.overall_league_position}</td>
                            <td>{item.overall_league_PTS}</td>
                            <td>{item.overall_league_W}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Teams;