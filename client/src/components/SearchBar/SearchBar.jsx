import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getNamePokemons} from '../../actions';
import styles from './SearchBar.module.css'

export default function SearchBar() {
	const dispatch = useDispatch()
	const[name,setName] = useState("")
function handleInputChange(e) {
	e.preventDefault()
	setName(e.target.value)
	console.log(name)
}

function handleSubmit(e) {
	e.preventDefault()
	dispatch(getNamePokemons(name))
	
}

return (
	<div className={styles.divBuscar}>
		<label>Buscar Pokemon:</label>
		<div>
			<input type='text' placeholder="buscar..."
			onChange = {(e) => handleInputChange(e)}
			className={styles.buscarClase}/>
		</div>
		<div>
			<button type='submit' onClick={(e) => handleSubmit(e)} 
			className={styles.botonBuscar}>Buscar</button>
		</div>
	</div>
)


}