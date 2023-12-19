import React from "react";
import { Context } from "../store/appContext.js";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

const Planets = ({ planet }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`);

  const handleDetails = (id) => {
    actions.detailPlanet(id);
    navigate("/planet-details");
  };

  function handleImageError() {
    // Código para manejar el error de carga de la imagen
    setImageSource("https://c4.wallpaperflare.com/wallpaper/670/495/775/tv-show-the-mandalorian-baby-yoda-star-wars-the-mandalorian-tv-show-hd-wallpaper-preview.jpg");
  }

  return (
    <div className="text-start">
      <div className="card">
        <img src={imageSource} onError={handleImageError} className="card-img-top" />
        <div className="card-body">
          <h5> {planet.result.properties.name}</h5>

          <div>
            <p>
              <strong>Population: </strong> {planet.result.properties.population}
            </p>
            <p>
              <strong>Terrain: </strong>
              {planet.result.properties.terrain}{" "}
            </p>
          </div>
          <div className="actionsContainer">
            <button onClick={() => handleDetails(planet.result.uid)} className="btn btn-warning">
              Details
            </button>
            <button
              href="#"
              className="btn btn-warning"
              onClick={() => {
                actions.setFavoritesPlanets(planet);
              }}
            >
              <strong>♥</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
