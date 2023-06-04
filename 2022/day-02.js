import strategyGuide from "./inputs/day-02.js";

const calculateTotalScore = (strategyGuide) => {
  const choicesMap = {
    A: "Y", // Rock -> Paper
    B: "X", // Paper -> Rock
    C: "Z", // Scissors -> Scissors
  };

  const rounds = strategyGuide.trim().split("\n");
  let totalScore = 0;

  for (const round of rounds) {
    const [opponentChoice, ourChoice] = round.split(" ");
    const opponentScore = ["A", "B", "C"].indexOf(opponentChoice) + 1;
    const ourScore = ["X", "Y", "Z"].indexOf(choicesMap[opponentChoice]) + 1;

    if (ourChoice === choicesMap[opponentChoice]) {
      totalScore += ourScore + 3; // Draw
    } else if (
      (ourChoice === "X" && choicesMap[opponentChoice] === "Z") || // Rock > Scissors
      (ourChoice === "Y" && choicesMap[opponentChoice] === "X") || // Paper > Rock
      (ourChoice === "Z" && choicesMap[opponentChoice] === "Y") // Scissors > Paper
    ) {
      totalScore += ourScore + 6; // Win
    } else {
      totalScore += ourScore; // Loss
    }
  }

  return totalScore;
};

const totalScore = calculateTotalScore(strategyGuide);
console.log("Total Score according to the strategy guide:", totalScore);
