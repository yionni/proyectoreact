import React, { useEffect, useState } from "react";
import "./GamerList.css";
import {data} from '../../data/data'

export const GamerList = () => {

  

  const [gamers, setGamers] = useState([]); // Inicializa con un array vacío

  useEffect(() => {
    // Ejecutar solo en el montaje inicial
    setGamers(data);
  }, []); // Dependencia vacía para ejecutar solo en el montaje inicial

  return (
    <div>

          {/* <form onSubmit={submit}>
              <input
                type="text"
                value={busqueda}
                onChange={inputChange}
              />
          </form> */}

      <h1>Productos</h1>
      {gamers.length > 0 ? (
        gamers.map((game) => (
          <div key={game.id} className="card">
            <h5 className="card-title">Nombre: {game.nombre}</h5>
            <p className="card-text">Descripcion: {game.descripcion}</p>
            <p className="card-text-p">Precio: {game.precio}</p>
            <a href="../pages/buy.html" className="btn btn-primary">Comprar</a>
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};


/*  <div className="card">
   <img src="" alt="..." className="image-catalogue img-fluid d-block mx-auto"/> 
    <div className="card-body">
      <h5 className="card-title">{gamers.nombre}</h5>
      <p className="card-text">{gamers.descripcion}</p>
      <p className="card-text-p">{gamers.precio}</p>
      
        <a href="../pages/buy.html" className="btn btn-primary">Comprar</a>
    </div> 
</div> */
