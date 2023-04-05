export interface Option {
  value: string;
  label: string;
}

export type FruitsSeasonMap = Record<string, string>;

export interface FruitDetails {
  name: string;
  season: string;
}
