export type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

export interface State {
  count: number;
}
