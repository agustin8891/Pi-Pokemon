import React,  {useState} from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetail} from "../../actions/index";
import {useEffect} from "react";
import styles from './Detail.module.css'



export default function Detail(props) {

	const [currentPage, setCurrentPage] = useState(1)

	const { id } = useParams();
	const dispatch = useDispatch();
	
	const myPokemon = useSelector((state) => state.detail);
	React.useEffect(() => {
	  dispatch(getDetail(id));
	}, [dispatch, id]);

function reset() {
	dispatch(getDetail());
	setCurrentPage(1);
}




	return (
		<div>
					{console.log(myPokemon)}
				{ 
							myPokemon.hasOwnProperty('types') ?
						<div className={styles.detailClass}>
							<div className={styles.NombreClass}>
							<h1>Name: {myPokemon.name}</h1>
							</div>
							<img className={styles.imagedetail} src = {myPokemon.image? myPokemon.image : myPokemon.image} alt="No se pudo cargar la imagen"  />
							<p>Life: {myPokemon.life}</p>
							<p>Attack: {myPokemon.attack}</p>
							<p>Defense: {myPokemon.defense}</p>
							<p>Speed: {myPokemon.speed}</p>
							<p>Height: {myPokemon.height}</p>
							<p>Weight: {myPokemon.weight}</p>
							<p>Types: {myPokemon.types[0]} {myPokemon.types[1]}</p>
						</div> : <p>Loading...</p>
					}
					<Link to ='/home'>
						<button className={styles.boton} onClick={() => reset()}>Volver</button>
					</Link>
		
				
				</div>
		
			)
		}








