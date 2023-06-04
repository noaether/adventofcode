import input from "./inputs/day-01.js";

function findMaxCalories(input) {
  const elves = input.trim().split("\n\n");
  let maxCalories = 0;

  for (const elf of elves) {
    const calories = elf.split("\n").map(Number);
    const totalCalories = calories.reduce((sum, calorie) => sum + calorie, 0);
    maxCalories = Math.max(maxCalories, totalCalories);
  }

  return maxCalories;
}

const maxCalories = findMaxCalories(input);
console.log(
  "Total Calories carried by the Elf with the most Calories:",
  maxCalories
);
