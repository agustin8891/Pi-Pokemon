//vamos a usar hooks
import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons, filterPokemonByType, filterCreated, orderByName, getTypes, orderByAttack} from '../../actions';
import {Link} from 'react-router-dom'
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Home.module.css'


export default function Home() {

	const dispatch = useDispatch()
	const allPokemons = useSelector ((state) => state.pokemons) // esto es lo mismo que hacer el makstate to props	
	const [currentPage, setCurrentPage] = useState(1) // esto es un estado local
	const [pokemonsPerPage, setpokemonsPerPage] = useState(12) //12 son los pokemons por pagina
	console.log(pokemonsPerPage)
	const indexOfLastPokemon=currentPage * pokemonsPerPage // en un ppio esto va a ser 12
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
/* 	console.log(indexOfLastPokemon)
	console.log(indexOfFirstPokemon) */
	let currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

	const types = useSelector((state) => state.types);
	const typeStatus = useSelector((state) => state.typeStatus);
	const creadoOexistente = useSelector((state) => state.creadoOexistente);

	const [orden, setOrden] = useState('')

	useEffect(() => {
		dispatch(getPokemons());
	},[dispatch])

	useEffect(() => {
		dispatch(getTypes())
	},[]);

	const[input, setInput] = useState({
		name:"",
		life:"",
		attack:"",
		defense:"",
        speed:"",
		height:"",
		weight:"",
		types:[]
	})	
	
	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber)
	}
	


	function handleClick(e) {
		e.preventDefault();
		dispatch(getPokemons());
	}

	function handleFilterStatus(e) {		
		dispatch(filterPokemonByType(e.target.value))
		setCurrentPage(1);
	}

	function handleFilterCreated (e) {
		dispatch(filterCreated(e.target.value))
		setCurrentPage(1);
	}

	function handleSort (e) {
		e.preventDefault();
		dispatch(orderByName(e.target.value))
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`)
	};

	  function handleOrderAttack(e) {
		e.preventDefault();
		dispatch(orderByAttack(e.target.value));
		setCurrentPage(1);
		setOrden(`ordered ${e.target.value}`);
	  }

	
	return (
		<div>
		<div className={styles.padreTop}>
			<div className={styles.LinkClase}>
			<Link to= '/pokemons' >
				<button className={styles.boton}>Crear Pokemon</button>
			</Link>
		</div>
			<div className={styles.filtrosyPaginado}>
				<div className={styles.padreDeFiltros}>
					<div className={styles.ataqueClase}>
						<label>Ordenar por ataque:</label>
						<select
							onChange={(e) => handleOrderAttack(e)}
							>
						<option selected="true" disabled="disabled">Seleccionar</option>
							<option value="top">Ascendente</option>
							<option value="bottom">Descendente</option>
						</select>
					</div>
					<div className={styles.abcClase}>
						<label>Ordenar alfabéticamente:</label>
							<select onChange={e => handleSort(e)}>
							<option selected="true" disabled="disabled">Seleccionar</option>
								<option value='asc'>Ascendente</option>
								<option value='desc'>Descendente</option>
							</select>	
					</div>
					<div className={styles.tipoClase}>
					<label>Filtrar por Tipo:</label>
						{<select onChange={e => handleFilterStatus(e)}>
						<option selected="true" disabled="disabled">Seleccionar</option>
							<option value='All'>Todos</option>
							<option value='normal'>Normal</option>
							<option value='fighting'>Fighting</option>
							<option value='poison'>Poison</option>
							<option value='ghost'>Ghost</option>
							<option value='flying'>Flying</option>
							<option value='ground'>Ground</option>
							<option value='bug'>Bug</option>
							<option value='rock'>Rock</option>
							<option value='steel'>Steel</option>
							<option value='fire'>Fire</option>
							<option value='psychic'>Psychic</option>
							<option value='water'>Water</option>
							<option value='grass'>Grass</option>
							<option value='electric'>Electric</option>
							<option value='ice'>Ice</option>
							<option value='dragon'>Dragon</option>
							<option value='dark'>Dark</option>
							<option value='fairy'>Fairy</option>
							<option value='unknown'>Unknown</option>
							<option value='shadow'>Shadow</option>
						</select>}
					</div>
					<div className={styles.creadosClase}>
					<label>Filtar por creado:</label>
						<select onChange={e => handleFilterCreated(e)}>
						<option selected="true" disabled="disabled">Seleccionar</option>
							<option value='All'>Todos</option>
							<option value='created'>Creados</option>
							<option value='api'>Existente</option>
						</select>
					</div>
		</div>	
				<div className={styles.paginadoClase}>
					<label className={styles.LabelPagina}>Seleccionar página:</label>
					<div className={styles.paginasClase}>
						<Paginado
							pokemonsPerPage= {pokemonsPerPage}
							allPokemons={allPokemons.length}
							paginado={paginado}
						/>
					</div>	
				</div>
		</div>
  
				
				<SearchBar/>
		</div>
				<div className={styles.padreDeCards}>		
				{currentPokemons?.map((c) => {
					return (

						<fragment>							
							<Link to = {"/home/" + c.id}>
							<Card name={c.name} image={c.image} types={c.types} key={c.id}/>

							</Link>
						</fragment>

						)
					})}
				
			</div>
		</div>
	)

}