import * as types from "./bingoTypes";


export function check(player, number) {
  return { type: types.CHECK, player, number}
}