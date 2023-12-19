import React from "react";
import { Context } from "../store/appContext.js";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Vehicles = ({ vehicle }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/starships/${vehicle.result.uid}.jpg`);

  function handleImageError() {
    // Código para manejar el error de carga de la imagen
    setImageSource("https://c4.wallpaperflare.com/wallpaper/670/495/775/tv-show-the-mandalorian-baby-yoda-star-wars-the-mandalorian-tv-show-hd-wallpaper-preview.jpg");
  }

  const handleDetails = (id) => {
    actions.detailVehicle(id);
    navigate("/starships-details");
  };

  return (
    <div className="card">
      <img src={imageSource} onError={handleImageError} className="card-img-top" />
      <div className="card-body">
        <h5>{vehicle.result.properties.name}</h5>

        <div>
          <p>
            <span>Model: </span>
            {vehicle.result.properties.model}
          </p>
          <p>
            <span>Manufacturer: </span>
            {vehicle.result.properties.manufacturer}{" "}
          </p>
          <p>
            <span>Passengers: </span>
            {vehicle.result.properties.passengers}{" "}
          </p>
        </div>
        <div className="actionsContainer">
          <button onClick={() => handleDetails(vehicle.result.uid)} className="btn btn-warning">
            Details
          </button>

          <button
            href="#"
            className="btn btn-warning "
            onClick={() => {
              actions.setFavoritesVehicles(vehicle);
            }}
          >
            <strong>♥</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
