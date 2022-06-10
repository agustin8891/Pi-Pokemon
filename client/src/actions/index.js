import axios from 'axios'


export function getPokemons() {
	return async function(dispatch){
		var json = await axios ("http://localhost:3001/pokemons");
		return dispatch({
			type:'GET_POKEMONS',
			payload:json.data
		})
	}
}

export function filterPokemonByType(payload) {

	return{
		type: 'FILTER_BY_TYPE',
		payload,
	}
}

export function filterCreated(payload) {
	return{
		type: "FILTER_CREATED",
		payload
	}
}

export function orderByName(payload) {
	return {
		type: 'ORDER_BY_NAME',
		payload
	}
}

export function getNamePokemons(name) {
	return async function (dispatch) {
		try{
			console.log("getNamePokemonsssss")
			var json=await axios.get("http://localhost:3001/pokemons?name=" + name)
			return dispatch ({
				type: "GET_NAME_POKEMONS",
				payload: json.data
				
			})
		} catch(error) {
			alert("Pokemon no encontrado")
		}
	}	
}	
export function getTypes() {
	return async function(dispatch) {
		var info = await axios.get('http://localhost:3001/types')
		return dispatch({type: 'GET_TYPES', payload: info.data} );
	};
}

export function postPokemon (payload) {
	return async function(dispatch){
		const response = await axios.post('http://localhost:3001/pokemons', payload)

		return response;
	}
}


  
  export function orderByAttack(payload) {
	return { type: 'ORDER_BY_ATTACK', payload };
  }






export function getDetail(id){

	return async function (dispatch) {
		try{
			var json = await axios.get("http://localhost:3001/pokemons/" + id);
			return dispatch({
				type: "GET_DETAILS",
				payload: json.data
			})			
		} catch(error) {
			console.log(error)
			alert("no existe el id solicitado")
		}
	}
}