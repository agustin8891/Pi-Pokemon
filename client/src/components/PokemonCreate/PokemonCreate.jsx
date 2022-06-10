import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postPokemon, getTypes} from '../../actions/index'
import {useDispatch, useSelector} from 'react-redux';
import styles from './PokemonCreate.module.css'

/////////////////////////////////////////////////////////////////////////7


function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Este campo es requerido";
    } else if (!/^[a-z]{4,10}$/.test(input.name)) {
      errors.name = 
      "El nombre debe ser un nombre disponible con solo 4 a 10 letras minúsculas. " ;
    } else if (!input.image) {
      errors.image =  "Este campo es requerido";
    } /* else if (
      !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
        input.image
      )
    ) {
      errors.image = "La imagen debe ser una url disponible";
    } */ else if (!input.life) {
        console.log("error life")
      errors.life =  "Este campo es requerido";
    } else if (!/^[0-9_-]{1,2}$/.test(input.life) || input.life < 1) {
      errors.life = "el número debe ser mayor que 0 y menor que 100";
    } else if (!input.attack) {
      errors.attack =  "Este campo es requerido";
    } else if (!/^[0-9_-]{1,2}$/.test(input.attack) || input.attack < 1) {
      errors.attack = "El número debe ser mayor que 0 y menor que 100";
    } else if (!input.defense) {
      errors.defense =  "Este campo es requerido";
    } else if (!/^[0-9_-]{1,2}$/.test(input.defense) || input.defense < 1) {
      errors.defense = "El número debe ser mayor que 0 y menor que 100";
    } else if (!input.height) {
      errors.height =  "Este campo es requerido";
    } else if (!/^[0-9_-]{1,2}$/.test(input.height) || input.height < 1) {
      errors.height = "El número debe ser mayor que 0 y menor que 100";
    } else if (!input.weight) {
      errors.weight =  "Este campo es requerido";
    } else if (!/^[0-9_-]{1,2}$/.test(input.weight) || input.weight < 1) {
      errors.weight = "el número debe ser mayor que 0 y menor que 100";
    } else if (!input.speed) {
      errors.speed =  "Este campo es requerido";
    } else if (!/^[0-9_-]{1,2}$/.test(input.speed) || input.speed < 1) {
      errors.speed = "El número debe ser mayor que 0 y menor que 100";
    } else if (input.types.length===0 || input.types.length > 2) {
      console.log(input.types.length)
      errors.types = "Solo puedes seleccionar 2 tipos"    }

    return errors;
  }  



export default function PokemonCreate(){

	const dispatch=useDispatch()
	const types = useSelector((state) => state.types)
    const allPokemons = useSelector ((state) => state.pokemons)
    /* const history= useHistory() */// esto es un metodo del router que me redirige a la ruta que yo le diga

    const [errors, setErrors] = useState({});

	const[input, setInput] = useState({
		name:"",
		life:"",
		attack:"",
		defense:"",
        speed:"",
		height:"",
		weight:"",
		types:[],
        image:""
	})

	useEffect(() => {
		dispatch(getTypes())
	},[]);



    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));

    }

    function handleSelect(e) {
	setInput({
		...input,
		types:[...input.types, e.target.value]
		
	})
}

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postPokemon(input))
        alert("Pokemon creado")
        setInput({
            name:"",
            life:"",
            attack:"",
            defense:"",
            speed:"",
            height:"",
            weight:"",
            types:[],
            image:""
        })
       /*  history.push('/home') */
    }

    function handleDelete(el) {
        setInput({
            ...input,
            types: input.types.filter(occ => occ !==el)
        })
    }
    function handleSelect1(e) {
        setInput({ ...input, types: [e.target.value] });
      }
    
      function handleSelect2(e) {
        setInput({ ...input, types: [...input.types, e.target.value] });
      }
    


	return(	
		<div>
			{<Link to= '/home'><button className={styles.botonVolver}>Volver</button></Link>}
		<h1>Creá tu pokemon</h1>
		    <form onSubmit = {(e) => handleSubmit(e)} className={styles.formulario}> 

                    <div className={styles.estiloDiv}>
                            <div className={styles.estiloLabel}><label>Nombre:</label></div>
                            <div>  
                                <input className={styles.estiloInput}
                                type="text"	
                                value={input.name}		    	
                                name="name"
                                onChange={(e) => handleChange(e)}
                                />
                            </div>
                        {errors.name && (
                            <p className={styles.estiloError}>{errors.name}</p>
                        )}
                    </div>

                <div className={styles.estiloDiv}>
                    <div className={styles.estiloLabel}><label>Image (url):</label></div>
                    <div>
                        <input className={styles.estiloInput}
                        type="text"
                        value={input.image}
                        name="image"
                        onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {errors.image && <p className={styles.estiloError}>*{errors.image}</p>}
                </div>

			    <div className={styles.estiloDiv}>
                    <div className={styles.estiloLabel}><label>Life:</label></div>
                    <div>
                        <input className={styles.estiloInput}
                        type="number"
                        value={input.life}
                        name="life"
                        onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {errors.life && <p className={styles.estiloError}>*{errors.life}</p>}
                </div>

			    <div className={styles.estiloDiv}>
                    <div className={styles.estiloLabel}><label>Attack:</label></div>
                        <div>
                            <input  className={styles.estiloInput}
                            type="number"
                            value={input.attack}
                            name="attack"
                            onChange={(e) => handleChange(e)}
                            />
                        </div>
                </div>
                {errors.attack && <p className={styles.estiloError}>*{errors.attack}</p>}

                <div className={styles.estiloDiv}>
                    <div className={styles.estiloLabel}><label>Defense:</label></div>
                    <div>
                        <input className={styles.estiloInput}
                        type="number"
                        value={input.defense}
                        name="defense"
                        onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                {errors.defense && <p className={styles.estiloError}>*{errors.defense}</p>}

                <div className={styles.estiloDiv}>
                     <div  className={styles.estiloLabel}><label>Height:</label></div>
                    <div>
                        <input className={styles.estiloInput}
                        type="number"
                        value={input.height}
                        name="height"
                        onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {errors.height && <p className={styles.estiloError}>*{errors.height}</p>}
                </div>                

                <div className={styles.estiloDiv}>
                    <div className={styles.estiloLabel}><label>Weight:</label></div>
                    <div>
                        <input className={styles.estiloInput}
                        type="number"
                        value={input.weight}
                        name="weight"
                        onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                {errors.weight && <p className={styles.estiloError}>*{errors.weight}</p>}

                <div className={styles.estiloDiv}>
                    <div className={styles.estiloLabel}><label>Speed:</label></div>
                    <div>
                        <input className={styles.estiloInput}
                        type="number"
                        value={input.speed}
                        name="speed"
                        onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>                
                {errors.speed && <p className={styles.estiloError}>*{errors.speed}</p>}

                <div className={styles.estiloDiv}>
                         <div className={styles.estiloLabel}><label>Type1:</label></div>
                                <select
                                    className={styles.estiloSelect2}
                                    onChange={(e) => handleSelect1(e)}
                                >
                                    {types.length &&
                                    types.map((t) => (
                                        <option key={t.name} value={t.name}>
                                        {t.name}
                                        </option>
                                    ))}
                                </select>
                </div>

                <div className={styles.estiloDivUltimo}>
                <div className={styles.estiloLabel}><label>Type2:</label></div>
                  <select
                    className={styles.estiloSelect2}
                    onChange={(e) => handleSelect2(e)}
                  >
                    {types.length &&
                      types.map((t) => (
                        <option key={t.name} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                  </select>

                </div>
                <div>
                  
{input.types.length===0 || input.types.length > 2 ? (<p className={styles.estiloError}>{errors.types}</p>) 
: ((input.types[0] && input.types[1]) && input.types[0]===input.types[1]  ?
 <p className={styles.estiloError}>Los tipos no pueden ser iguales</p> : null)}                  
            
                  {console.log(errors.name)}
                              {!input.types.length ||
            input.types.length > 2 ||
            input.types[0] === input.types[1] ||
            errors.name ||
            errors.image ||
            errors.life ||
            errors.attack ||
            errors.defense ||
            errors.weight ||
            errors.height ||
            errors.speed ||
            !input.name ||
            !input.image ||
            !input.life ||
            !input.attack ||
            !input.defense ||
            !input.speed ||
            !input.weight ||
            !input.height ? (
              <button className={styles.buttonSubmit}  type="submit" disabled={true}>
                Crear personaje
              </button>
            ) : (
              <button className={styles.buttonSubmit} type="submit">
                Crear personaje
              </button>
            )}
                </div>

		    </form>
            <div className={styles.estiloDivTypes}>
              <p  className={styles.TiposSeleccionadosEstilo}>Tipos seleccionados:</p> 
                    {input.types.map(el => 
                    <div className={styles.typeCard}>
                        <p>{el}</p>
                        <button className={styles.botonCierreTipo} onClick={() => handleDelete(el)}>x</button>
                    </div>
                        )} 
            </div>
            {console.log(input.types)}


        </div>
		
	)
}