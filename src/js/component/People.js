import React from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const People = ({ char }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDetails = (id) => {
    actions.detailChar(id);
    navigate("/people-details");
  };

  return (
    <div className="card">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${char.result.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5> {char.result.properties.name}</h5>
        <div>
          <p>
            <strong>Gender: </strong>
            {char.result.properties.gender}{" "}
          </p>
          <p>
            <strong>Hair color: </strong>
            {char.result.properties.hair_color}{" "}
          </p>
          <p>
            <strong>Birth Year: </strong> {char.result.properties.birth_year}
          </p>
        </div>

        <div className="actionsContainer">
          <button onClick={() => handleDetails(char.result.uid)} className="btn btn-warning">
            Details
          </button>
          <button
            href="#"
            className="btn btn-warning"
            onClick={() => {
              actions.setFavoritesCharacters(char);
            }}
          >
            <strong>♥</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default People;
