import { FruitsSeasonMap, Option } from "./types";

export const FRUITS_SEASON_MAP: FruitsSeasonMap = {
  banana: "all",
  apple: "all",
  orange: "winter",
  pear: "spring",
  mango: "summer",
  watermelon: "summer",
};

export const OPTIONS: Option[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "pear", label: "Pear" },
  { value: "mango", label: "Mango" },
  { value: "watermelon", label: "Watermelon" },
];

export const SEASON_DETAILS: FruitsSeasonMap = {
  summer: "Hot and humid.",
  winter: "Cold and dry.",
  all: "All is well.",
  spring: "Neither too hot nor cold.",
};
