import React, { useState, useEffect } from 'react';
import './teams.css'

const Teams = () => {
    const [showTeams, setShowTeams] = useState(null)
    useEffect(() => {
        fetch('/').then(res => res.json()).then(showTeams => setShowTeams({ showTeams }, () => {
            console.log('data fetch ', showTeams)
        }))
    })
    return (
        <div>
            <title>Fullstack app</title>
            <h1>Premier league teams</h1>
        </div>
    )
}

export default Teams;