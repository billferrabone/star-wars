import React from "react"
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";

// "https://starwars-visualguide.com/assets/img/characters/2.jpg"

function Character ({peopleName, peopleImage}) {
    return <>
    <div className="card m-2 text-start bg-light text-dark" style={{width: '15rem'}}>
  <img src={`https://starwars-visualguide.com/assets/img/characters/${peopleImage}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body p-1">
    <h5 className="card-title">{peopleName}</h5>
    
    <Link to={`/people/${peopleImage}`}><button className="btn btn-outline-primary float-start">Learn more!</button></Link>
    <a href="#" className="btn btn-outline-primary float-end"><i className="fa fa-heart text-danger" /></a>
  </div>
</div>
    </>
}

export default Character