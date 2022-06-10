import axios from 'axios';

const datos = [{
	id: 1,
	title: 'iron man'
}, {
	id:2,
	title: 'Spiderman'
}, {
	id: 3,
	title: 'Avengers'
}];

console.log(datos)

var json = axios.get("http://https://pokeapi.co/api/v2/pokemon:3001/pokemons/");
const getDatos = () => {
	return new Promise((resolve, reject) => {
        
        resolve(json)
	});
}

getDatos()
	.then((datos) => console.log(datos));