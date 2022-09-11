import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const PlanetInfo = () => {

    const params = useParams()
    const {store, actions} = useContext(Context)

    useEffect( ()=>{ actions.fetchPlanetInfo(params.uniqueid) }, [] )

    console.log(store.planetInfo)

    return <>
    <h1 className="text-danger">{store.planetInfo?.properties?.name}</h1>
    <div className="card mb-3 fs-2 bg-light text-dark" style={{maxWidth: '1440px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uniqueid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 fs-4">
      <div className="card-body">
        <p className="card-title">Name: <span className="text-danger">{store.planetInfo?.properties?.name}</span></p>
        <p className="card-text">Diameter: <span className="text-danger">{store.planetInfo?.properties?.diameter}</span></p>
        <p className="card-text">Climate: <span className="text-danger">{store.planetInfo?.properties?.climate}</span></p>
        <p className="card-text">Terrain: <span className="text-danger">{store.planetInfo?.properties?.terrain}</span></p>
      </div>
    </div>
  </div>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-3 bg-dark text-light">Population: <span className="text-danger">{store.planetInfo?.properties?.population}</span></div>
    <div className="col-3">Orbital period: <span className="text-danger">{store.planetInfo?.properties?.orbital_period}</span></div>
    <div className="col-3 bg-dark text-light">Population: <span className="text-danger">{store.planetInfo?.properties?.population}</span></div>
    <div className="col-3">Surface water: <span className="text-danger">{store.planetInfo?.properties?.surface_water}</span></div>
  
   
  </div>
</div>
    </>
}

export default PlanetInfo