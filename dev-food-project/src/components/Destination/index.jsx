import React, { useContext } from "react";
import "./destination.css";
import { useState } from "react";
import { destinations } from "../../utils/constants";
import { AppContext } from "../../contexts/AppContext";

const Destination = () => {
  const [filtro, setFiltro] = useState(destinations);

  const { addItem } = useContext(AppContext);

  const handleFiltro = (tipo) => {
    if (tipo != null || tipo != undefined) {
      setFiltro(destinations.filter((options) => options.tipo === tipo));
    } else {
      setFiltro(destinations);
    }
  };

  return (
    <>
    <h1 id="destinations">Find your place with us, we have national and international options.</h1>
      <div className="destinationContent">
        <div className="allButtonContent">
          <button className="buttonContent" onClick={() => handleFiltro()}>
            All
          </button>
          <button
            className="buttonContent"
            onClick={() => handleFiltro("Internacional")}
          >
            International
          </button>
          <button
            className="buttonContent"
            onClick={() => handleFiltro("Nacional")}
          >
            National
          </button>
        </div>
        {filtro.map((destination) => (
          <div key={destination.id}>
            <ul className="cardContent">
              <li>{destination.nome}</li>
              <img
                src={destination.imagem}
                alt="ImagemDestino"
                className="fotoContent"
              />
              <li>R$ {destination.valor.toFixed(2).replace(".",",")}</li>
              <button
                className="addButton"
                onClick={() => addItem(destination)}
              >
                Shop
              </button>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Destination;
