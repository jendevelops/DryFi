import React from 'react'
import './EnvironmentMetrics.css'

export default function EnvironmentMetrics(props) {
    const title = (props.name === "Current Room Temperature" || props.name === "")
    return (
        <div className="environment-card">
           <div className="name ec-unit">{props.name}</div> 
           <div className="metric ec-unit">{props.metric}<span>{props.qualifier}</span></div>
        </div>
    )
}
