import { useState, useEffect } from "react";
import axios from "axios";
import TransformationCard from "./TransformationCard";

export default function Transformations() {
  const [transformations, setTransformations] = useState([]);

  useEffect(() => {
    getTransformation();
  }, []);

  const getTransformation = async () => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/transformations`
      );
      setTransformations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Dragon Ball</h1>
      <div className="character-container">
        {transformations.map((fighter, index) => (
          <TransformationCard key={index} valor={fighter} />
        ))}
      </div>
    </>
  );
}
