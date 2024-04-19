export interface Payload {
  [k: string]: any;
}
export interface Action {
  type: string;
  payload?: Payload;
}
