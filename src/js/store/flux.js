const getState = ({ getStore, // Se usa para obtener info de la store en el contexto de flux
	 getActions, // Obtiene los datos de actions de flux
	 setStore }) => { // Setea los datos de store
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			peopleInfo: {},
			planetInfo: {},
			vehiclesInfo: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: (param) => {
				setStore({favorites: favorites.concat(param)})
			},
			fetchPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then((response) => response.json()) //lo transformamos en un json
				.then((data) => setStore({people: data.results})) //lo guardamos en un objeto

			},
			fetchVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then((response) => response.json()) //lo transformamos en un json
				.then((data) => setStore({vehicles: data.results})) //lo guardamos en un objeto
			},
			fetchPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then((response) => response.json()) //lo transformamos en un json
				.then((data) => setStore({planets: data.results})) //lo guardamos en un objeto
			},
			fetchPeopleInfo: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
				.then((response) => response.json()) //lo transformamos en un json
				.then((data) => setStore({peopleInfo: data.result})) //lo guardamos en un objeto
			},
			fetchPlanetInfo: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
				.then((response) => response.json()) //lo transformamos en un json
				.then((data) => setStore({planetInfo: data.result})) //lo guardamos en un objeto
			},
			fetchVehiclesInfo: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
				.then((response) => response.json()) //lo transformamos en un json
				.then((data) => setStore({vehiclesInfo: data.result})) //lo guardamos en un objeto
			}
			
		}
	};
};

export default getState;
