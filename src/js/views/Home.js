import React, { useContext, useEffect } from "react";
import People from "../component/People";
import Planets from "../component/Planets";
import Vehicles from "../component/Vehicles";
import { Context } from "../store/appContext";

const Home = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getDataPeople();
    actions.getDataPlanets();
    actions.getDataVehicles();
  }, []);

  const handleDelete = (index) => {
    actions.deleteFavorite(index);
  };

  return (
    <div className="container-fluid">
      <h1>Characters</h1>

      <div className="d-flex">
        {store.char.map((char, index) => (
          <People key={index} index={index} char={char} />
        ))}
      </div>

      <h1>Planets</h1>
      <div className="d-flex">
        {store.planet.map((planet, index) => (
          <Planets key={index} index={index} planet={planet} />
        ))}
      </div>

      <h1>Star Ships</h1>
      <div className="d-flex">
        {store.vehicle.map((vehicle, index) => (
          <Vehicles key={index} index={index} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Home;
