import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

    //useEffect es un hook de React que hace que una función se ejecute solo una vez al cargar la pag, sin necesidad de que cargue cada vez que el hook useState se ejecute
    useEffect( () => {
        getImages();
    }, [] )

  return {
    images, //es lo mismo que escribir images: images
    isLoading
  }
}
