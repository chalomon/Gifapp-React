import {useState} from 'react' 
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
//Al crear el archivo de barril, se pueden importar del mismo directorio de la siguiente manera
import {AddCategory, GifGrid} from './components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer']);


    //Dentro del setCategories, entra el arreglo "categories", que corresponde al array del useState.
    //Para modificarlo, usamos setCategories() y dentro de esta función, se puede usar el array categories
    //Pero se puede renombrar con una función de flecha. Ejemplo: 
    //setCategories(nombreNuevoParaArray => [...nombreNuevoParaArray, 'Valor a agregar']);
    //Usamos el ... antes del array para decir que vamos a concatenar el array antiguo dentro del nuevo array
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories]);
    }

  return (
      <>
        
      <div>Aplicación para buscar Gifs</div>

        
        <AddCategory 
            //setCategories={setCategories} 
            onNewCategory={(value) => onAddCategory(value)}
        />

        {
                categories.map((category) =>
                    (
                        <GifGrid key={category} category={category}/>
                    )
            )}
        

      </>
  )
}
