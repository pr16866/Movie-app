
import React from 'react'

const OverView = ({ overview }: any) => {
    return (
        <div className="overview">
            <h3>Overview : </h3>
            <p style={{ marginTop: "10px" }}>{overview}</p>
        </div>
    )
}

export default OverView