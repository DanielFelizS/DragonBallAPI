import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";

export default function Favorites() {
  // const dispatch = useDispatch();
  const addCharacter = useSelector((state) => state.character.characters);

  return (
    <>
      <div className="character-container">
        {addCharacter.map((character, index) => (
          <CharacterCard key={index} valor={character} />
        ))}
      </div>
    </>
  );
}