import React from 'react'
import './Plans.css'

const Plans = (props) => {
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className={`card__side card__side--front-${props.cssNo}`}>
                        <div className="card__title card__title--2">
                            <i className={`fas ${props.icon}`}></i>
                            <h4 className="card__heading">{props.type}</h4>
                        </div>

                        <div className="card__details">
                            <ul>
                                {props.details.map((detail) => {
                                    return (<li>{detail}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={`card__side card__side--back card__side--back-${props.cssNo}`}>
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">{props.price}</p>
                            </div>
                            <a href="#popup" className="btn btn--white">Select</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans