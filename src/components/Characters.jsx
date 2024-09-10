import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCharacter } from "../store/slice";
import { Link } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState([]);
  const [uniqueRaces, setUniqueRaces] = useState([]);
  const [affiliation, setFilliation] = useState([]);
  const [uniqueAffiliation, setUniqueAffiliation] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const addFavorite = useSelector((state) => state.character.characters);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/characters?name=${search}`
      );
      setCharacters(response.data.items);
      const races = response.data.items.map((fighter) => fighter.race);
      const affiliation = response.data.items.map(
        (fighter) => fighter.affiliation
      );
      setUniqueRaces([...new Set(races)]); // Extraer razas únicas
      setUniqueAffiliation([...new Set(affiliation)]);
    } catch (error) {
      console.error(error);
    }
  };

  const FilterCharacter = async (index) => {
    const response = await axios.get('https://dragonball-api.com/api/characters?limit=1');
    data(index, response)
  }

  const data = (index, response)=>{
    const showCharacter = [...characters]
    showCharacter[index]={...response.data.items[0]}
    setCharacters(showCharacter);
  }
  
  const addCharacters = (fighter, index) => {
    dispatch(addFavoriteCharacter(fighter));
    FilterCharacter(index)
  };
  
  
  const deleteCharacters = ()=>{

  }

  const filterByRace = (e) => {
    setRace(e.target.value);
  };

  const filterByAffiliation = (e) => {
    setFilliation(e.target.value);
  };

  const Search = (e) => {
    setSearch(e.target.value);
  };

  const filteredCharacters = characters.filter((fighter) => {
    // const nameMatch = search === '' || fighter.name.toLowerCase().includes(search.toLowerCase());
    const raceMatch = race === "" || fighter.race === race;
    const affiliationMatch =
      affiliation === "" || fighter.affiliation === affiliation;
    return (raceMatch && affiliationMatch) || (affiliationMatch && raceMatch);
  });

  return (
    <>
      <h1>Dragon Ball</h1>
      <select value={race} onChange={filterByRace}>
        <option value="">All</option>
        {uniqueRaces.map((race, index) => (
          <option key={index} value={race}>
            {race}
          </option>
        ))}
      </select>
      <select value={affiliation} onChange={filterByAffiliation}>
        <option value="">All</option>
        {uniqueAffiliation.map((affiliation, index) => (
          <option key={index} value={affiliation}>
            {affiliation}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={search}
        placeholder="Search by name"
        onChange={Search}
      />
      <div className="character-container">
        {filteredCharacters.length === 0
          ? characters.map((fighter) => (
              <CharacterCard
                key={fighter.id}
                index={fighter.id}
                valor={fighter}
                EventClick={addCharacters}
                DeleteClick={deleteCharacters}
              />
            ))
          : filteredCharacters.map((fighter) => (
              <CharacterCard
                key={fighter.id}
                index={fighter.id}
                valor={fighter}
                EventClick={addCharacters}
                DeleteClick={deleteCharacters}
              />
            ))}
      </div>
      <hr />
      <div>
        {addFavorite.map((fighter, index) => (
          <Link key={index} to="/favorites">
            <button>{fighter.name}</button>
          </Link>
        ))}
      </div>
    </>
  );
}
