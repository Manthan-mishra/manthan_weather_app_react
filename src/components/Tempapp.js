import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5c7e20b5aa00ef3f82be2e0479733425`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <h1 className="my">Manthan Weather App</h1>
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-solid fa-street-view">{search}</i>
              </h2>
              <h1 className="temp">{city.temp} ℃el</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min} ℃el | Max: {city.temp_max} ℃el
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
