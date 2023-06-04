import rucksacksStr from "./inputs/day-03.js";

const rucksacks = rucksacksStr.trim().split("\n");

function calculatePrioritySum(rucksacks) {
  let prioritySum = 0;

  for (const rucksack of rucksacks) {
    const [compartment1, compartment2] = splitIntoCompartments(rucksack);
    const commonItems = findCommonItems(compartment1, compartment2);
    const priorities = calculatePriorities(commonItems);
    prioritySum += calculatePrioritySumForRucksack(priorities);
  }

  return prioritySum;
}

function splitIntoCompartments(rucksack) {
  const halfway = Math.floor(rucksack.length / 2);
  const compartment1 = rucksack.substring(0, halfway);
  const compartment2 = rucksack.substring(halfway);
  return [compartment1, compartment2];
}

function findCommonItems(compartment1, compartment2) {
  const commonItems = new Set();

  for (const item of compartment1) {
    if (compartment2.includes(item)) {
      commonItems.add(item);
    }
  }

  return commonItems;
}

function calculatePriorities(items) {
  const priorities = new Map();

  for (const item of items) {
    let priority;

    if (item >= "a" && item <= "z") {
      priority = item.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } else if (item >= "A" && item <= "Z") {
      priority = item.charCodeAt(0) - "A".charCodeAt(0) + 27;
    }

    priorities.set(item, priority);
  }

  return priorities;
}

function calculatePrioritySumForRucksack(priorities) {
  let prioritySum = 0;

  for (const priority of priorities.values()) {
    prioritySum += priority;
  }

  return prioritySum;
}

function calculatePrioritySumForGroups(groups) {
  let prioritySum = 0;

  for (const group of groups) {
    const commonItem = findCommonItemInGroup(group);
    const priority = calculatePriority(commonItem);
    prioritySum += priority;
  }

  return prioritySum;
}

function findCommonItemInGroup(group) {
  const commonItems = new Set(group[0]);

  for (let i = 1; i < group.length; i++) {
    const rucksack = group[i];

    for (const item of commonItems) {
      if (!rucksack.includes(item)) {
        commonItems.delete(item);
      }
    }
  }

  return [...commonItems][0];
}

function calculatePriority(item) {
  let priority;

  if (item >= "a" && item <= "z") {
    priority = item.charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else if (item >= "A" && item <= "Z") {
    priority = item.charCodeAt(0) - "A".charCodeAt(0) + 27;
  }

  return priority;
}

function splitIntoGroups(rucksacks) {
  const groups = [];

  for (let i = 0; i < rucksacks.length; i += 3) {
    const group = rucksacks.slice(i, i + 3);
    groups.push(group);
  }

  return groups;
}

const prioritySum = calculatePrioritySum(rucksacks);
console.log("Priority Sum:", prioritySum);

const groups = splitIntoGroups(rucksacks);

const prioritySumForGroups = calculatePrioritySumForGroups(groups);
console.log("Priority Sum for Groups:", prioritySumForGroups);
