import React from 'react'
import { Link } from 'react-router-dom'


export default function Card() {
    return (
        <div className="card">
            <img src={''} alt={''} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">
                    React JS
                </h5>
                <Link to={'/profile/react'} className="btn btn-success" >Открыть</Link>
            </div>
        </div>
    )
}
