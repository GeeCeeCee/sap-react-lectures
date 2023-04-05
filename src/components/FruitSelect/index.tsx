import React from "react";
import { OPTIONS } from "./constants";
import { getSeasonDetails, handleSelection } from "./helper";
import { FruitDetails } from "./types";

const FruitSelect: React.FC = () => {
  const [fruitDetails, setFruitDetails] = React.useState<FruitDetails>({
    name: "",
    season: "",
  });

  const seasonDetails = React.useRef("");

  const handleAddUser = React.useCallback(() => {
    seasonDetails.current = getSeasonDetails(fruitDetails.season);
  }, [fruitDetails.season]);

  return (
    <section>
      <div>Select your fruits</div>
      <select
        value={fruitDetails.name}
        onChange={(event) => {
          handleSelection(event, fruitDetails, setFruitDetails);
        }}
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </section>
  );
};

export default FruitSelect;
