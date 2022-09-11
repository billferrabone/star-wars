import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const PeopleInfo = () => {

    const params = useParams()

    const {store, actions} = useContext(Context)

    console.log(store.peopleInfo)
    
    useEffect( ()=>{ actions.fetchPeopleInfo(params.uniqueid) }, [] )

    return <>
    <h1 className="text-danger">{store.peopleInfo?.properties?.name}</h1>
    <div className="card mb-3 fs-2 bg-light text-dark" style={{maxWidth: '1440px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uniqueid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 fs-4">
      <div className="card-body">
        <p className="card-title">Name: <span className="text-danger">{store.peopleInfo?.properties?.name}</span></p>
        <p className="card-text">Birth year: <span className="text-danger">{store.peopleInfo?.properties?.birth_year}</span> </p>
        <p className="card-text">Description: <span className="text-danger">{store.peopleInfo?.description}</span></p>
        <p className="card-text">Mass: <span className="text-danger">{store.peopleInfo?.properties?.mass}</span></p>
      </div>
    </div>
  </div>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-3 bg-dark text-light">Skin color: <span className="text-danger">{store.peopleInfo?.properties?.skin_color}</span> </div>
    <div className="col-3">Hair color: <span className="text-danger">{store.peopleInfo?.properties?.hair_color}</span></div>
    <div className="col-3 bg-dark text-light">Gender: <span className="text-danger">{store.peopleInfo?.properties?.gender}</span></div>
    <div className="col-3">Height: <span className="text-danger">{store.peopleInfo?.properties?.height}</span></div>
  
   
  </div>
</div>
    </>
}

export default PeopleInfo