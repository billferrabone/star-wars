import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const VehiclesInfo = () => {

    const params = useParams()
    const {store, actions} = useContext(Context)
    
    useEffect( ()=>{ actions.fetchVehiclesInfo(params.uniqueid) }, [] )

    console.log(store.vehiclesInfo)

    return <>
    <h1 className="text-danger">{store.vehiclesInfo?.properties?.name}</h1>
    <div className="card mb-3 fs-2 bg-light text-black" style={{maxWidth: '1440px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uniqueid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 fs-4">
      <div className="card-body">
        <p className="card-title">Description: <span className="text-danger">{store.vehiclesInfo?.description}</span></p>
        <p className="card-text">Cargo capacity: <span className="text-danger">{store.vehiclesInfo?.properties?.cargo_capacity}</span> </p>
        <p className="card-text">Cost in credits: <span className="text-danger">{store.vehiclesInfo?.properties?.cost_in_credits}</span></p>
        <p className="card-text">Passengers: <span className="text-danger">{store.vehiclesInfo?.properties?.passengers}</span></p>
      </div>
    </div>
  </div>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-3 bg-dark text-light">Length: <span className="text-danger">{store.vehiclesInfo?.properties?.length}</span> </div>
    <div className="col-3">Manufacturer: <span className="text-danger">{store.vehiclesInfo?.properties?.manufacturer}</span></div>
    <div className="col-3 bg-dark text-light">Vehicle class: <span className="text-danger">{store.vehiclesInfo?.properties?.vehicle_class}</span></div>
    <div className="col-3">Crew: <span className="text-danger">{store.vehiclesInfo?.properties?.crew}</span></div>
  
   
  </div>
</div>
    </>
}

export default VehiclesInfo