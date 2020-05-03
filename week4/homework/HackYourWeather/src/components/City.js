import React from "react";
import { Link } from "react-router-dom";

export default function City({ city, deleteCity }) {
  return (
    <div>
      <Link to={`/${city.id}`}>
        <p className="forecast">5 day forecast</p>
      </Link>
      <div className="container">
        <div className="entrance">
          <h1 className="tittle">
            {city.name}, {city.sys.country}
          </h1>
          <button className="deleteBtn" onClick={() => deleteCity(city.id)}>
            X
          </button>
        </div>

        <div className="main">
          <h2>{city.weather[0].main}</h2>
          <p>{city.weather[0].description}</p>
        </div>
        <div className="tempLoc">
          <p>min temp: {city.main.temp_min} °C</p>
          <p>max temp: {city.main.temp_min} °C</p>
          <p>
            location: {city.coord.lon}, {city.coord.lat}
          </p>
        </div>
      </div>
    </div>
  );
}
