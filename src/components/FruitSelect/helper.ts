import { FRUITS_SEASON_MAP, SEASON_DETAILS } from "./constants";
import { FruitDetails } from "./types";

export const handleSelection = (
  event: React.ChangeEvent<HTMLSelectElement>,
  fruitDetails: FruitDetails,
  setFruitDetails: React.Dispatch<React.SetStateAction<FruitDetails>>
) => {
  const fruit: string = event.target.value;
  setFruitDetails({
    ...fruitDetails,
    name: fruit,
    season: FRUITS_SEASON_MAP[fruit] ?? "",
  });
};

export const getSeasonDetails = (season: string) => {
  // this is mocking an API call
  return SEASON_DETAILS[season];
};
