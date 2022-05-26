/*
* Utilizamos los Hook 
! useEffect este sirve para manejar los fectos colaterales como la llamada de red que  es la llamada a la API
! useState para colocarle un estado a la aplicación (POST, PUT, GET, DELETE)
*
*/

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]); //UseState retorna el estado (characters) y la funcion que modifica el estado (setCharacters), el useState([]) da el valor inicial que puede ser un arreglo acio
  const [info, setInfo] = useState([])
  
  const initialUrl = "https://rickandmortyapi.com/api/character";

  //Crear la funcion es la que se va a encargar de hacer la llamada de red
  const fetchCharacters = (url) => {
    //LLamada a la API
    fetch(url)
      //promesa de retorno
      .then((res) => res.json()) // si encuentra informacion la convertimos a formato Json para poderla manipular
          .then((data) =>{
            setCharacters(data.results);
            setInfo(data.info)
            
          }) //trae los datos convertidos de Json a JavaScript, y traera los datos que queremos ver desde la api
            

          //Error en la traida de los datos, los errores se verna por la consola
          .catch((err) => console.log(err));
  };

  //Creando la funcion de onNext y onPrevius paginador
    const onPrevious = () => {
      fetchCharacters(info.prev)
    }

    const onNext = () => {
      fetchCharacters(info.next)
    }



  //creamos el useEffect dentro de la funcion para organizar la llamada de la api
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container mt-5">
        <Pagination prev = {info.prev} next = {info.next} onPrevious = {onPrevious} onNext = {onNext} />
        <Characters characters={characters} />
        <Pagination prev = {info.prev} next = {info.next} onPrevious = {onPrevious} onNext = {onNext} />
      </div>
    </>
  );
}

export default App;
