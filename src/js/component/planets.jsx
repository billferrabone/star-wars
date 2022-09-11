import React from "react"
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";


function Planets ( {planetName, planetUrl, planetImage}) {
    return <>
    <div className="card m-2 text-start bg-light text-dark" style={{width: '15rem'}}>
  <img src={`https://starwars-visualguide.com/assets/img/planets/${planetImage}.jpg`} className="card-img-top" alt="Sorry, the imagen cannot be found, you'll see some random text written by the editor in some free minutes"/>
  <div className="card-body p-1">
    <h5 className="card-title">{planetName}</h5>


    <Link to={`/planets/${planetImage}`}><button className="btn btn-outline-primary float-start">Learn more!</button></Link>
    <a href="#" className="btn btn-outline-primary float-end"><i className="fa fa-heart text-danger" /></a>
  </div>
</div>
    </>
}

export default Planets