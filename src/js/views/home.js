import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "../component/characters.jsx";
import Planets from "../component/planets.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Vehicles from "../component/vehicles.js";
import { useContext } from "react";
import { Context } from "../store/appContext.js";


export const Home = () => {


	const {store, actions} = useContext(Context)

	useEffect( () => {actions.loadSomeData(), console.log(store.people)}, [])



 useEffect( ()=>{actions.fetchPeople();  actions.fetchPlanets();  actions.fetchVehicles()}, [])


	
	return (
		<>
	<h1 className="text-danger ms-4">Characters</h1>
	<div className="container">
		<div className="row flex-nowrap">
		{store.people.map( (item) => {return <Character key={item.uid} peopleImage={item.uid}  peopleName={item.name} />})}
		</div>
	</div>
	<h1 className="text-danger ms-4">Planets</h1>
	<div className="container">
		<div className="row flex-nowrap">
		{store.planets.map( (item) => {return <Planets planetUrl={item.url} planetImage={item.uid} key={item.uid} planetName={item.name} />}  )}
		</div>
	</div>
	<h1 className="text-danger ms-4">Vehicles</h1>
	<div className="container">
		<div className="row flex-nowrap">
		{store.vehicles.map( (item) => {return <Vehicles vehicleUrl={item.url} vehicleImage={item.uid} key={item.uid} vehicleName={item.name} />}  )}
		</div>
	</div>
	</>
	)
}

