import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const params = useParams();
    
    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`"https://api.sampleapis.com/beers/ale/${params.id}`)
        const data = await res.json()
        console.log(data)
        console.log(params)
        // setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    })
    
  
  
  return (
    <div>
        <h2>Cerveza numero...</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button>Go back</button>
    </div>

  )
}

export default Beer