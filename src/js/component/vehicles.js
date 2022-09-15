import React from "react"
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

function Vehicles ( {vehicleName, vehicleUrl, vehicleImage}) {

  const {store, actions} = useContext(Context)

    return <>
    <div className="card m-2 text-start bg-light text-dark" style={{width: '15rem'}}>
  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleImage}.jpg`} className="card-img-top" alt="..."/>
  <div className="card-body p-1">
    <h5 className="card-title">{vehicleName}</h5>

    <Link to={`/vehicles/${vehicleImage}`}><button className="btn btn-outline-primary float-start">Learn more!</button></Link>
    <button onClick={() => {actions.addFavorites(vehicleName);}} href="#" className="btn btn-outline-primary float-end"><i className="fa fa-heart text-danger" /></button>
  </div>
</div>
    </>
}

export default Vehicles