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

const findTotalTopThreeCalories = (input) => {
  const elves = input.trim().split("\n\n");
  const caloriesMap = new Map();

  for (const elf of elves) {
    const calories = elf.split("\n").map(Number);
    const totalCalories = calories.reduce((sum, calorie) => sum + calorie, 0);
    caloriesMap.set(totalCalories, (caloriesMap.get(totalCalories) || 0) + 1);
  }

  const sortedCalories = Array.from(caloriesMap.keys()).sort((a, b) => b - a);
  let totalTopThreeCalories = 0;
  let count = 0;
  let i = 0;

  while (count < 3 && i < sortedCalories.length) {
    const calories = sortedCalories[i];
    const occurrences = caloriesMap.get(calories);
    const availableSlots = 3 - count;

    if (occurrences <= availableSlots) {
      totalTopThreeCalories += calories * occurrences;
      count += occurrences;
    } else {
      totalTopThreeCalories += calories * availableSlots;
      count += availableSlots;
    }

    i++;
  }

  return totalTopThreeCalories;
};

const maxCalories = findMaxCalories(input);
console.log(
  "Total Calories carried by the Elf with the most Calories:",
  maxCalories
);

const totalTopThreeCalories = findTotalTopThreeCalories(input);
console.log(
  "Total Calories carried by the top three Elves:",
  totalTopThreeCalories
);
