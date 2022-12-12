/// <reference path="./global.d.ts" />
// @ts-check

/**
 *
 * @param {number} timer
 * @returns {string}
 */
export function cookingStatus(timer) {
  if (Number(timer) === 0) return "Lasagna is done.";
  if (timer && Number(timer) !== 0) return "Not done, please wait.";
  return "You forgot to set the timer.";
}
/**
 *
 * @param {array} layers
 * @param {number} time
 * @returns {number} preparationTime
 */
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export const quantities = function (layers) {
  const quant = {
    noodles: 0,
    sauce: 0,
  };
  layers.forEach((element) => {
    if (element === "noodles") quant.noodles += 50;
    if (element === "sauce") quant.sauce += 0.2;
  });
  return quant;
};

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, no) {
  const newRecipe = {};
  for (const item in recipe) {
    newRecipe[item] = recipe[item] * (no / 2);
  }
  return newRecipe;
}
