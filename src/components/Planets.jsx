import { useState, useEffect } from "react";
import axios from "axios";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [isDestroyed, setIsDestroyed] = useState();

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async () => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/planets?limit=50`
      );
      setPlanets(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const filterByStatus = (e) => {
    setIsDestroyed(e.target.value);
  };

  return (
    <>
      <h1>Dragon Ball</h1>
      <select value={isDestroyed} onChange={filterByStatus}>
        <option value="">All</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      {/* <select value={isDestroyed} onChange={filterByStatus}>
        <option value="">All</option>
        {planets.map((destroyed, index) => (
          <option key={index} value={destroyed}>
            {destroyed}
          </option>
        ))}
      </select> */}

      <div className="character-container">
        {Array.isArray(planets) && planets.map((planet) => 
            <div key={planet.id} className="character">
              <div className="character-img">
                <img src={planet.image} alt={planet.name} />
              </div>
              <div className="info">
                <h3 id="character-name">{planet.name}</h3>
                <p style={{textAlign: "center"}}>
                  <b>Is destroyed: </b>
                  {planet.isDestroyed === false
                ? "No" : "Yes"}
                </p>
                {/* <span><b>Description: </b>{planet.description}</span> <br /> */}
              </div>
            </div>
          )}
      </div>
    </>
  );
}
