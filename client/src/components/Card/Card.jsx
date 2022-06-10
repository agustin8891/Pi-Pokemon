import React from "react";
import styles from './Card.module.css'

export default function Card({name, image, types, key}) {

	return (
		<div> 
			<p className={styles.cardStyleName}>{name}</p>
			<img src = {image} alt="img not found" width="200px" />
			<p className={styles.cardStyletype}>type: {types[0]} {types[1]}</p>
		</div>
	);
}


