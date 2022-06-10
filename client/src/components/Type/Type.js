import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTypes} from "../../actions/index";


export default function Type() {
    const dispatch = useDispatch()
    useEffect(() => {
		dispatch(getTypes())
	},[]);
    const types = useSelector((state) => state.types);
    console.log(types)

    return (
        
            <div>
    				 
                            types?.map((t) => {

                                   <h1>hola</h1> 

                                })

					

            </div>

    )

}   

