const initialState = {
	pokemons : [],
	allPokemons: [],
	types:[],
	detail:[],
}

function rootReducer(state=initialState, action) {
	switch(action.type) {
		case 'GET_POKEMONS':
			return{
				...state,
				pokemons:action.payload,				
				allPokemons: action.payload
			}

		case 'GET_TYPES':
			return {
			...state,
			types: action.payload
		}

		case 'FILTER_BY_TYPE' : 
		const creadoOexistenteStatus=state.creadoOexistente
		const allPokemonsStatus = state.allPokemons
		let statusFiltered
		switch(creadoOexistenteStatus) {
			case "Creados":
					console.log("solo creados")
					statusFiltered=action.payload==='All' ? allPokemonsStatus : allPokemonsStatus.filter(el => el.createdInDb && (el.types[0]===action.payload || el.types[1]===action.payload) )
			break;
			case "Existentes":
				console.log("solo Existentes")
				statusFiltered=action.payload==='All' ? allPokemonsStatus : allPokemonsStatus.filter(el => !el.createdInDb &&  (el.types[0]===action.payload || el.types[1]===action.payload) )
			break;					

			default:
				console.log("todos")
				statusFiltered=action.payload==='All' ? allPokemonsStatus : allPokemonsStatus.filter(el => (el.types[0]===action.payload || el.types[1]===action.payload) )
				
			}			
			return {
				...state,
				pokemons: statusFiltered,
				typestatus:action.payload
		}

		case 'FILTER_CREATED':
			let createdFilter = state.allPokemons;
			console.log(action.payload)
				createdFilter = action.payload === "All"
				? createdFilter
				: action.payload === "created"
				? createdFilter.filter((p) => p.createdInDb === true)
				: createdFilter.filter((p) => !p.createdInDb);
 
			return{
			...state,
			pokemons: createdFilter,
			creadoOexistente:action.payload
		}

		case 'ORDER_BY_NAME':
			let sortedArr = action.payload === 'asc' ?
			state.pokemons.sort(function(a,b) {

				if(a.name.toLowerCase() > b.name.toLowerCase()){
					return 1;
				}
				if (b.name.toLowerCase() > a.name.toLowerCase()) {
					return -1;
				}
					return 0;
				}) :
			state.pokemons.sort(function(a,b) {
				if(a.name.toLowerCase() > b.name.toLowerCase()) {
					return -1;
				}
				if(b.name.toLowerCase() > a.name.toLowerCase()) {
					return 1;
				}
				return 0;
			})
			return {
				...state,
				pokemons: sortedArr
			}
			
		case 'ORDER_BY_ATTACK':
      		const attackOrder =
        	action.payload === "top"
          	? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      return { ...state, pokemons: attackOrder };

		case "GET_DETAILS":
			return {
				...state,
				detail: action.payload
			}
		case "POST_POKEMON":
			return {
			...state,
			}
		case 'GET_NAME_POKEMONS':			
			return {
				...state,
				pokemons: action.payload
			}
			default:
				return state;
	}
}

export default rootReducer;



