import strategyGuide from "./inputs/day-02.js";

/*
const strategyGuide = `
A Y
B X
C Z
`;
*/
const POINTMAP = {
  "A X": [4, 3],
  "A Y": [8, 4],
  "A Z": [3, 8],
  "B X": [1, 1],
  "B Y": [5, 5],
  "B Z": [9, 9],
  "C X": [7, 2],
  "C Y": [2, 6],
  "C Z": [6, 7],
};

function calculateScore(strategyGuide) {
  const throws = strategyGuide.trim().split("\n");
  const totalScores = [0, 0];

  for (let i = 0; i < throws.length; i++) {
    const throwStr = throws[i];
    const points = POINTMAP[throwStr];

    totalScores[0] += points[0];
    totalScores[1] += points[1];
  }

  return totalScores;
}

const totalScore = calculateScore(strategyGuide);
console.log("Total Score:", totalScore);
