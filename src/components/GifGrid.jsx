import { useEffect, useState} from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
//Para buenas prácticas, evitar poner funciones dentro de los functional components RAFC

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);


    

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && ( <h2>Cargando</h2> )
        }

        <div className="card-grid">
          {
            images.map((image) => (
              <GifItem 
              key={image.id}
              {...image} //al poner asi, manda todos los parámetros del objeto image
              />
              
            ))
          }
        </div>
    </>
  )
}
