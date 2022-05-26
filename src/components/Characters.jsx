import React from "react";

const Characters = ({ characters = [] }) => { // Al colocar el arreglo vacio, permite utilizar la funcion map, auque no es necesario
  return (
    <div className="row">
      {
      characters.map((item, index) => ( //Colocando el () en vez de las llaves indica que el return esta implisito
        <div key={index} className="col mb-4">
            <div className="card" style={{minWidth:'200px'}}>
                <img src={item.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <hr />
                    <p>location: {item.location.name}</p>
                    <p>Especie: {item.species}</p>
                    <p>Estado: {item.status}</p>
                    <p>Episodio: {item.gender}</p>

                </div>

            </div>

        </div>
      ))
}
    </div>
  );
};

export default Characters;
